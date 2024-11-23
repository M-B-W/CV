import { motion } from "framer-motion";
import { styles } from "../styles";
import { Avatar } from "./canvas/Avatar";
import { Canvas } from "@react-three/fiber";
import * as THREE from 'three'; 
import CanvasLoader from "./Loader";
import React, { Suspense, useEffect, useState } from "react";

const Hero = () => {
  const clippingPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 1);
  
  // Calculate age based on birthdate
  const birthDate = new Date('2004-03-01'); // Replace with your birthdate in 'YYYY-MM-DD' format
  const [age, setAge] = useState(0);

  const calculateAge = () => {
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Convert milliseconds to years
    setAge(ageInYears.toFixed(10)); // Set the age to the 10th decimal place
  };

  useEffect(() => {
    // Update the age every second to keep it real-time
    const interval = setInterval(calculateAge, 1);
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#a82326]' />
          <div className='w-1 sm:h-80 h-40 white-gradient' />
        </div>
        <div>
        <h1 className={`${styles.heroHeadText} text-white `}>
          Hi, I'm <span className={`${styles.heroHeadText}`} style={{ color: '#a82323' }}>
            Srichand Suresh
          </span>
        </h1>
          <p className={`${styles.heroSubText} mt-2 text-red-800 font-semibold`}>
            <span className={`${styles.heroSubText} text-white-100 font-semibold `}>Age:</span> {age} 
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A developer diving into Data Science and ML,<br className='sm:block hidden' />
            hoping the machines don’t get too smart!!
          </p>
        </div>
      </div>

      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={3.5} />
          <Avatar clippingPlanes={[clippingPlane]} />
        </Suspense>
      </Canvas>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
