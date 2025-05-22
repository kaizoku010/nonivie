import React, { useState, useEffect }from "react";
import "./DxSlider.css";
import SlideOne from "../imgs/slide-main.jpg";
import SlideTwo from "../imgs/slide-1-2.jpg";
import SlideThree from "../imgs/slide-3.jpg";
import SlideFour from "../imgs/slide-4.jpg";

function DxSlider() {
  
const images = [SlideOne, SlideTwo, SlideThree, SlideFour];

const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Autoplay functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-container">
      <button className="prev" onClick={prevSlide}>&lt;</button>
      <img className="slide" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className="next" onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default DxSlider;
