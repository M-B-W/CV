import { motion } from "framer-motion";
import { styles } from "../styles";
import { Avatar } from "./canvas/Avatar";
import { Canvas } from "@react-three/fiber";
import * as THREE from 'three'; 
import CanvasLoader from "./Loader";
import React, { Suspense } from "react";
import { Typewriter } from 'react-simple-typewriter'; // Import Typewriter

const Hero = () => {
  const clippingPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 1);

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
              <Typewriter
                words={['Srichand Suresh']}
                loop={false}          // no loop, just type it once
                cursor
                cursorStyle='|'
                typeSpeed={80}        // typing speed
                deleteSpeed={50}       // speed when deleting (if needed)
                delaySpeed={4000}      // delay before typing starts
              />
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Exploring data, automating the ordinary, <br className='sm:block hidden' />
            creating the extraordinary.
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
