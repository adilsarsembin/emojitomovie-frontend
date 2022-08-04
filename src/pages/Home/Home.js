import React from "react";
import "./Home.css";
import Slider from "react-slick";

function Home() {
  const images = [
    { id: 1, text: "film1", image: require("../../photos/image1.png") },
    { id: 2, text: "film2", image: require("../../photos/image2.png") },
    { id: 3, text: "film3", image: require("../../photos/image3.png") },
    { id: 4, text: "film4", image: require("../../photos/image4.png") },
    { id: 5, text: "film5", image: require("../../photos/image5.png") },
    { id: 6, text: "film6", image: require("../../photos/image6.png") },
    { id: 7, text: "film7", image: require("../../photos/image7.png") },
    { id: 8, text: "film8", image: require("../../photos/image8.png") },
  ];

  return (
    <div className="home">
      {images.map((item) => {
        console.log(item);
        <div className="photos">
          <img 
					 src={item.image} 
					 alt={item.text}></img>
        </div>;
      })}
    </div>
  );
}

export default Home;
