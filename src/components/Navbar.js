import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Install lucide-react for icons
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Desktop Navigation */}
      <div className="nav-links">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="home" smooth={true} duration={500} className="nav-link">
            Home
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="about" smooth={true} duration={500} className="nav-link">
            About
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="projects" smooth={true} duration={500} className="nav-link">
            Projects
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <X size={30} color="white" />
        ) : (
          <Menu size={30} color="white" />
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
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
