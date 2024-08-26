import React from 'react'
import { Link, } from 'react-router-dom'


const StartImg = () => {
    return (
        <div className='mb-8 '>
            <div className='relative '>
                <img src="https://res.cloudinary.com/dalkzi1x8/image/upload/v1723629757/Chartedjetcategory/1723629757583-1722864083266-1.jpg.png.png" alt="" className='w-full md:h-[400px] sm:h-auto object-cover  brightness-100  ' />
                <div className='absolute  top-0 left-20  text-center mt-20   '>
                    <h1 className=" relative  md:text-6xl sm:text-4xl   lg::mt-4  md:text-center   text-white font-bold lg:pt-20   sm:font-semibold lg:text-center text-start">
                        Private Planes: Charter Aircraft Flights
                    </h1>
                </div>
            </div>
            <div className=''>
                <h1 className='bg-gray-200 w-full h-12  text-start pl-20 pt-4'>
                    <Link to='/' className='text--400 text-lg   '>Home » <span className='text-sm font-light text-black '>Charter Private Jet Rental</span> </Link>
                </h1>
            </div>
        </div>
    )
}

export default StartImg