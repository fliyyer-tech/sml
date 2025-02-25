import React, { useState, useEffect } from "react";
import Banner1 from "../assets/banner-1.png";
import Banner2 from "../assets/banner-2.png";
import Banner3 from "../assets/banner-3.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const banners = [Banner1, Banner2, Banner3];

const HeaderBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative my-2 w-full mx-auto">

      <div className="relative w-full h-[200px]">
        <img
          src={banners[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          className="w-full h-full object-cover rounded-2xl transition-opacity duration-500"
        />
      </div>

      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderBanner;
