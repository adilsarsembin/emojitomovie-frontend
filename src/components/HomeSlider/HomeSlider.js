import Slider from "react-slick";
import { topImages, bottomImages } from "../../pages/Home/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSlider.css";

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="homeSlider">
       <div className="homeSlider__slider">
        <Slider {...settings}>
          {topImages.map((item) => (
            <div className="homeSlider__top" key={item.id}>
              <img className={"homeSlider__img"} src={item.image} alt={item.text}/>
            </div>
          ))}
        </Slider>
       </div>
       <div className="homeSlider__slider homeSlider__top">
        <Slider {...settings}>
          {bottomImages.map((item) => (
            <div className="homeSlider__bottom" key={item.id}>
              <img className={"homeSlider__img"} src={item.image} alt={item.text}/>
            </div>
          ))}
        </Slider>
       </div>
    </div>
  )
};

export default HomeSlider;