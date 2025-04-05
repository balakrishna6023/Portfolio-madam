import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import mail from "../assets/mail_icon.svg";
import location from "../assets/location_icon.svg";
import mobile from "../assets/call_icon.svg";
import "./contact.css";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formRef.current,
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setStatus("Message Sent Successfully!");
          formRef.current.reset();
        },
        (error) => {
          setStatus("Failed to send message. Try again!");
          console.error(error);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2, ease: "easeOut" }}}
    >
      {/* Heading */}
      <motion.h1
        className="contact-heading"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.6 }}}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h1>

      <div className="contact-content">
        {/* Left Side */}
        <motion.div
          className="contact-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.6 }}}
          viewport={{ once: true }}
        >
          <h1>Let's Talk</h1>
          <p>I'm currently available for new projects. Feel free to message me.</p>

          <div className="info">
            <motion.img src={mail} alt="Email Icon" whileHover={{ scale: 1.1 }} />
            <p>balakrishnalingala94@gmail.com</p>
          </div>

          <div className="info">
            <motion.img src={mobile} alt="Phone Icon" whileHover={{ scale: 1.1 }} />
            <p>+91 9390824604</p>
          </div>

          <div className="info">
            <motion.img src={location} alt="Location Icon" whileHover={{ scale: 1.1 }} />
            <p>Andhra Pradesh, India</p>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          className="contact-right"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.6 }}}
          viewport={{ once: true }}
        >
          <form ref={formRef} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name" placeholder="Enter your name" required />

            <label>Your Email</label>
            <input type="email" name="user_email" placeholder="Enter your email" required />

            <label>Write Your Message Here</label>
            <textarea name="message" placeholder="Enter message" rows={3} required />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Submit
            </motion.button>

            {status && <p className="status-message">{status}</p>}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
