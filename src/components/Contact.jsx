import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import db from "../firebase/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Please provide value in each input field");
    } else {
      try {
        addDoc(collection(db, "contacts"), {
          name: name,
          email: email,
          subject: subject,
          message: message,

          created: Timestamp.now(),
        });
      } catch (err) {
        alert(err);
      }
      toast.success("Form Submitted Successfully");
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <section className="contact-section">
      <div className="container">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <h3 className="mb-4">Mesaj Gönderme</h3>
                    <form
                      id="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Name"
                              onChange={handleInputChange}
                              value={name}
                            />
                          </div>
                        </div>
                        <p></p>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              onChange={handleInputChange}
                              value={email}
                            />
                          </div>
                        </div>
                        <p></p>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Subject"
                              onChange={handleInputChange}
                              value={subject}
                            />
                          </div>
                        </div>
                        <p></p>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              name="message"
                              placeholder="Message"
                              cols={30}
                              rows={10}
                              onChange={handleInputChange}
                              value={message}
                            ></textarea>
                          </div>
                        </div>
                        <p></p>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Gönder"
                              className="btn btn-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    {/* <h3>İletişim:</h3> */}
                    <h3> </h3>
                    <p className="mb-4">
                      Bizimle iletişime geçmek için mesaj gönderebilirsiniz.
                      Öneri ve görüleriniz bizim için değerlidir.
                    </p>

                    {/* <p>
                      {" "}
                      <h6>WhatsApp: </h6>
                      <i
                        className="bi bi-whatsapp h5"
                        style={{ backgroundColor: "green" }}
                      ></i>
                      {""} {""} {""} {""} {""}
                      <span>0544 223 6441</span>
                    </p> */}

                    {/*    <div className="dbox w-100 d-flex align-items-start">
                       <div className="icon d-flex align-items-center justify-content-center">
                         <span className="fa fa-map-marker"></span>
                       </div>
                       <div className="text pl-3">
                         <p>
                           <span>Address:</span> Ankara / Turkey
                        
                         </p>
                       </div>
                     </div> */}
                    {/*      <div className="dbox w-100 d-flex align-items-center">
                       <div className="icon d-flex align-items-center justify-content-center">
                         <span className="fa fa-phone"></span>
                       </div>
                       <div className="text pl-3">
                         <p>
                           <span>Phone:</span>
                           <a href="/">+90 0000 0000</a>
                         </p>
                       </div>
                     </div> */}
                    {/*    <div className="dbox w-100 d-flex align-items-center">
                       <div className="icon d-flex align-items-center justify-content-center">
                         <span className="fa fa-paper-plane"></span>
                       </div>
                       <div className="text pl-3">
                         <p>
                           <span>Email:</span>
                           <a href="/">
                          Please use form
                           </a>
                         </p>
                       </div>
                     </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
