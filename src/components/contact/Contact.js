






import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import { useContext, useRef, useState } from "react";
 import emailjs from "emailjs-com";
import { ThemeContext } from "../../Context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

   const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      /* .sendForm(
        "service_nsyompr",
        "template_g0u88q7",
        formRef.current,
        "user_aPb4m-ptRIe-PETGv"
      ) */
      .sendForm(
        "default_service",
        "contact_form",
        formRef.current,
        "aPb4m-ptRIe-PETGv"
      )
      // .sendForm('service_nsyompr', 'contact_form', formRef.current)
      .then(
        (result) => {
          console.log(result);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }; 

  return (
    <div className="c" id="contact">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +45 52 61 24 97
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              hparul@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Duevej,24  1 t.v Frederiksberg,2000,Copenhagen
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && " Thank you... Your message has been sent. I will contact you shortly. "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;