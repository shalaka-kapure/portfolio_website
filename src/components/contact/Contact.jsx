import "./contact.css";
import contact from "../../img/contact.png";
import { AiOutlineMessage } from "react-icons/ai";
import { FiLink } from "react-icons/fi";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  const [showAlert, setShowAlert] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText("shalakakapure@gmail.com");
    setShowAlert(true);
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="c-left">
          <div>
            <h2>
              Hi, Let's have a quick chat <AiOutlineMessage />
            </h2>
          </div>
          <div>
            <button onClick={handleCopy}>
              <FiLink />
              Copy Email
            </button>
            <div className="alert">
            {showAlert && <span>Email has been copied!</span>}
            </div>
           
          </div>
          <div>
            <img src={contact} alt="" />
          </div>
        </div>
        <div className="c-right">
          <div className="cname">
            <h2>Contact</h2>
            <h2>Me</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input type="text" name="Name" placeholder="Your Name" />
            </div>
            <hr />
            <div>
              <input type="email" name="Email" placeholder="Your Email" />
            </div>
            <hr />
            <div>
              <input placeholder="Your Message here"></input>
            </div>
            <hr />
            <div>
              <div>
              <button type="submit">Send</button>
              </div>
              <div className="span">
              {message && <span>Thank you, will get in touch soon!</span>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
