import React from 'react'
import Slider from "react-slick";

export const LogoSlider = ({ logos }) => {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        }
      },
    ]
  };
  return(
    <section className='logo-wrapper panel' data-color="green">
      <div className='subtitle'>{logos.primary.title}</div>
      <div className='logo-slider'>
        <Slider {...settings}>
          {logos.items.map((item, i) => {
            return(
              <div className='img-slide' key={`img-slide${i}`}>
                <img src={item.logo.url}/>
              </div>
            )
          })}
          {logos.items.map((item, i) => {
            return(
              <div className='img-slide' key={`img-slide2${i}`}>
                <img src={item.logo.url}/>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}