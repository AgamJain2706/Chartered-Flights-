import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
    });
  }, []);
  return (
    <>
      <div className=' lg:my-8 pt-8  lg:mx-8 lg:px-20 sm:px-6  '>
        <div className='grid grid-cols-1  md:grid-cols-2 justify-between  space-y-4 md:space-y-0 md:space-x-2'>
          <div className='left object-cover' data-aos="fade-right">
            <img src="https://charterjetone.com/wp-content/uploads/2018/02/rent-a-private-jet.jpg" alt="" className='p-4 w-[90%] h-[90%] object-cover  ' />
          </div>
          <div className='right border-box '>
            <h1 className='text-2xl md:text-4xl font-bold text-[#0b2545] top-0 content'>
              Rent a Private Jet with Charter Jet <br /> One and Enjoy Private Jet Rental at its Finest.
            </h1>
            <p className='text-sm md:text-base pe-4 text-gray-600 pt-4 md:pt-8 content'>
              When you rent a private jet, you’re securing a safe, efficient, and luxurious mode of transportation on a Charter plane. Unlike other private jet charter companies, Charter Jet One is focused on providing each and every client with the most stellar experience and customer service possible. With access to hundreds of airports worldwide, a <span className='text-yellow-400 cursor-pointer'>luxury Private Jet </span> from Charter Jet One can get you anywhere, anytime in an exclusive private jet rental. Charter Jet 1 has revolutionized private jet charter flights – getting you closer and faster to your destination than any commercial airline and in a shorter time frame. Take a private jet charter from New York to Europe or anywhere you desire in the world. Your time is more valuable than ever and wasting time in lines, security, and commuting before you reach your final destination is something of the past with our top private jet company.
            </p>
            <NavLink to="/Form">
              <button className='bg-yellow-500 w-full  rounded-sm h-12 mt-8 md:mt-20 md:w-3/4 md:text-sm font-semibold text-lg md:font-semibold text-white hover:bg-yellow-600'>
                Request a Private Jet Charter Quote
              </button>
            </NavLink>
          </div>
        </div>
      </div>

    </>
  )
}

export default Blog