import React, { useEffect } from 'react'
import Img1 from '../CardContainer/CardImage/jet1.jpg'
import Img2 from '../CardContainer/CardImage/jet2.jpg'
import Img3 from '../CardContainer/CardImage/jet3.jpg'
import Img4 from '../CardContainer/CardImage/jet4.jpg'
import Img5 from '../CardContainer/CardImage/jet5.jpg'
import Img6 from '../CardContainer/CardImage/jet6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Card = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);
    return (
        <div className=' lg:px-16 w-full h-fit    '>
            <div className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-8 rounded-xl  w-full max-w-sm mx-auto">
                    <img className="mb-4 shadow-md h-auto w-full object-cover " alt="img" src={Img1} data-aos="fade-in" />
                    <h1 className="mt-2 text-orange-700 text-lg font-normal">2016 Gulfstream G650</h1>
                    <p className="text-left text-gray-500 font-normal">
                        Hours: Delivery Hours ONLY
                        <ul className='pt-2 text-start' style={{ listStyleType: 'disc', color: 'black' }}>
                            <li className='text-gray-500'>This custom private airplane for sale comes with an extended warranty</li>
                            <li className='text-gray-500'><span className='text-orange-500 cursor-pointer'>Gulfstream G60 engines</span> enrolled on Rolls Royce Corporate Care.</li>
                            <li className='text-gray-500'><span className='text-orange-500 cursor-pointer'>Gulfstream PlaneView</span> II Avionics system included.</li>
                        </ul>
                    </p>
                    <div className='pt-4 text-start'>
                        <h1 className='pt-4 text-gray-500 text-lg font-normal'>For Sale Price: Call</h1>
                        <button className='w-32 h-10 mt-3 rounded-md bg-yellow-500 cursor-pointer hover:opacity-75 text-white font-semibold'>Learn More</button>
                    </div>
                </div>
                <div className="p-8 rounded-xl  w-full max-w-sm mx-auto">
                    <img className="mb-4 shadow-md h-auto w-full object-cover" alt="img" src={Img2} data-aos="fade-in" />
                    <h1 className="mt-2 text-orange-700 text-lg font-normal">2001 Boeing VIP BBJ</h1>
                    <p className="text-left text-gray-500 font-normal">
                        Hours: 4000hrs
                        <ul className='pt-2 text-left text-gray-500' style={{ listStyleType: 'disc', color: 'black' }}>
                            <li className='text-gray-500'><span className='text-orange-500 cursor-pointer'>Boeing VIP BBJ </span>is a popular <b>Boeing business jet for sale.</b></li>
                            <li className='text-gray-500'>Features a private state room with shower.</li>
                            <li className='text-gray-500'>Includes Head of State VVIP configuration.</li>
                        </ul>
                    </p>
                    <div className='pt-4 text-start'>
                        <h1 className='pt-4 text-gray-500  text-lg font-normal '>For Sale Price: Call</h1>
                        <button className='w-32 h-10 mt-3 rounded-md  bg-yellow-500 cursor-pointer hover:opacity-75 text-white font-semibold'>Learn More</button>
                    </div>
                </div>
                <div className="p-8 rounded-xl  w-full max-w-sm mx-auto">
                    <img className="mb-4 shadow-md h-auto w-full object-cover" alt="img" src={Img3} data-aos="fade-in" />
                    <h1 className="mt-2 text-orange-700 text-lg font-normal">1997 Challenger 604</h1>
                    <p className="text-left text-gray-500 font-normal">
                        Hours: 8400hrs
                        <ul className='pt-2 text-left ' style={{ listStyleType: 'disc', color: 'black' }}>
                            <li className='text-gray-500 '>When it comes to luxury jet charter transportation, the Challenger 604 is an excellent choice.</li>
                            <li className='text-gray-500 '>Extended warranty.</li>
                            <li className='text-gray-500 '>Features custom paint and private jet interior.</li>
                            <li className='text-gray-500 '>Reaches a max altitude of 41,000 feet.</li>
                        </ul>
                    </p>
                    <div className='pt-4 text-start'>
                        <h1 className='pt-4 text-gray-500  text-lg font-normal '>For Sale Price: Call</h1>
                        <button className='w-32 h-10 mt-3 rounded-md bg-yellow-500 cursor-pointer hover:opacity-75 text-white font-semibold'>Learn More</button>
                    </div>
                </div>
                <div className="p-8 rounded-xl  w-full max-w-sm mx-auto">
                    <img className="mb-4 shadow-md h-auto w-full object-cover" alt="img" src={Img4} data-aos="fade-in" />
                    <h1 className="mt-2 text-orange-700 text-lg font-normal">2008 Global 5000</h1>
                    <p className="text-left text-gray-500 font-normal">
                        Hours: 1350hrs
                        <ul className='pt-2 text-left ' style={{ listStyleType: 'disc', color: 'black' }}>
                            <li className='text-gray-500'>This 2008 <b> GLobal 5000 for sale  </b>  is an elite luxury <span className='text-orange-500 cursor-pointer'>
                                private jet  </span> .</li>
                            <li className='text-gray-500'>Luxury aircraft engines enrolled in Rolls Royce Corporate Care.</li>
                            <li className='text-gray-500'>Features the Honeywell Primus 2000XP IFCS .</li>
                        </ul>
                    </p>
                    <div className='pt-4 text-start'>
                        <h1 className='pt-4 text-gray-500  text-lg font-normal '>For Sale Price: Call</h1>
                        <button className='w-32 h-10 mt-3 rounded-md  bg-yellow-500 cursor-pointer hover:opacity-75 text-white font-semibold'>Learn More</button>
                    </div>
                </div>
                <div className="p-8 rounded-xl  w-full max-w-sm mx-auto">
                    <img className="mb-4 shadow-md h-auto w-full object-cover" alt="img" src={Img5} data-aos="fade-in" />
                    <h1 className="mt-2 text-orange-700 text-lg font-normal">2008 Global XRS </h1>
                    <p className="text-left text-gray-500 font-normal">
                        Hours: 2250hrs
                        <ul className='pt-2 text-left ' style={{ listStyleType: 'disc', color: 'black' }}>
                            <li className='text-gray-500'>Extended warranty included with this luxury jet</li>
                            <li className='text-gray-500'>Exterior custom paint and private jet interior designs</li>
                            <li className='text-gray-500'>Features a variety of luxury business amenities</li>
                        </ul>
                    </p>
                    <div className='pt-4 text-start'>
                        <h1 className='pt-4 text-gray-500  text-lg font-normal '>For Sale Price: Call</h1>
                        <button className='w-32 h-10 mt-3 rounded-md  bg-yellow-500 cursor-pointer hover:opacity-75 text-white font-semibold'>Learn More</button>
                    </div>
                </div>
                <div className="p-8 rounded-xl  w-full max-w-sm mx-auto">
                    <img className="mb-4 shadow-md h-auto w-full object-cover" alt="img" src={Img6} data-aos="fade-in" />
                    <h1 className="mt-2 text-orange-700 text-lg font-normal">2011 Global 5000 </h1>
                    <p className="text-left text-gray-500 font-normal">
                        Hours: 1200hrs
                        <ul className='pt-2 text-left ' style={{ listStyleType: 'disc', color: 'black' }}>
                            <li className='text-gray-500'>Extended warranty included with this luxury jet</li>
                            <li className='text-gray-500'>Exterior custom paint and private jet interior designs</li>
                            <li className='text-gray-500'>Features a variety of luxury business amenities</li>
                        </ul>
                    </p>
                    <div className='pt-4 text-start'>
                        <h1 className='pt-4 text-gray-500  text-lg font-normal '>For Sale Price: Call</h1>
                        <button className='w-32 h-10 mt-3 rounded-md  bg-yellow-500 cursor-pointer hover:opacity-75 text-white font-semibold'>Learn More</button>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Card