import React, { useState, useEffect } from "react";
import Banner1 from "../assets/header-1.jpg";
import Banner2 from "../assets/header-2.jpg";
import Banner3 from "../assets/header-3.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const banners = [Banner1, Banner2, Banner3];

const HeaderBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative px-5 xl:px-0 my-2 w-full sm:max-w-7xl sm:my-6 mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-[200px] sm:h-[400px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div
              key={index}
              className="min-w-full h-[200px] sm:h-[400px]"
            >
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-400 p-2 rounded-full transition-all duration-500 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        onClick={prevSlide}
      >
        <FaArrowLeft />
      </button>
      <button
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-400 p-2 rounded-full transition-all duration-500 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        onClick={nextSlide}
      >
        <FaArrowRight />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderBanner;