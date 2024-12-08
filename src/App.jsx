import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { Analytics } from "@vercel/analytics/react";
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        
        <div className='relative z-0'>
          <Suspense fallback={<div>Loading stars...</div>}>
            <StarsCanvas />
            <About />
          </Suspense>
        </div>
        
        <Experience />

        <div className="relative z-0 flex flex-col min-h-screen">
  <div className="absolute top-0 left-0 w-full h-1/2 "></div>
  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0b134f2a]"></div>
  <div className="z-20 flex-1 flex justify-center items-center">
    <div className="p-2 sm:p-4">
      <Tech />
    </div>
  </div>
</div>






        <div className='relative z-0 bg-[#0b134f2a]'>
        <Works />
        </div>

        <Feedbacks />

        <div className='relative z-0'>
          <Suspense fallback={<div>Loading stars...</div>}>
            <StarsCanvas />
            <Contact />
          </Suspense>
        </div>
      </div>
      
      <Analytics />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
