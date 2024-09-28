// Hero.jsx
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Avatar } from "./canvas/Avatar";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Plane } from "@react-three/drei";
import * as THREE from "three"

const Hero = () => {
  const clippingPlaneRef = useRef();

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#a82326]' />
          <div className='w-1 sm:h-80 h-40 white-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className={`${styles.heroHeadText} `} style={{ color: '#a82323' }}>Srichand Suresh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Exploring data, automating the ordinary, <br className='sm:block hidden' />
            creating the extraordinary.
          </p>
        </div>
      </div>
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={2} />
        <Avatar />
        {/* Clipping plane to crop the lower body */}
        <Plane
          ref={clippingPlaneRef}
          position={[0, 1.5, 0]} // Adjust this position based on your avatar's height
          rotation={[-Math.PI / 2, 0, 0]}
          args={[100, 100]}
          onUpdate={(self) => {
            // If you want to change material properties or set the clipping plane
            self.material.clippingPlanes = [new THREE.Plane(new THREE.Vector3(0, -1, 0), 1)];
          }}
        >
          <meshBasicMaterial color="white" transparent opacity={0} />
        </Plane>
      </Canvas>
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
