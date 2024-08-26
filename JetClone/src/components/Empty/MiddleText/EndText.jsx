import React, { useEffect } from 'react'

const EndText = () => {

  return (
    <>
      <div className='w-full h-full px-6  lg:px-28 mt-12   lg:flex flex-row justify-around'>
        <div className='lg:w-[45%] h-fit '>
          <p className="text-base text-gray-600 font-normal text-start pb-4 "><span className='text-orange-500 cursor-pointer'>Charter Jet One</span> offers empty leg charters throughout the United States, Canada, Caribbean, and Europe. Our private empty leg charter flights allow you to get there faster and avoid the hassles of commercial travel.</p>
          <h1 className='text-2xl font-normal text-orange-600 pb-4'>EMPTY LEG FLIGHTS : FAQs</h1>
          <h1 className='text-2xl font-normal text-gray-800 pb-2 '>How much does it cost to rent a private jet for an empty leg charter flight?</h1>
          <p className='text-base text-gray-600 font-normal text-start pb-4 '>
            <span className='text-orange-500 cursor-pointer'>How much do empty leg flights cost? </span>Empty leg flights can often be found at a discount of up to 75% off the cost of a custom <span className='text-orange-500 cursor-pointer'>private jet rental</span>. The exact price of your empty leg charter flight will depend on the route and the operator, but many empty leg private jet operators are often prepared to offer exceptionally low prices on empty leg charters.
          </p>
          <p className='text-base text-gray-600 font-normal text-start pb-4 '>
            Why are empty leg charter flights cheaper than other private jet charter flights? The plane has just completed a route for a private jet charter passenger and needs to return to another airport or back to home base. The private jet operator would rather offer you a discount on these flights rather than fly empty. To learn more read our article, <span className='text-orange-500 cursor-pointer'>Empty Leg Flights: Fly on a Private Jet at Close to Airline Prices </span>. Charter Jet One empty leg flights are a great way to save money and fly private anywhere in the world!
          </p>
          <p className='text-base text-gray-600 font-normal text-start pb-4 '>
            Even better, the pricing for booking an empty leg charter flight is oftentimes negotiable. One-way journeys are offered to the general public at highly reduced rates and since pilots prefer to have passengers for both directions of their flight, you can always be sure to work out a deal that is best for you. Not sure where to start? Our experienced team of charter flight professionals is available to assist you at any time with your private jet charter needs.
          </p>
        </div>
        <div className='lg:w-[6%] h-fit'></div>
        {/* second part of text container  */}
        <div className='lg:w-[55%] w-full lg:-ml-2 pt-2 pb-3 h-fit px-2 '>
          <h1 className='text-2xl font-normal text-gray-800'>Where do empty leg flights fly?</h1>
          <p className="text-base text-gray-600 font-normal text-start pb-4 ">
            Private jet empty leg flight itineraries can be found worldwide! Everywhere private jets go, our empty leg charter flights follow. With <span className='text-orange-500 cursor-pointer'>Charter Jet One</span>, you can find empty legs in countries all over the world, such as the United States, Canada, the Caribbean, and Europe. Prices for our empty leg flights are for the entire jet so you can bring as many passengers as the aircraft can seat! Browse our current availability of empty legs to book your one-way private jet, today!
          </p>
          <h1 className='text-2xl font-normal text-gray-800 py-3'>What if I don’t see an empty leg flight where I am traveling?</h1>
          <p className="text-base text-gray-600 font-normal text-start pb-2 ">
            Empty leg flights typically require flexible travel schedules and destinations. Empty leg charters can arise anywhere in the world and fly to any other destination in the world at any time. So as a traveler, you must be flexible, savvy, and able to find the right empty leg flight at the right time. A private jet empty leg flight can be a great way of accessing private jet travel, <span className='text-orange-500 cursor-pointer'>Empty leg flights</span> typically require flexible travel schedules and destinations. Empty leg charters can arise anywhere in the world and fly to any other destination in the world at any time. So as a traveler, you must be flexible, savvy, and able to find the right empty leg flight at the right time. A private jet empty leg flight can be a great way of accessing private jet travel,! at close-to-airline prices. An empty leg can be combined with airline flights or worked into a private charter schedule, to give a very cost-effective price for your trip, while flying private!
          </p>

          <h1 className='text-2xl font-normal text-orange-600 pt-6'>BENIFITS OF EMPTY LEGS</h1>
          <ul className='pl-4 py-3' style={{ listStyleType: 'disc', color: 'black' }}>
            <li className='text-gray-600'>Save Up to 75% with Empty Legs</li>
            <li className='text-gray-600'>Select from a variety of aircraft types</li>
            <li className='text-gray-600'>Book one-way charter flights instead of round-trip</li>
            <li className='text-gray-600'>Seating capacity includes entire aircraft</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default EndText