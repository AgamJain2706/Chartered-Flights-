import React from 'react'
import { Link } from 'react-router-dom'
const TopPart = () => {
  return (
    <div>
      <div className='relative'>
        <img src="https://charterjetone.com/wp-content/uploads/2016/02/48-2.jpg" alt="" className='w-full h-[80%] object-cover brightness-100' />
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4'>
          <h1 className="text-white font-bold text-center sm:text-3xl md:text-5xl lg:text-6xl sm:font-semibold">
            Our Charter Jet Fleet | Charter Jet Catalog
          </h1>
        </div>
      </div>

      <div className=''>
        <h1 className='bg-gray-200 w-full h-12  text-start pl-20 pt-4'>
          <Link to='/' className='text-orange-400 text-lg   '>Home » <span className='text-sm font-light text-black '>Fleet</span> </Link>
        </h1>
      </div>
    </div>
  )
}

export default TopPart