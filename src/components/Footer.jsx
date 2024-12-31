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
        <p className={` ${styles.sectionSubText} pb-8 font-black`}>Connect with me </p>
        <div className="flex flex-col items-center gap-3">
          <span className='text-blue-500'> Email: <a href="mailto:bharathwajprofessional04@gmail.com" className="text-white hover:text-red-500">bharathwajprofessional04@gmail.com</a></span>
          <span className='text-blue-500'> Github: <a href="https://github.com/M-B-W" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">M-B-W</a></span>
          <span className='text-blue-500'> LinkedIn: <a href="https://www.linkedin.com/in/bharathwaj-darkangel0011/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">Bharathwaj M</a></span>
          <span className='text-blue-500'> Instagram: <a href="https://www.instagram.com/_bharath_waj_04/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">_bharath_waj_04</a></span>
          <span className='text-blue-500'> 
            Phone: <a href="tel:+916385790363" className="text-white hover:text-red-500">+91-6385790363</a>
          </span>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
