import React, { useEffect, useState } from "react";
import { easeIn, motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant, staggerContainer, slideIn,popUp } from "../utils/motion";
import { useInView } from 'react-intersection-observer';

const Tech = () => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
    triggerOnce: true, // Trigger only once
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`w-full flex flex-col items-center bg-black-100  rounded-3xl shadow-lg overflow-hidden `}>
      <div className={`bg-tertiary ${styles.paddingt} w-full min-h-[50px] flex flex-col items-center`}>
        <motion.div variants={textVariant(0)} initial="hidden" animate={isInView ? "show" : "hidden"}>
          <p className={styles.sectionSubText}>My Skill Arsenal</p>
          <h2 className={styles.sectionHeadText}>Capability Stack's</h2>
        </motion.div>
      </div>
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className={`flex flex-wrap justify-center items-center gap-10 p-5`}
      >
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={popUp("up", "spring", index * 0.07, 0.01)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            whileHover={{ scale: 1.3, transition: { duration: 0.05 } }}// This will enlarge the icon when hovered
            className='relative w-24 h-24 flex justify-center items-center transition-transform duration-50 '
          >
            <div className='absolute inset-0 flex justify-center items-center'>
              <img src={technology.icon} alt={technology.name} className='w-16 h-16 rounded-3xl p-2 bg-gray-200 shadow-md' />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
