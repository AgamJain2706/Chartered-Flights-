import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="lg:flex justify-center items-center m-0 p-8 list-none sticky top-0 z-50 hidden md:flex  shadow-lg   w-full h-8 space-x-4 bg-white ">
            <span className='bg-gray-300  h-[50px] w-[1px]'></span>
            <ul className='flex space-x-4 pt-8  '>
                <li className="relative group h-[50px] border-1 mt-2">
                    <NavLink to="Charter" className={({ isActive }) => `text-black ${isActive ? "text-gray-600" : "text-gray-700"} flex items-center hover:opacity-70`}>
                        Charter Flights
                        <svg width="20px" height="20px" viewBox="-0.96 -0.96 25.92 25.92" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"></path> </g></svg>
                    </NavLink>
                    <ul className="absolute right-0 mt-2 w-60 top-8 bg-white shadow-lg rounded-lg hidden group-hover:block hover:text-black">
                        <section className='bg-[#faa01b] w-full h-1 border-0'></section>
                        <li><a href="#shop1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">LUXURY PRIVATE JET RENTAL </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">PRIVATE HELICOPTER RENTAL </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">CHARTER FLIGHT SERVICE </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">TRAVEL AGENTS </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">MEDICAL AIR TRANSPORT</a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">AIR CARGO TRANSPORT</a></li>
                    </ul>
                </li>
                <span className='bg-gray-300  h-[50px] w-[1px]'></span>
                <li className='relative h-16 border-1 cursor-pointer hover:opacity-70 mt-2'>
                    <NavLink to="/Empty-legs-flights" className={({ isActive }) => `${isActive ? "text-gray-600" : "text-gray-700"}`}>Empty Leg Flights</NavLink>
                </li>
                <span className='bg-gray-300  h-[50px] w-[1px]'></span>
                <li className='relative h-16 border-1 cursor-pointer hover:opacity-70 mt-2'>
                    <NavLink to="/private-jets-for-sale" className={({ isActive }) => `${isActive ? "text-gray-600" : "text-gray-700"}`}>Private Jet For Sale</NavLink>
                </li>
                <span className='bg-gray-300  h-[50px] w-[1px]'></span>
                <li className="relative group h-16 border-1 cursor-pointer mt-2">
                    <NavLink to="/our-fleet" className={({ isActive }) => `text-black ${isActive ? "text-gray-600" : "text-gray-700"} flex items-center `}>
                        OUR FLEET
                        <svg width="20px" height="20px" viewBox="-0.96 -0.96 25.92 25.92" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"></path> </g></svg>
                    </NavLink>
                    <ul className="absolute top-8 left-0 mt-2 w-60  bg-white  shadow-lg rounded-lg hidden group-hover:block hover:text-black">
                        <section className='bg-[#faa01b] w-full h-1 border-0'></section>
                        <li><a href="#shop1" className="block px-4 py-2 text-black hover:bg-gray-200">TURBO PROPS </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-black hover:bg-gray-200">VERY LIGHT JETS </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-black hover:bg-gray-200">LIGHT JETS  </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-black hover:bg-gray-200">MID SIZE JETS  </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-black hover:bg-gray-200">SUPER MIDSIZE JETS </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-black hover:bg-gray-200">HEAVY JETS </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-black hover:bg-gray-200">BOEING BUSINESS JETS (BBJs) </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-black hover:bg-gray-200">JUMBO JETS  </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-black hover:bg-gray-200">HELICOPTER </a></li>
                    </ul>
                </li>
                <span className='bg-gray-300  h-[50px] w-[1px]'></span>
                <li className='relative h-16 border-1 cursor-pointer hover:opacity-70 mt-2'>
                    <NavLink to="/jet-card" className={({ isActive }) => `${isActive ? "text-gray-600" : "text-gray-700"}`}>Jet Card</NavLink>
                </li>
                <span className='bg-gray-300  h-[50px] w-[1px]'></span>
                <li className="relative group h-16 pt-2 border-1">
                    <NavLink to="/about-us" className={({ isActive }) => `${isActive ? "text-gray-600" : "text-gray-700"} flex items-center text-black hover:opacity-70`}>
                        About Us
                        <svg width="20px" height="20px" viewBox="-0.96 -0.96 25.92 25.92" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"></path> </g></svg>
                    </NavLink>
                    <ul className="absolute right-0 mt-2 w-60 top-10 bg-white shadow-lg rounded-lg hidden group-hover:block">
                        <section className='bg-[#faa01b] w-full h-1 border-0'></section>
                        <li><a href="#shop1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Our offices  </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Flight Charter Company  </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Private Jet Safety </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Careers  </a></li>
                        <li><a href="#shop2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Private Jet Travel Blog </a></li>
                    </ul>
                </li>
            </ul>
            <Link to="/Form" className='bg-orange-400 text-white hover:opacity-75 md:text-center  hover:bg-orange-600 w-40 h-16 flex items-center justify-center'>
                Book A Charter Jet
            </Link>
        </nav>
    );
};

export default Nav;
