import React from 'react'

const Textarea = () => {
  return (
    <>
    <div className='lg:m-8 lg:px-16 px-4 flex flex-row  justify-around  '>
        <div className='my-8 lg:w-[60%] w-full '>
        <h1 className='text-3xl text-gray-900 text-left '>At Charter Jet One, Ready. Set. Jet. is more than <br /> a slogan, its how we do business.</h1>
        <h2 className='text-2xl font-normal pt-2 text-orange-500  '>Charter Jet One is ready when you are</h2>
        <p className='text-lg text-gray-500 font-normal py-2 ' >Americas | Europe | Asia | Africa | Oceania | United States</p>
        <p className='text-gray-500 font-normal '>
            With access to hundreds of airports, a private aircraft can get you closer and faster than any commercial airline and in a shorter time. Executives have come to realize that their time is even more valuable than ever and waiting over an hour to catch a plane and then commute for another hour to reach their final destination is something of the past. By chartering an aircraft executives can take full advantage of every hour and at the end become more productive. Professionalism and luxury treatment is what you will receive when you choose to travel with us. Our team will provide you with seamless travel. When you travel private jet charter with Charter Jet One you can skip the hassles and headaches of commercial airline travel such as parking, layovers, lengthy check ins, security lines, and lost luggage. You will be able to travel luxuriously in the private jet of your choice. You can dine in elegance, conduct business, or simply relax if you choose. Running a little late? No worries. The aircraft leaves when you arrive! When traveling with Charter Jet One you will reduce travel time by flying directly into one of the thousand executive airports closest to your destination. You will arrive rested and ready for your business meeting or well-deserved vacation.    
        </p>
        <h1 className='text-2xl font-normal text-orange-500 text-start my-2'>WHY PRIVATE AVIATION ?</h1>
        <p className='text-base text-gray-500 '>
        Flying commercially provides you with just two choices, coach or first class. Charter Jet One clients have an entire fleet of luxury private jets at their disposal. We recognize that travel needs are as specialized and unique as our clients-that’s why we have access to over 5,000 private aircraft available worldwide including: fuel efficient turbo props, sleek light jets, versatile medium and super medium jets, luxurious heavy jets and even helicopters. The professional pilots we use are the best and the brightest of private aviation. Every pilot exceeds FAA requirements and has a minimum of 5,000 hours of flight experience on a specific type of private aircraft. All the luxury private jets are furnished to your specifications, and are maintained and inspected according to criteria that go above and beyond what the FAA requires, including being audited by independent auditors Wyvern or ARG/US, the highest level of industry standard in private aviation. All private aircraft are certified under FAA Regulations Part 135 as well, something our competition unfortunately cannot say. (See our post on Illegal Jet Charters)
        </p>
        </div>
        <div className='w-[30%] h-fit lg:my-8   lg:block hidden  '>
          <h1 className='text-2xl font-normal text-left text-gray-500  '>About Us</h1>
          <hr className='my-4' style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "gray" }} />
          <p className='text-gray-500 hover:text-orange-500   text-left text-base  cursor-pointer  ' >Flight Charter Company</p>
          <hr className='my-4' style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "gray" }} />
          <p className='text-gray-500 hover:text-orange-500   text-left text-base   cursor-pointer  ' >Private Security</p>
          <hr className='my-4' style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "gray" }} />
          <p className='text-gray-500 hover:text-orange-500   text-left text-base   cursor-pointer  ' >Charter Jet One Offices</p>
          <hr className='my-4' style={{ borderStyle: "dotted", borderWidth: "1px", borderColor: "gray" }} />
        </div>
    </div>
    </>
  )
}

export default Textarea