import React from 'react'
import { Link } from 'react-router-dom'
const Start = () => {
  return (
    <div>
      <div className='mb-8 '>
        <div className='m-0 relative '>
          <img src="https://res.cloudinary.com/dalkzi1x8/image/upload/v1723626384/Chartedjetcategory/1723626383770-aboutUs.jpg.png" alt="" className='w-full h-[300px]  brightness-100  ' />
          <div className='absolute  top-0 left-20  text-center mt-20   '>
            <h1 className=" relative   md:text-6xl sm:text-2xl   lg::mt-12  md:text-center   text-white font-bold lg:mt-8   sm:font-semibold text-center">
              Empty Leg Flights: Find One-Way Private Jet Empty Leg Charter Flights
            </h1>
          </div>
        </div>
        <div className=''>
          <h1 className='bg-gray-300 w-full h-12  text-start pl-20 pt-4'>
            <Link to='/' className='text-orange-400 text-lg   '>Home » <span className='text-sm font-light text-black '> Empty Leg Flights</span> </Link>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Start