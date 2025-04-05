import { motion } from "framer-motion";
import "./splashscreen.css";
import splashImage from "./assets/splash-image.png"; // Ensure this image exists in your assets folder

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      {/* Background Overlay */}
      <div className="overlay"></div>

      {/* Animated Logo */}
      <motion.img
        src={splashImage}
        alt="Splash Screen"
        className="splash-image"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Animated Text */}
      <motion.h1
        className="welcome-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        Welcome to My Portfolio
      </motion.h1>

      {/* Smooth Loader Bar */}
      <motion.div
        className="loader"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
};

export default SplashScreen;
