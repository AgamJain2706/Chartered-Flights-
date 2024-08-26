import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Navbar/NavImg/logo.png'


const Nav = () => {
  return (
    <>
      <header>
        <div className="bg-[#faa01b] w-full h-20 flex flex-col sm:w-full  justify-center items-center px-2 sm:h-10 sm:flex-row sm:justify-between sm:items-center sm:p-4">
          <h1 className="text-blue-950 font-normal   justify-center lg:text-center   ">
            Charter a private jet with Charter Jet One to avoid commercial airline travel during COVID-19.{' '}
            <u className=" text-blue-950 font-bold cursor-pointer">See our response plan.</u>
          </h1>
        </div>
        <div className="bg-[#0B2545] flex w-full  lg:h-24 h-40    items-center space-x-4 ">
          <Link to="/">
            <img src={Logo} alt="Logo" className=" w-auto h-auto cursor-pointer lg:ml-16 sm:ml-8  py-4 px-4  " />
          </Link>
          <ul className=" p-8 justify-center space-x-12 lg:flex  hidden   lg:ml-8  ">
            <li className="flex items-center space-x-1">
              <img src="https://res.cloudinary.com/dalkzi1x8/image/upload/v1722857263/ChartedjetContact/1722857263289-directCallWhite.png.png" alt="Direct" className="cursor-pointer w-[40px] h-[40px] " />
              <div>
                <h1 className=" text-xs text-white">
                  CALL DIRECT
                  <br />
                  <span className="text-[#faa01b] text-sm">(212) 279-1095</span>
                </h1>
              </div>
            </li>
            <li className="flex items-center space-x-1">
              <img src="https://res.cloudinary.com/dalkzi1x8/image/upload/v1722857312/ChartedjetContact/1722857312515-tollFreeWhite.png.png" alt="Toll" className="cursor-pointer w-[40px] h-[40px] " />
              <div>
                <h1 className=" text-xs text-white">
                  CALL TOLL FREE
                  <br />
                  <span className="text-[#faa01b] text-sm">(844) 251-0555</span>
                </h1>
              </div>
            </li>
            <li className="flex items-center space-x-1">
              <img src="https://res.cloudinary.com/dalkzi1x8/image/upload/v1722857355/ChartedjetContact/1722857355268-chatWhite.png.png" alt="Text" className="cursor-pointer  w-[40px] h-[40px] " />
              <div>
                <h1 className=" text-xs text-white">
                  TEXT MESSAGE
                  <br />
                  <span className="text-[#faa01b] text-sm">212-279-1095</span>
                </h1>
              </div>
            </li>
            <li className="flex items-center space-x-1">
              <img src="https://res.cloudinary.com/dalkzi1x8/image/upload/v1722857393/ChartedjetContact/1722857392990-emailWhite.png.png" alt="Email" className="cursor-pointer  w-[40px] h-[40px]  " />
              <div>
                <h1 className=" text-xs text-white">
                  Email
                  <br />
                  <span className="text-[#faa01b] text-sm">INFO@CHARTERJETONE.COM</span>
                </h1>
              </div>
            </li>
          </ul>
          <div className='   w-1/4 h-[15px] mr-4 top-0 z-0  mb-3  sm:hidden block border-box'>
            <Link to="/Form">
              <img src="https://charterjetone.com/wp-content/uploads/2018/02/book-btn-mobile.png" alt="Booking Image " className="cursor-pointer " />
            </Link>
          </div>
        </div>
      </header>

    </>
  )
}

export default Nav
