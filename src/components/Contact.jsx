import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import mail from "../assets/mail_icon.svg";
import location from "../assets/location_icon.svg";
import mobile from "../assets/call_icon.svg";
import "./contact.css";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("your_service_id", "your_template_id", formRef.current, "your_user_id")
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

  const MotionDiv = isMobile ? "div" : motion.div;
  const MotionImg = isMobile ? "img" : motion.img;
  const MotionButton = isMobile ? "button" : motion.button;

  return (
    <MotionDiv
      className="contact"
      {...(!isMobile && { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" }}})}
    >
      {/* Heading */}
      <MotionDiv
        className="contact-heading"
        {...(!isMobile && { initial: { y: -30, opacity: 0 }, whileInView: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.6 }}, viewport: { once: true } })}
      >
        Get In Touch
      </MotionDiv>

      <div className="contact-content">
        {/* Left Side */}
        <MotionDiv
          className="contact-left"
          {...(!isMobile && { initial: { x: -100, opacity: 0 }, whileInView: { x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.6 }}, viewport: { once: true } })}
        >
          <h1>Let's Talk</h1>
          <p>I'm currently available for new projects. Feel free to message me.</p>

          <div className="info">
            <MotionImg src={mail} alt="Email Icon" {...(!isMobile && { whileHover: { scale: 1.1 } })} />
            <p>pedadakrishnaveni143@gmail.com</p>
          </div>

          <div className="info">
            <MotionImg src={mobile} alt="Phone Icon" {...(!isMobile && { whileHover: { scale: 1.1 } })} />
            <p>+91 9390824604</p>
          </div>

          <div className="info">
            <MotionImg src={location} alt="Location Icon" {...(!isMobile && { whileHover: { scale: 1.1 } })} />
            <p>Andhra Pradesh, India</p>
          </div>
        </MotionDiv>

        {/* Right Side - Form */}
        <MotionDiv
          className="contact-right"
          {...(!isMobile && { initial: { x: 100, opacity: 0 }, whileInView: { x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.6 }}, viewport: { once: true } })}
        >
          <form ref={formRef} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name" placeholder="Enter your name" required />

            <label>Your Email</label>
            <input type="email" name="user_email" placeholder="Enter your email" required />

            <label>Write Your Message Here</label>
            <textarea name="message" placeholder="Enter message" rows={3} required />

            <MotionButton
              type="submit"
              {...(!isMobile && { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, transition: { duration: 0.2 } })}
            >
              Submit
            </MotionButton>

            {status && <p className="status-message">{status}</p>}
          </form>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default Contact;
