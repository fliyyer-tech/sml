import React from 'react';
import Explore1 from "../assets/explore-1.png";
import { IoIosArrowForward } from "react-icons/io";
import Explore2 from "../assets/explore-2.png";

const CardExplore = ({ image, title }) => {
  return (
    <div className="flex min-w-52 cursor-pointer flex-col border border-gray-200 rounded-3xl bg-white overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-32 md:h-60 overflow-hidden">
        <img
          className="w-full object-cover rounded-t-3xl absolute inset-0 transition-transform duration-500 transform hover:scale-110"
          src={image}
          alt={title}
        />
        <div className="absolute -bottom-5 left-0 w-full h-16 bg-gradient-to-t from-white/90 to-transparent"></div>
      </div>
      <div className="px-4 py-5 text-typography">
        <h3 className="text-sm md:text-lg font-semibold">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-xs md:text-sm md:mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
          <div>
            <IoIosArrowForward className="size-5 text-[#ff9514]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ExploreLayout = () => {
  return (
    <div className='w-full hidden px-5 xl:px-0 md:max-w-7xl mx-auto md:flex flex-col mb-5 md:my-5'>
      <h1 className='font-bold text-typography md:text-2xl mb-4'>Explore</h1>
      <div className="my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CardExplore image={Explore1} title='Explore 1' />
        <CardExplore image={Explore2} title='Explore 2' />
        <CardExplore image={Explore1} title='Explore 3' />
        <CardExplore image={Explore2} title='Explore 4' />
      </div>
    </div>
  );
}

export default ExploreLayout;
