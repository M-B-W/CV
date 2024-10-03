import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

const Footer = () => {
  return (
    <footer className={`w-full flex flex-col items-center bg-black-100 rounded-3xl shadow-lg overflow-hidden`}>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center p-5"
      >
        <p className={` ${styles.sectionSubText} pb-8`}>Connect with me thru</p>
        <div className="flex flex-col items-center gap-3">
          <a href="mailto:srichandsureshrocks@gmail.com" className="text-white hover:text-red-700">Email</a>
          <a href="https://github.com/Apollo-Blaze" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-700">GitHub</a>
          <a href="https://www.linkedin.com/in/srichand-suresh-67b7b3279/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-700">LinkedIn</a>
          <a href="https://www.instagram.com/sri__xnd.__/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-700">Instagram</a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
