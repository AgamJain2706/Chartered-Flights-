import React from 'react'
import { Link } from 'react-router-dom'
const Top1 = () => {
  return (
    <div className='mb-8 '>
    <div className=' relative '>
        <img src="https://res.cloudinary.com/dalkzi1x8/image/upload/v1723025968/Chartedjetcategory/1723025967512-bg42.jpg.png" alt="" className='w-full lg:h-full h-[200px]  object-cover  brightness-100  ' />
        <div className='absolute  top-0 left-20  text-center mt-20   '>
            <h1 className=" relative  md:text-6xl sm:text-4xl     md:text-center   text-white font-bold lg:pt-12   md:pb-12 sm:font-semibold text-center">
            Charter Jet Card | Private Jet Charter
            </h1>
        </div>
    </div>
    <div className=''>
        <h1 className='bg-gray-200 w-full h-12  text-start pl-20 pt-2 '>
            <Link to='/' className='text-orange-500 text-lg   '>Home » <span className='text-[15px] font-light text-black '> Jet Card</span> </Link>
        </h1>
    </div>
</div>
  )
}

export default Top1