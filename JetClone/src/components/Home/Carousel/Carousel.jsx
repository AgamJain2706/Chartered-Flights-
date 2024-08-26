import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

const Carousel = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      const activeElement = document.querySelector('.slick-active .slide-content');
      if (activeElement) {
        activeElement.classList.remove('animate');
      }
    },
    afterChange: (current) => {
      const activeElement = document.querySelector('.slick-active .slide-content');
      if (activeElement) {
        activeElement.classList.add('animate');
      }
    },
  };

  return (
    <>
      <Slider className=" slider" {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">

            <div
              className="slide-background  "
              style={{ backgroundImage: `url(${slide.URL})` }}
            ></div>
            <div className="slide-content text-left ">
              <div className="slide-text ">{slide.text}</div>
              <div className="slide-body">{slide.body}</div>
              <NavLink to="/Form">
                <button className="slide-button" onClick={() => console.log(slide.text)}>
                  {slide.buttonText}
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </Slider>
      <div className='slideblack  bg-black w-full h-12 sm:hidden block border-box'></div>
    </>
  );
};

export default Carousel;
