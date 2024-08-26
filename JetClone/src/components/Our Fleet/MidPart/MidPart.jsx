import React from 'react'
const MidPart = ({ data }) => {
    return (
        <>
            <div className='my-4 w-full pe-6'>
                <div className='w-full h-full object-cover'>
                    <div className="bg-white rounded-none md:rounded-md lg:w-full md:flex w-full">
                        <img
                            src={data.image}
                            alt="Boat"
                            className="w-full lg:h-28 md:w-1/3 md:h-1/3 lg:object-cover "
                        />
                        <div className="lg:pl-4 pl-3 w-full">
                            <h2 className="text-xl md:text-2xl text-black mb-2">
                                {data.title}
                            </h2>
                            <p className='text-base  font-normal text-gray-600 pt-2 text-start'>
                                {data.description} <span className='text-orange-500 cursor-pointer'>Read More</span>
                            </p>
                        </div>
                    </div>
                    <hr className='h-px my-4 bg-gray-300 border-0' />
                </div>
            </div>

        </>

    )
}

export default MidPart