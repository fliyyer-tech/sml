import React from "react";
import BackgroundHeader from "../assets/header-2.jpg";

const HeaderDesktop = () => {
  return (
    <div
      className="hidden md:flex w-full h-[50vh] lg:h-[90vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BackgroundHeader})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-between relative">
        <h1 className="text-5xl max-w-64 lg:max-w-80 md:leading-[70px] lg:text-6xl font-bold text-white absolute left-4 lg:left-0 top-1/2 transform -translate-y-1/2">
          Unveiling the Soul of the City
        </h1>
        <p className="text-lg text-white absolute right-4 lg:right-0 bottom-14 max-w-md text-right">
          Immerse yourself in a world of energy, culture, and limitless innovation. Wander through iconic landmarks, uncover hidden gems, and experience the heartbeat of the city like never before.
        </p>
      </div>
    </div>
  );
};

export default HeaderDesktop;
