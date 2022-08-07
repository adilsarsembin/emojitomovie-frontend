import React from "react";
import Slider from "react-slick";
import {topImages, bottomImages} from './images'
import "./Home.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="home">
      <Slider {...settings}>
      {topImages.map((item) => (
        <div className="top-photos">
          <img 
					 src={item.image} 
					 alt={item.text}></img>
        </div>
      ))}
      </Slider>
      <Slider {...settings}>
      {bottomImages.map((item) => (
        <div className="photos">
          <img 
					 src={item.image} 
					 alt={item.text}></img>
        </div>
      ))}
      </Slider>
    </div>
  );
}

export default Home;
