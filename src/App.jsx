import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<div>Loading stars...</div>}>
          <StarsCanvas />
          <div className='relative z-0'>
            <About />
          </div>
          <Experience />
          <div className='relative z-0'>
            <Works />
          </div>
          <div className='relative z-0'>
            <Contact />
          </div>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
