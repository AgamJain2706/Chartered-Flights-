import React from 'react'
import { NavLink } from 'react-router-dom'
import '../LastPart/card.css'
const card = () => {
    return (
        <div className='image' >
            <div>
                <h1 className='text-5xl text-[#0b2545] font-semibold text-center pt-8'>Charter Jet One News & Blog</h1>
                <div className="container p-4 mx-auto">
                <div className="cards lg:m-8 lg:p-8 md:flex lg:flex-nowrap  gap-4 overflow-x-auto">
    <div className="w-full h-auto md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-custom">
            <div className="card__img w-full h-60 overflow-hidden rounded-t-lg">
                <img src="https://charterjetone.com/wp-content/uploads/2024/07/How-to-Charter-a-Private-Jet-1-400x250.webp" alt="" className='object-cover cursor-pointer w-full h-full hover:brightness-75' />
            </div>
            <div className="p-6">
                <h2 className="font-bold mb-2 text-2xl text-[#0b2545]">How to Charter a Private Jet: A Comprehensive Guide,Exclusive Perks</h2>
                <button className='text-white font-bold bg-yellow-500 cursor-pointer w-28 h-12 mt-4 hover:bg-yellow-600'>
                    Read More
                </button>
            </div>
        </div>
    </div>

    <div className="w-full h-auto md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-custom">
            <div className="card__img w-full h-60 overflow-hidden rounded-t-lg">
                <img src="https://charterjetone.com/wp-content/uploads/2024/05/vacation-drive-up-400x250.webp" alt="" className='object-cover cursor-pointer w-full h-full hover:brightness-75' />
            </div>
            <div className="p-6">
                <h2 className="font-bold mb-2 text-2xl text-[#0b2545]">Private Jet Membership: Access Luxury Flights & Exclusive Perks</h2>
                <button className='text-white font-bold bg-yellow-500 cursor-pointer w-28 h-12 mt-4 hover:bg-yellow-600'>
                    Read More
                </button>
            </div>
        </div>
    </div>

    <div className="w-full h-auto md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-custom">
            <div className="card__img w-full h-60 overflow-hidden rounded-t-lg">
                <img src="https://charterjetone.com/wp-content/uploads/2024/05/cj1-image-400x250.webp" alt="" className='object-cover cursor-pointer w-full h-full hover:brightness-75' />
            </div>
            <div className="p-6">
                <h2 className="font-bold mb-2 text-2xl text-[#0b2545]">VIP Jet Charter: Elite Privacy & Security for Flights Across the Globe</h2>
                <button className='text-white font-bold bg-yellow-500 cursor-pointer w-28 h-12 mt-4 hover:bg-yellow-600'>
                    Read More
                </button>
            </div>
        </div>
    </div>
</div>


                </div>
            </div>

            <div className='bg-[#0b1c31] w-full h-auto lg:flex flex-row  items-center justify-center py-12'>
                <div className='text-center mb-4'>
                    <h1 className='text-3xl text-white font-semibold'>Charter a Jet Anywhere in the World with Charter Jet One</h1>
                </div>
                <NavLink to="/Form" >
                    <button className='bg-yellow-500 text-white font-semibold  sm:mx-12 w-40 h-12 rounded-md ml-20 md:mr-2  '>
                        Request A Quote
                    </button>
                </NavLink>
            </div>
        </div>

    )
}

export default card