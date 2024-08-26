import React from 'react'

const Between = () => {
  return (
    <>
    <section className='w-full h-full px-6  lg:px-24 my-6 lg:flex flex-row justify-evenly  '>
      <div className='lg:w-[45%] h-fit '>
        <img src="https://charterjetone.com/wp-content/uploads/2022/01/charter-aircraft-empty-legs.jpeg" alt="" className='lg:w-[89%] h-fit object-cover w-full ' />
      </div>
      <div className='lg:w-[50%] w-full lg:-ml-4 pb-3 h-fit px-2 '>
        <h1 className='text-3xl font-normal text-orange-500 pb-2'>HERE ARE TWO SCENARIOS OF EMPTY LEG FLIGHTS : </h1>
        <h2 className='text-2xl font-semibold text-gray-600 pb-2 '>Re-Positioning Empty Legs:</h2>
        <p className="text-base text-gray-600 font-normal text-start pb-2 ">
        Let’s say someone chartered <span className='text-orange-500 cursor-pointer'>a private jet</span> to fly from Miami to New York City but the jet is currently parked in Dallas, TX. That private jet needs to fly from Dallas to Miami – and would fly empty.
        </p>
        <h2 className='text-2xl font-semibold text-gray-600 pb-2 '>Return Empty Legs:</h2>
        <p className='text-base font-normal text-gray-600 '>
        Imagine someone booked a one-way private jet service from New York to Boston. That private jet needs to return back to Boston – and would fly empty.

        </p>
      </div>
    </section>
    </>
  )
}

export default Between