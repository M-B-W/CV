import React, { Suspense } from 'react';

// Lazy load StarsCanvas
const StarsCanvas = React.lazy(() => import('./StarsCanvas'));

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
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
        <Works />

        <div className='relative z-0'>
          <Contact />
          <Suspense fallback={<div>Loading stars...</div>}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
