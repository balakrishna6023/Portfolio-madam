import React from "react";
import { motion, useInView } from "framer-motion"; // Import animation and in-view detection
import { useRef } from "react";
import { scroller } from "react-scroll"; 
import profile from "../assets/image-profile.jpg";
import resume from '../assets/resume.pdf';
import "./Home.css"; 

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  const openResume = () => {
    window.open(resume, "_blank"); // Open Resume in a new tab
  };

  const navigateToContact = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <motion.div 
      ref={ref}
      className="home"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Apply animation when visible
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="right-section"
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src={profile} alt="Profile" className="profile-img"/>
      </motion.div>

      <motion.div 
        className="left-section"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1>
          I'M <span className="highlight">Krishnaveni</span>, Fullstack Developer, Java Coder.
        </h1>
        <p>
          I am a student at GMRIT, currently pursuing B.Tech 4th year. Ready to take a job to represent myself in the profession.
        </p>
      </motion.div>

      <div className="button-section">
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          onClick={openResume} 
        >
          My Resume
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          onClick={navigateToContact} 
        >
          Connect with Me
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Home;
