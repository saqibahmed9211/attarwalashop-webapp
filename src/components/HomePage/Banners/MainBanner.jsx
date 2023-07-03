import React, { Component } from 'react';
import { BANNER_ITEMS } from '../../../utils/constants';
import BannerItem from './BannerItem';
import Slider from "react-slick";

class MainBanner extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      // autoplay: true,
      adaptiveHeigh: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="col-lg-8 silider-wrapp">
        <div className="home-slider">
          <div className="slider-owl owl-slick equal-container nav-center slick-initialized slick-slider" role="toolbar">
            <div aria-live="polite" className="slick-list draggable">
              <div className="slick-track" role="listbox">
                <Slider {...settings}>
                  {BANNER_ITEMS.map((item, index) => {
                    return(
                      <BannerItem key={index} banner={item}/>
                    )
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBanner;