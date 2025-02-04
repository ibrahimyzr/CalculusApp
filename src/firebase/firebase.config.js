// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG-c0VuhTBhN5deoZoOYdLHiewQ9RjYaU",
  authDomain: "calculus-80759.firebaseapp.com",
  projectId: "calculus-80759",
  storageBucket: "calculus-80759.firebasestorage.app",
  messagingSenderId: "450078020655",
  appId: "1:450078020655:web:116cbe7a557a00e0b0a2da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
