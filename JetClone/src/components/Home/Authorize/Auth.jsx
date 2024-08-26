import React, { useEffect } from 'react';
import Img1 from '../Authorize/AuthorizeImages/direct-icon.png';
import Img2 from '../Authorize/AuthorizeImages/toll-free-icon.png';
import Img3 from '../Authorize/AuthorizeImages/chat-icon.png';
import Img4 from '../Authorize/AuthorizeImages/email-us-icon.png';
import Img5 from '../Authorize/AuthorizeImages/Mid.jpg';
import { NavLink } from 'react-router-dom';
import '../Authorize/auth.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Auth = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
    });
  }, []);

  return (
    <div className='bg-white'>
      <h1 className='mt-16 text-3xl font-semibold text-[#0b2545] text-center md:text-xl lg:text-3xl xl:text-4xl'>
        Prefer to speak with us direct? Contact us using a method below:
      </h1>

      <div className='flex flex-col md:flex-row my-4 w-full items-center justify-evenly space-y-5 md:space-y-0 md:space-x-5 p-5 md:p-20 cursor-pointer'>
        <div className='relative text-center' data-aos='fade-up'>
          <img src={Img1} alt='Call Us Direct' className='w-24 h-20 mx-auto' />
          <h1 className='font-bold text-xl text-[#0b2545] mt-4'>CALL US DIRECT</h1>
          <p className='text-lg font-semibold text-orange-400'>(212) 279-1095</p>
        </div>
        <div className='relative text-center' data-aos='fade-up'>
          <img src={Img2} alt='Call Us Toll Free' className='w-24 h-20 mx-auto' />
          <h1 className='font-bold text-xl text-[#0b2545] mt-4'>CALL US TOLL FREE</h1>
          <p className='text-lg font-semibold text-orange-400'>(844) 251-0555</p>
        </div>
        <div className='relative text-center' data-aos='fade-up'>
          <img src={Img3} alt='Text Us to Chat' className='w-24 h-20 mx-auto' />
          <h1 className='font-bold text-xl text-[#0b2545] mt-4'>TEXT US TO CHAT</h1>
          <p className='text-lg font-semibold text-orange-400'>(212) 279-1095</p>
        </div>
        <div className='relative text-center' data-aos='fade-up'>
          <img src={Img4} alt='Email Us' className='w-24 h-20 mx-auto' />
          <h1 className='font-bold text-xl text-[#0b2545] mt-4'>EMAIL US</h1>
          <p className='text-lg font-semibold text-orange-400'>Info@CharterJetOne.com</p>
        </div>
      </div>


      <div className="w-full h-screen parallax-container">
        <div
          className="parallax-bg w-full h-full absolute top-0 left-0 z-0 brightness-75"
          style={{ backgroundImage: `url(${Img5})` }}
        />
        <div className="h-full flex flex-col justify-center items-center relative z-40">
          <h1 className="text-xl text-white font-bold mb-6 text-center">READY. SET. JET.</h1>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">PRIVATE JET RENTALS & CHARTER PLANES</h2>
          <div className="flex space-x-4">
            <NavLink to="/Form">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg">
                Luxury Charter Jets
              </button>
            </NavLink>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg">
              Empty Leg Flights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
