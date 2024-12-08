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
          Hi, I'm <span className="text-white-100">Srichand Suresh</span>, a developer with a <span className="text-white-100">curious mind </span> and <span className="text-white-100">a philosophical soul. </span>
          I'm fascinated by how things work. Whether it's code, the way people interact with technology, 
          or the deeper questions about <span className="text-white-100">life and its meaning</span>. I tend to overthink life's simplest questions 
          and often find myself debating abstract ideas with <span className="text-white-100">no right answers</span>.
          When I'm not lost in thought, you'll probably find me tinkering with side projects,
          exploring new tools, or adding <span className="text-white-100">"just one more feature"</span> to something that was perfectly fine (until it wasn't).
          Whether it's technology or philosophy, I'm always looking to explore what makes the world tick and find ways to make it a little better.
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
