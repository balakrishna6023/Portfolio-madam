import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import Framer Motion
import "./About.css"; 

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once

  return (
    <motion.div 
      ref={ref}
      className="about-container"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <h1 className="heading-about">About Me</h1>

      <div className="about-content">
        {/* Left Section */}
        <motion.div 
          className="about-left"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="about-description">
            I am an enthusiastic and dedicated Full Stack Developer with a foundational understanding of Java development and full-stack technologies. I specialize in building dynamic and efficient web applications using modern frameworks and languages. Despite having less professional experience, my passion for coding drives me to continuously learn and adapt to new challenges.
          </p>
          <h3>Education</h3>
          <ul>
            <li>B.Tech - Information Technology, GMRIT Rajam</li>
            <li>Diploma - ECE, Sri Venkateswara College, Srikakulam</li>
            <li>SSC - AP Model School, Ponduru</li>
          </ul>
        </motion.div>

        {/* Right Section - Skills */}
        <motion.div 
          className="about-right"
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3>Skills</h3>
          {[
            { name: "HTML & CSS", width: "90%" },
            { name: "Java", width: "85%" },
            { name: "React", width: "80%" },
            { name: "Python", width: "75%" },
            { name: "Node.js", width: "70%" },
            { name: "SQL", width: "85%" },
          ].map((skill, index) => (
            <div className="skill" key={index}>
              <p>{skill.name}</p>
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: skill.width } : {}}
                  transition={{ duration: 1, delay: index * 0.2 }}
                ></motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
