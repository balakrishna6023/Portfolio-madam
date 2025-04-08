import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion"; 
import { scroller } from "react-scroll"; 
import profile from "../assets/image-profile.jpg";
import resume from "../assets/resume.pdf";
import "./Home.css";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px 0px" });

  // State to track screen width
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Disable motion on mobile
  const motionProps = isMobile ? {} : { initial: { opacity: 0, y: 50 }, animate: isInView ? { opacity: 1, y: 0 } : {}, transition: { duration: 1 } };

  return (
    <motion.div ref={ref} className="home" {...motionProps}>
      <div className="content">
        {/* Left Section */}
        <motion.div 
          className="left-section"
          {...(isMobile ? {} : { initial: { x: -100, opacity: 0 }, animate: isInView ? { x: 0, opacity: 1 } : {}, transition: { duration: 1, ease: "easeOut" } })}
        >
          <h1>
            I'M <span className="highlight">Krishnaveni</span>, Fullstack Developer, Java Coder.
          </h1>
          <p>
            I am a student at GMRIT, currently pursuing B.Tech 4th year. Ready to take a job to represent myself in the profession.
          </p>
          <div className="button-section">
            <button onClick={() => window.open(resume, "_blank")}>My Resume</button>
            <button onClick={() => scroller.scrollTo("contact", { duration: 800, smooth: "easeInOutQuart", offset: -70 })}>Connect with Me</button>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="right-section"
          {...(isMobile ? {} : { initial: { x: 100, opacity: 0 }, animate: isInView ? { x: 0, opacity: 1 } : {}, transition: { duration: 1, ease: "easeOut" } })}
        >
          <img src={profile} alt="Profile" className="profile-img"/>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
