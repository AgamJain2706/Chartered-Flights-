import React from 'react'
import {  NavLink } from 'react-router-dom'


const Middle = () => {
  return (
    <div className='lg:px-12 px-4 w-full h-full  '>
      <div className='grid grid-cols-1 lg:grid-cols-2 justify-between lg:m-4 md:m-8  md:p-8 space-y-4 md:space-y-0 md:space-x-2'>
        <div className='left sm:w-auto h-auto '>
          <img src="https://charterjetone.com/wp-content/uploads/2016/02/38-1.jpg" alt="CharterFLights" className='lg:pr-4 lg:w-[87%] lg:px-8 lg:h-[75%] w-full h-fit ' />
        </div>
        <div className='right'>
          <h1 className='text-xl md:text-4xl pt-4  font-normal text-black top-0 content'>
            Get There Faster with a Charter <br /> Aircraft from Charter Jet One
          </h1>
          <p className='text-base font-normal  text-gray-600  pt-4 md:pt-8 md:w-full  pe-4 object-cover'>
            Rent private planes from the industry-leader of charter aircraft services, Charter Jet One. Our charter company provides a variety of aircraft services, such as <span className='text-orange-400  cursor-pointer '>luxury private jet rental </span > and <span className='text-orange-400n ' >helicopter rental</span> . We ensure our clients are satisfied with their travel with world-class <span className='text-orange-400 cursor-pointer '> Private jet Charter  </span> Services . Fly on a charter aircraft to experience the <span className='text-orange-400  cursor-pointer ' >benefits of luxury jets</span> , such as avoiding the hassle of commercial airlines and long lines at airports. Choose from our large <span className='text-orange-400'> fleet of private planes  </span> to find the perfect jet for your individual needs and travel plans.
            </p>
          <h1 className='text-xl md:text-2xl pt-4 md:pt-4 content text-orange-500'>LUXURY PRIVATE PLANES FOR BUSINESS OR PERSONAL TRAVEL</h1>
          <p className='text-base font-normal pe-4 text-gray-600 pt-4 md:pt-4 pr-4 pb-4  content md:mb-2  '>
            Whether you need business jets, <span className='text-orange-400 cursor-pointer  '> a jumbo jet charter, light jet rental</span> or any other class of private, Charter Jet One has you covered. We match the best private planes to your trip and personal preferences. For our more frequent flyers, we also offer a private jet fractional ownership program. Charter Jet One offers the best service, prices and commitment for business and personal private jet travel. Click or call <span className='text-orange-400 cursor-pointer '> to charter a private jet today </span> . Ready. Set. Jet.
          </p>
          <NavLink to="/Form">
            <button className='bg-yellow-500 w-full  rounded-sm h-12 md:top-3 md:mt-8 md:w-3/4 mb-4 font-normal text-lg md:font-normal text-white hover:opacity-75'>
              Request a Private Jet Charter Quote
            </button>
          </NavLink>
          <h1 className='text-xl italic text-gray-600 pt-2  '>Or call us toll free at <span className='text-orange-500'> (844) 251-0555 </span>  or direct at <br /> <span className='text-orange-500'> (212) 279-1095 </span> .</h1>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 justify-between top-0   lg:px-12
       md:px-4 space-y-4 md:space-y-0 md:space-x-2 m-8 '>

        <div className='left lg:pt-3  '>
          <h1 className='text-xl md:text-4xl font-normal text-black top-0 content'>
            Enjoy the Luxury, Privacy and <br /> Convenience of a Charter Aircraft
          </h1>
          <p className='text-base   font-normal  pe-8 text-gray-600  pt-4 md:pt-4 lg:pr-4  content'>
            When it comes to traveling in style and sophistication, a <span className='text-orange-400 cursor-pointer '> luxury charter jet charter </span>  from Charter Jet One is the ultimate way to travel. We serve every type of traveler, from high-profile clientele to everyday tourists looking to experience luxury charter aircraft. Private planes are no longer just for the rich and famous and has many advantages over commercial airline travel for the everyday traveler. Whether your main concern is privacy, luxury, security or convenience, we know you will be satisfied with all aspects of your <span className='text-orange-400 cursor-pointer'>  private charter jet rental  </span> from Charter Jet One.
            </p>
          <h1 className='text-xl md:text-2xl pt-4 md:pt-4 content text-orange-500'>COST-EFFECTIVE TRAVEL</h1>
          <p className='text-base  font-normal pe-4  text-gray-600 pt-4 md:pt-8 pr-8 pb-4  content '>
            There are many cost-effective charter planes available allowing corporate business travelers, large families and groups of friends to enjoy the <span className='text-orange-400 cursor-pointer '>  benefits of a private jet rental. </span> With every type of private plane available, there are endless reasons why you should choose to fly with Charter Jet One, such as  avoiding the hassles of commercial airports and airline travel. Let our professional pilots fly you on a charter aircraft to your destination while you sit back, relax and enjoy the flight. Private planes will minimize your time in the air and maximize your time at your destination.
          </p>
          <NavLink to="/Form">
            <button className='bg-yellow-500 w-full  rounded-sm h-12  md:mt-8 md:w-3/4  font-normal text-lg md:font-normal text-white hover:opacity-75 mb-4 '>
              Request a Private Jet Charter Quote
            </button>
          </NavLink>
          <h1 className='text-xl italic text-gray-600 mt-2'>Or call us toll free at <span className='text-orange-500'> (844) 251-0555 </span>  or direct at <br /> <span className='text-orange-500'> (212) 279-1095 </span> .</h1>
        </div>
        <div className='left object-contain  lg:p-4 '>
          <img src="https://charterjetone.com/wp-content/uploads/2016/02/41-1.jpg" alt="Aeroplane Image " className='lg:p-4 lg:px-8  w-full  lg:h-[75%] h-fit  ' />
        </div>
      </div>
    </div>
  )
}

export default Middle