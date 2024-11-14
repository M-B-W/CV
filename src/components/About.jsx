import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion, transform } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  // Function to download the resume
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Srichand_Suresh_Resume.pdf';
    link.click();
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='mt-4 flex flex-col lg:flex-row items-start lg:items-center gap-4'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I am a data science enthusiast pursuing a B.Tech at Government Engineering College Thrissur.
          With a focus on machine learning, web development, and app development,
          I transform complex datasets into actionable insights. 
          I enjoy creating user-friendly applications and websites that incorporate predictive models,
          bridging the gap between data science and practical solutions. Committed to continuous learning,
          I thrive on solving real-world challenges through data-driven approaches.
        </motion.p>

        <motion.button 
          variants={fadeIn("", "", 0.1, 1)}
          whileHover={{ scale: 1.05, transition: { duration: 0 } }}
          onClick={downloadResume} 
          className='bg-tertiary hover:text-secondary text-white font-bold py-4 px-6 rounded-sm mt-4 lg:mt-0 lg:ml-32 transition duration-300 text-md whitespace-nowrap'
        >
          Get Resume
        </motion.button>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
