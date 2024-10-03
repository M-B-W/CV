import { BrowserRouter } from 'react-router-dom';
import React, { Suspense } from 'react';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { Analytics } from "@vercel/analytics/react"
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
            </ Suspense >
          </div>
          <Experience />
          <Tech />
          <div className='relative z-0'>
          <Suspense fallback={<div>Loading stars...</div>}>
          <StarsCanvas />
            <Works />
            </ Suspense >
          </div>
          <Feedbacks />
          <div className='relative z-0'>
          <Suspense fallback={<div>Loading stars...</div>}>
          <StarsCanvas />
            <Contact />
            </ Suspense >
          </div>
      </div>
      <Analytics/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
