import React, { Component } from "react";
import Slider from "react-slick";
import Mini from '../Empty Lag images/mini1.jpg'
import Mini1 from '../Empty Lag images/mini2.jpg'
import Mini2 from '../Empty Lag images/mini3.jpg'
import Mini3 from '../Empty Lag images/mini4.jpg'

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    fade: true,
    arrows:false,
    autoplaySpeed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };
  return (
    <div className="slider-container w-full h-full   lg:px-24 px-4 my-4 lg:flex flex-row justify-around    ">
      <div className="lg:w-[45%]   w-full h-fit  ">
      <Slider  {...settings}>
        <div >
          <img src={Mini}  className="lg:w-[90%] w-full h-[400px]  object-fill   " />
        </div>
        <div >
          <img src={Mini1} className="lg:w-[90%] w-full h-[400px]  object-fill  " />
        </div>
        <div >
          <img src={Mini2} className="lg:w-[90%] w-full h-[400px]  object-fill  " />
        </div>
        <div >
          <img src= {Mini3} className="lg:w-[90%] w-full h-[400px]  object-fill  " />
        </div>
      </Slider>
      </div>
      <div className="lg:w-[50%] w-full lg:-ml-4 h-fit px-2 py-2  ">
        <h1 className="text-3xl font-normal text-gray-800 text-start -mt-3 ">What is an empty leg flight?</h1>
        <p className="text-base text-gray-500 font-normal text-start pe-4 pt-4 " >
        Charter aircraft empty leg flights – also known as ‘empty legs’ or ‘one-way charter flights’ — have become increasingly popular in the world of private air travel. But what is an empty leg flight and what does it mean for you? An empty leg charter flight is the return portion of an already booked  one-way  <span className="text-orange-500 cursor-pointer">private charter flight</span>. <br /> The aircraft needs to fly empty to reposition itself for its next customer or to return to its home base. Although private jet operators try to accommodate schedules to avoid inefficiency, a total of 30% of all private jets fly empty, creating a substantial <span className="text-orange-500 cursor-pointer">inventory</span> of empty leg charter flights.
        </p>
        <p className="text-base text-gray-500 font-normal text-start pe-4 pt-4 " >
        Flying in a private jet is a dream on everyone’s bucket list and for a sound reason. Apart from basking in the luxury of having a plane to yourself, using a <span className="text-orange-500 cursor-pointer">one-way private jet service</span> comes with incredible convenience. You are able to fly on your own schedule, not get stuck in security lines, or have to wait for your boarding group. Booking an empty leg private jet is the best way to score highly discounted prices on private jet charters.
        </p>
      </div>
    </div>
  );
}

export default Carousel;
