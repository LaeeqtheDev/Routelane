import React from 'react';

const Hero = () => {

  
  return (
    <div className="container mx-auto px-5 sm:px-10 lg:px-20 xl:px-32 flex flex-wrap p-5 items-center justify-between mt-14 ">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-6 mb-4 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Streamlining <span className='text-8xl text-[#4762FF]'>Trucking</span>{""}Logistics</h1>
          <p className="text-lg">Delivering Success, One Mile at a Time</p>
          <button className='text-white bg-black px-6 py-2 mt-10'>Explore more</button>
        </div>
        <div className="md:w-1/2">
          <a href="#">
            <img src="/hero.png" alt="hero" className="w-full h-auto md:w-auto md:h-auto" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
