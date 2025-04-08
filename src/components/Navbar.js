import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import profile from "../assets/image-profile.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        {/* Logo Section */}
        <div className="logo-section">
          <img src={profile} alt="Profile" />
          <h1>KRISHNAVENI</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {["home", "about", "projects", "contact"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                className="nav-link"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={30} color="#00FF00" />
          ) : (
            <Menu size={30} color="#00FF00" />
          )}
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Close Button Inside Menu */}
              <div className="close-menu" onClick={() => setIsOpen(false)}>
                <X size={35} color="white" />
              </div>

              {/* Mobile Menu Links */}
              {["home", "about", "projects", "contact"].map((item, index) => (
                <Link
                  key={index}
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={80}
                  className="mobile-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
