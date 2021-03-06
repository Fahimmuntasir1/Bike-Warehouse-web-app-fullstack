import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="bg-light py-5">
      <h2 className="text-center py-2">Contact Us</h2>
      <div className="border">
        
      </div>

      <div className="contact-responsive flex justify-content-around align-items-center">
        <div className="mail-anim">
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_u25cckyh.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "400px" }}
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="contact-div">
          <form className="flex contact-form">
            <input type="text" placeholder="Enter your name" />
            <input type="email" name="" id="" placeholder="Your email" />
            <textarea
              name="messages"
              id=""
              cols="20"
              rows="7 "
              placeholder="Your message here"
            ></textarea>
            <button>SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
