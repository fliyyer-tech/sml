import React from "react";
import Map from "../assets/map.png";
import { IoIosArrowForward } from "react-icons/io";

const GetTraffic = () => {
  return (
    <div className="w-full md:hidden px-5 lg:px-0 md:max-w-7xl mb-28 mx-auto flex flex-col md:my-5">
      <h1 className="font-bold text-typography md:text-2xl">
        BSD Traffic
      </h1>
      <div style={{ scrollbarWidth: 'none' }} className="my-3 flex overflow-x-scroll md:overflow-hidden scroll-smooth md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
        <div className="flex min-w-52 cursor-pointer flex-col border border-gray-200 rounded-3xl bg-white overflow-hidden">
          <div className="relative w-full h-32 md:h-56 overflow-hidden">
            <img
              className="w-full object-cover rounded-t-3xl absolute inset-0 transition-transform duration-500 transform hover:scale-110"
              src={Map}
              alt={'map'}
            />
            <div className="absolute -bottom-5 left-0 w-full h-16 bg-gradient-to-t from-white/90 to-transparent"></div>
          </div>
          <div className="px-2 py-5 text-typography">
            <h3 className="text-sm md:text-lg font-bold">Get Directions</h3>
            <div className="flex justify-between items-center">
              <span className="text-xs md:text-sm md:mt-2">Helping you to find the best route
                to your destination</span>
              <div>
                <IoIosArrowForward className="size-5 font-bold text-[#ff9514]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-w-52 cursor-pointer flex-col border border-gray-200 rounded-3xl bg-white overflow-hidden">
          <div className="relative w-full h-32 md:h-56 overflow-hidden">
            <img
              className="w-full object-cover rounded-t-3xl absolute inset-0 transition-transform duration-500 transform hover:scale-110"
              src={Map}
              alt={'map'}
            />
            <div className="absolute -bottom-5 left-0 w-full h-16 bg-gradient-to-t from-white/90 to-transparent"></div>
          </div>
          <div className="px-2 py-5 text-typography">
            <h3 className="text-sm md:text-lg font-bold">Get Directions</h3>
            <div className="flex justify-between items-center">
              <span className="text-xs md:text-sm md:mt-2">Helping you to find the best route
                to your destination</span>
              <div>
                <IoIosArrowForward className="size-5 font-bold text-[#ff9514]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-w-52 cursor-pointer flex-col border border-gray-200 rounded-3xl bg-white overflow-hidden">
          <div className="relative w-full h-32 md:h-56 overflow-hidden">
            <img
              className="w-full object-cover rounded-t-3xl absolute inset-0 transition-transform duration-500 transform hover:scale-110"
              src={Map}
              alt={'map'}
            />
            <div className="absolute -bottom-5 left-0 w-full h-16 bg-gradient-to-t from-white/90 to-transparent"></div>
          </div>
          <div className="px-2 py-5 text-typography">
            <h3 className="text-sm md:text-lg font-bold">Get Directions</h3>
            <div className="flex justify-between items-center">
              <span className="text-xs md:text-sm md:mt-2">Helping you to find the best route
                to your destination</span>
              <div>
                <IoIosArrowForward className="size-5 font-bold text-[#ff9514]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTraffic;
