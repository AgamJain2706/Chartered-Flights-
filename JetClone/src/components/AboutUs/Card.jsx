import React from 'react'

const Card = ({Data}) => {
  return (
    <div>
          <div className=' my-2   lg:px-12     '>
                <div className='lg:w-[55%] w-full  h-full object-cover'>
                    <div className="bg-white rounded-none md:rounded-md md:w-auto  md:flex w-auto ">
                        <img
                            src={Data.Image}
                            alt="Boat"
                            className="w-[80%] h-[80%] px-2 md:w-auto  object-fill "
                        />
                        <div className="lg:pl-6 pl-5 w-full">
                            <h2 className="text-xl md:text-2xl text-gray-700 mb-2">
                                {Data.title}
                            </h2>
                            <p className='text-base  font-normal text-gray-600 pt-4 text-start'>
                                {Data.description} 
                            </p>
                            <ul>
                                <li className='text-sm' style={{listStyle:"disc",color:"gray"}}>{Data.keypoint1}</li>
                                <li className='text-sm' style={{listStyle:"disc",color:"gray"}}>{Data.keypoint2}</li>
                                <li className='text-sm' style={{listStyle:"disc",color:"gray"}}>{Data.keypoint3}</li>
                                <li className='text-sm' style={{listStyle:"disc",color:"gray"}}>{Data.keypoint4}</li>
                            </ul>
                        </div>
                    </div>
                    <hr className='h-px mt-2 bg-gray-300 border-0' />
                </div>
            </div>
    </div>
  )
}

export default Card