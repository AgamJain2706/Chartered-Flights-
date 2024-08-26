import React from 'react'
import { NavLink } from 'react-router-dom'
const Last = () => {
    return (
        <div className='mt-4 md:px-20 bg-white '>
            <h1 className='lg:text-2xl text-start pl-10 md:text-lg ' >Experience Luxury Travel on Our Charter Planes Today</h1>
            <p className='text-gray-400 text-base  font-normal p-2  lg:pl-12 lg:p-8 '>
                Are you ready to secure the most luxurious travel around? Our charter planes will provide you and your passengers with utmost privacy, safety, luxury, style, and comfort possible. Our services go unrivaled. At Charter Jet One, we cater to a large range of clientele, giving you a luxurious private jet experience with our large fleet of charter planes time after time. Our exclusive jet selection includes the best business jets in the world and a variety of aircraft sizes, such as turboprops, midsize and jumbo jets. <span className='text-orange-400 cursor-pointer'>Charter a private jet today!</span>
            </p>
            <NavLink to="/Form" >
                <button className='lg:w-[80%] items-center mx-12 md:w-[80%] sm:w-[25%]  rounded-sm h-16 text-white font-bold bg-yellow-500 hover:opacity-70'>
                    Request a Private Jet Charter Quote
                </button>
            </NavLink>

            <h1 className='lg:text-2xl md:text-xl sm:text-lg font-semibold text-gray-600 px-12 italic  pt-1 text-start my-16 ' >Or call us toll free at <span className='text-orange-500'>(844) 251-0555
            </span> or direct at <span className='text-orange-500'>
                    (212) 279-1095  </span>.</h1>

<div className='sm:bg-gray-600 sm:w-full sm:hidden visible '>
                <button className='bg-yellow-500 hover:opacity-70 w-4/5 m-4 h-20 justify-center block text-black font-semibold sm:hidden '>
                    <div className='flex-col justify-around w-8 h-4'>
                        <svg width="64px" height="64px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="16" height="16" id="icon-bound" fill="none"></rect> <path d="M11.5,0h-7C3.675,0,3,0.675,3,1.5v13C3,15.325,3.675,16,4.5,16h7c0.825,0,1.5-0.675,1.5-1.5v-13C13,0.675,12.325,0,11.5,0z M8,15c-0.553,0-1-0.447-1-1s0.447-1,1-1s1,0.447,1,1S8.553,15,8,15z M12,12H4V2h8V12z"></path> </g>
                        </svg>
                    </div>
                    Tap To Call & Book <br/>
                    844-251-0555
                </button>
</div>

        </div>
    )
}

export default Last