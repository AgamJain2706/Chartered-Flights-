import React from 'react'
import Card from './Images/card2.jpg'
const TextCredit = () => {
  return (
    <div className=' lg:mx-8 lg:px-16 px-7 lg:pb-2 justify-center '>
      <h1 className='text-3xl text-start font-normal text-gray-700 py-3 '>The Charter Jet One Exclusive Jet Card has arrived!</h1>
      <h2 className='text-2xl text-start font-normal text-orange-500 py-2 '>START ENJOYING YOUR EXCLUSIVE PRIVILEGES TODAY</h2>
      <p className='text-[17px] text-left py-8 '>The Charter Jet One Jet Card empowers our clientele:
        <ul className='lg:px-4 text-gray-700 '>
          <li style={{listStyle:"disc",color:"gray"}}>Expiration: Funds never expire and balance fully refundable</li>
          <li style={{listStyle:"disc",color:"gray"}}>Service Areas: Worldwide</li>
          <li style={{listStyle:"disc",color:"gray"}}>Availability: Guaranteed w/ no blackout dates*</li>
          <li style={{listStyle:"disc",color:"gray"}}>CharterJetOne: Aircraft Flexibility guarantee</li>
          <li style={{listStyle:"disc",color:"gray"}}>Choose between any size , category or type of jet anywhere anytime</li>
        </ul>
      </p>

      <img src={Card} alt="cardImage" className='lg:w-[55%] w-3/4 px-2 h-auto ' />
    </div>
  )
}

export default TextCredit