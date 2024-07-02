import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Slider from "react-slick";

/**
 * @typedef {import("@prismicio/client").Content.LogoSliderSlice} LogoSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LogoSliderSlice>} LogoSliderProps
 * @param { LogoSliderProps }
 */
const LogoSlider = ({ slice }) => {
  console.log(slice)
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
    <section className='logo-wrapper'>
      <div className='subtitle'>{slice.primary.title}</div>
      <div className='logo-slider'>
        <Slider {...settings}>
          {slice.items.map((item, i) => {
            return(
              <div className='img-slide'>
                <img src={item.logo.url}/>
              </div>
            )
          })}
          {slice.items.map((item, i) => {
            return(
              <div className='img-slide'>
                <img src={item.logo.url}/>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default LogoSlider