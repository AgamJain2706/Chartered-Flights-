import React from 'react'
import Img from '../TopPart/1.jpg'
import { Link } from 'react-router-dom'
const Top = () => {
  return (
    <div>
         <div className='mb-8 '>
            <div className='m-0 relative '>
                <img src={Img} alt="" className='w-full h-[300px]  brightness-100  ' />
                <div className='absolute  top-0 left-20  text-center mt-20   '>
                    <h1 className=" block  lg:text-6xl md:text-4xl sm:text-2xl   md:mt-12  md:text-center   text-white font-bold mt-8   sm:font-semibold text-center">
                    Luxury Private Jets for Sale
                    </h1>
                </div>
            </div>
            <div className=''>
                <h1 className='bg-gray-200 w-full h-12  text-start pl-20 pt-4'>
                    <Link to='/' className='text-orange-400 text-lg '>Home » <span className='text-sm font-light text-black '>Private Jets for Sale</span> </Link>
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Top