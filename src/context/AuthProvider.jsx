import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // login with google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // login with github
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const updateUser = (currentUser, username) => {
    return updateProfile(currentUser, {
      displayName: username,
      photoURL: "",
    });
  };

  // email verification
  const emailVerification = currentUser => sendEmailVerification(currentUser);

  // login
  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // reset or fogotten password
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  // logOut
  const logOut = () => {
    return signOut(auth);
  };

  // observer
    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      //  console.log(currentUser);
      setUser(currentUser);
      if (currentUser.displayName =="Ayse") 
       {setAdmin(currentUser)}
       else
       {setAdmin(null)}
   
        setLoading(false); 
       
     });
    // clean up function
     return unsubscribe;
   }, []);  
 
  const value = {
    admin,
    user,
    loading,
    googleLogin,
    githubLogin,
    createUser,
    emailVerification,
    updateUser,
    loginUser,
    resetPassword,
    logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
