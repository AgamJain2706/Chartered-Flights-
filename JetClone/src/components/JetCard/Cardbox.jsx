import React from 'react'

const Cardbox = ({cards}) => {
  return (
    <div>
          <div className=' my-2 px-4   lg:mx-8 lg:px-16 lg:py-4 justify-center  '>
                <div className='lg:w-[55%] w-full  h-full object-cover'>
                    <div className="bg-white rounded-none md:rounded-md md:w-full md:flex w-full">
                        <img
                            src={cards.Image}
                            alt="Boat"
                            className="w-[80%] h-[80%]  md:w-auto  object-fill "
                        />
                        <div className="lg:pl-8 pl-6 ">
                            <h2 className="text-xl md:text-2xl text-gray-700 mb-2">
                                {cards.title}
                            </h2>
                            <p className='text-[16px] font-normal text-gray-600 pt-4 px-4 text-start'>
                                {cards.description} 
                            </p>
                            <ul>
                                <li className='text-sm ' style={{listStyle:"disc",color:"gray"}}>{cards.keypoint1}</li>
                                <li className='text-sm ' style={{listStyle:"disc",color:"gray"}}>{cards.keypoint2}</li>
                            </ul>
                        </div>
                    </div>
                    <hr className='h-px mt-2 bg-gray-300 border-0' />
                </div>
            </div>
    </div>
  )
}

export default Cardbox