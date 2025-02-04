import { db } from "../firebase/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { useState, useEffect } from "react";

function Messages(name, message) {
  const [contacts, setContacts] = useState([]);
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const fetchBlogs = () => {
    const response = query(collection(db, "contacts"), orderBy("name", "desc"));
    onSnapshot(response, (querySnapshot) => {
      setContacts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    //  console.log(contacts);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* function to delete a document from firstore */
  const handleDelete = () => {
    const contactDocRef = doc(db, "contacts", contacts[0].id);

    // console.log(contactDocRef.id);
    deleteDoc(contactDocRef);
  };

  /////////////////////////////
  const handleUpdate = async (e) => {
    /* e.preventDefault(); */
    const taskDocRef = doc(db, "contacs", contacts[0].id);
    try {
      await updateDoc(taskDocRef, {
        name: name,
        message: message,
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">Messages:</h2>
      <div className="grid mb-8 border border-gray-100 rounded-lg shadow-sm dark:border-gray-100 md:mb-12 md:grid-cols-4 flex">
        {contacts &&
          contacts.map((contact) => (
            <div
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={contact.id}
            >
              <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {contact.data.name}
                </h5>
                <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {contact.data.email}
                </h5>
                <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {contact.data.subject}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {contact.data.message.length > 20
                    ? contact.data.message.slice(0, 30) + "…"
                    : contact.data.message}
                </p>
                <span></span>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  style={{ backgroundColor: "blue" }}
                  onClick={() => handleDelete()}
                >
                  Delete
                </button>
                <button
                  className="text-white bg-blue-700"
                  style={{ backgroundColor: "blue" }}
                  onClick={() => handleUpdate()}
                >
                  update
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  /*   const [blogs,setBlogs]=useState([] as any)
  const fetchBlogs=async()=>{
    const response=db.collection('contacts');
    const data=await response.get();
    data.docs.map(item=>{
    
   
     console.log(blogs)

     setBlogs([{...item.data,name: item.data().name,email:item.data().email,message:item.data().message}])
    })
    
  }
  useEffect(() => {
    fetchBlogs();
  }, [])
  return (
    <div   style={{alignItems:'center'}}>
  
      { blogs.map((blog:any,index:any) =>{
          return (
            <div key={index} className='col-sm-4'>
              <h4>{blog.name}</h4>
              <h4>{blog.email}</h4>
              <p>{blog.message}</p>
           
            </div>
          )
        })}
        </div>
  
  ); */
}

export default Messages;
