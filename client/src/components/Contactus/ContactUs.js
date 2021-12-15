import React, { useRef, useState } from "react";
import "./contactus.css";
import location from "../../final project design we run/location.png";
import mail from "../../final project design we run/mail.png";
import call from "../../final project design we run/call.png";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p>Your message has been successfully sent. I will contact you soon</p>
  );
};

const ContactUs = () => {
  const form = useRef();
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t1idua6",
        "template_4ijnclb",
        form.current,
        "user_iRyFgIPdirDemrF3xnvPo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };
  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <div>
      <div className="contact-gl">
        <section className="ctc-body">
          <div className="container">
            <div className="contact-info">
              <div>
                <h2>Contact Info</h2>
                <ul className="inf">
                  <li>
                    <span>
                      <img src={location} alt="loc" />
                    </span>
                    <span>
                      Avenue Bourguiba <br />
                      Métouia Gabés 6010
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src={mail} alt="loc" />
                    </span>
                    <span>hassenmohamed.92@gmail.com</span>
                  </li>
                  <li>
                    <span>
                      <img src={call} alt="loc" />
                    </span>
                    <span>+216 20 32 99 11</span>
                  </li>
                </ul>
              </div>
              <ul className="sci">
                <li>
                  <i class="fab fa-facebook-f"></i>
                </li>
                <li>
                  <i class="fab fa-twitter"></i>
                </li>
                <li>
                  <i class="fab fa-instagram"></i>
                </li>
                <li>
                  <i class="fab fa-linkedin-in"></i>
                </li>
                <li>
                  <i class="fab fa-whatsapp"></i>
                </li>
              </ul>
            </div>
            <form className="ctcform" ref={form} onSubmit={sendEmail}>
              <h2> Send a Message</h2>
              <div className="frbx">
                <div className="inbx w50">
                  <input type="text" name="first name" required />
                  <span>First Name</span>
                </div>
                <div className="inbx w50">
                  <input type="text" name="last name" required />
                  <span>Last Name</span>
                </div>
                <div className="inbx w50">
                  <input type="email" name="email" required />
                  <span>Email Adress</span>
                </div>
                <div className="inbx w50">
                  <input type="text" name="mobile number" required />
                  <span>Mobile Number</span>
                </div>
                <div className="inbx w100">
                  <textarea name="message" required></textarea>
                  <span>Write your message here...</span>
                </div>
                <div className="inbx w100">
                  <button>Submit</button>
                  <div className="rowsss">{result ? <Result /> : null}</div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
