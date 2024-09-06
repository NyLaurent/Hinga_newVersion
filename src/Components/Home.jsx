import React from 'react';
import { Carousel } from 'flowbite-react';
import Banner from '../assets/farm1.png';
import active from '../assets/active.png'


const Home = () => {
  return (
    <div className='bg-neutralSilver' id='home'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>
          <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-between gap-3 '>
            <div>
              <img src={Banner} alt='Farm banner' className='md:w-1/2 ' />
            </div>
            <div className='md:w-1/2'>
              <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                Growing Freshness <span className='text-brandPrimary leading-snug'>Cultivating Trust</span>
              </h1>
              <p>Captures our commitment to providing the freshest produce and building a reliable relationship with our customers</p>
              <button className='btnPrimary'>Register</button>
            </div>
          </div>
          <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse  items-center justify-between gap-12'>
            <div>
              <img src={Banner} alt='Farm banner' className='md:w-1/2' />
            </div>
            <div className='md:w-1/2'>
              <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                Growing Freshness <span className='text-brandPrimary leading-snug'>Cultivating Trust</span>
              </h1>
              <p>Captures our commitment to providing the freshest produce and building a reliable relationship with our customers</p>
              <button className='btnPrimary'>Register</button>
            </div>
          </div>
          <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row items-center justify-between gap-12'>
            <div>
              <img src={Banner} alt='Farm banner' className='md:w-1/2' />
            </div>
            <div className='md:w-1/2'>
              <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                Growing Freshness <span className='text-brandPrimary leading-snug'>Cultivating Trust</span>
              </h1>
              <p>Captures our commitment to providing the freshest produce and building a reliable relationship with our customers</p>
              <button className='btnPrimary'>Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
