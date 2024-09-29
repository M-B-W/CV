import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from 'react';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works,StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>

      <div className='relative z-0 bg-primary '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div className='relative z-0'>
          <About />
          {/* Wrap with Suspense and add a fallback for loading */}
          <Suspense fallback={<div>Loading stars...</div>}>
            <StarsCanvas />
          </Suspense>
        </div>
        <Experience />
        <div className='relative z-0'>
          <Works />
          {/* Wrap with Suspense and add a fallback for loading */}
          <Suspense fallback={<div>Loading stars...</div>}>
            <StarsCanvas />
          </Suspense>
        </div>
          <div className='relative z-0'>
          <Contact />
          {/* Wrap with Suspense and add a fallback for loading */}
          <Suspense fallback={<div>Loading stars...</div>}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;