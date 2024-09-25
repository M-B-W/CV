import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const name = "Srichand Suresh";
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 50; // Typing speed in milliseconds
  const deletingSpeed = 100; // Deleting speed in milliseconds
  const pauseBetweenLoops = 800; // Pause after typing

  useEffect(() => {
    let typingTimeout;
    let deletingTimeout;

    const typeText = () => {
      for (let i = 0; i <= name.length; i++) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(name.substring(0, i));
        }, typingSpeed * i);
      }

      typingTimeout = setTimeout(() => {
        deleteText();
      }, typingSpeed * name.length + pauseBetweenLoops);
    };

    const deleteText = () => {
      for (let i = name.length; i >= 0; i--) {
        deletingTimeout = setTimeout(() => {
          setDisplayedText(name.substring(0, i));
        }, deletingSpeed * (name.length - i));
      }

      deletingTimeout = setTimeout(() => {
        typeText();
      }, deletingSpeed * (name.length + 1) + pauseBetweenLoops);
    };

    typeText();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deletingTimeout);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ffffff]' />
          <div className='w-1 sm:h-80 h-40 white-gradient' />
        </div>

        <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
  <span className="text-4xl">Hi, I'm</span>{" "} {/* Adjust font size here */}
  <span className={`${styles.heroHeadText}`} style={{ color: '#a82323' }}>
    {displayedText}
  </span>
</h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Exploring data science and <br className='sm:block hidden' />
            automating lives
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
