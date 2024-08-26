import React from 'react'
import { Link } from 'react-router-dom'
const SameTop = () => {
  return (
    <div>
         <div className='relative '>
                <img src="https://charterjetone.com/wp-content/uploads/2016/02/50-1.jpg" alt="" className='w-full lg:h-[400px] h-auto object-cover  brightness-100  ' />
                <div className='absolute  top-0 left-20  text-center mt-20   '>
                    <h1 className=" relative  md:text-6xl sm:text-4xl   lg:mt-4  md:text-center   text-white font-bold lg:pt-20    sm:font-semibold text-center">
                    About Charter Jet One
                    </h1>
                </div>
            </div>
            <div className=''>
                <h1 className='bg-gray-200 w-full h-12  text-start pl-20 pt-4'>
                    <Link to='/' className='text-orange-400 text-lg   '>Home » <span className='text-sm font-light text-black '>
                      About us   </span> </Link>
                </h1>
            </div>
    </div>
  )
}

export default SameTop