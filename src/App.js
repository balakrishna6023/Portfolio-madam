import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll"; // For smooth scrolling
import SplashScreen from "./SplashScreen";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowSplash(false), 3000); // Show splash for 3 seconds
  }, []);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div>
          <Navbar />
          <Element name="home"><Home /></Element>
          <Element name="about"><About /></Element>
          <Element name="projects"><Projects /></Element>
          <Element name="contact"><Contact /></Element>
          <Footer/>
        </div>
        
      )}    
    </Router>
  );
}

export default App;
