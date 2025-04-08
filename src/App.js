import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll"; // For smooth scrolling
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Element name="home"><Home /></Element>
        <Element name="about"><About /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="contact"><Contact /></Element>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
