import React from "react";
import Map from "../assets/map.png";
import { IoIosArrowForward } from "react-icons/io";

const GetTraffic = () => {
  return (
    <div className="w-full px-5 lg:px-5 mb-28 md:mb-20 mx-auto flex flex-col">
      <h1 className="font-bold text-typography">
        BSD Traffic
      </h1>
      <div className="my-3 flex">
        <div className="flex w-full cursor-pointer flex-col border border-gray-200 rounded-3xl bg-white overflow-hidden">
          <div className="relative w-full h-32 overflow-hidden">
            <img
              className="w-full object-cover rounded-t-3xl absolute inset-0 transition-transform duration-500 transform hover:scale-110"
              src={Map}
              alt={'map'}
            />
            <div className="absolute -bottom-5 left-0 w-full h-16 bg-gradient-to-t from-white/90 to-transparent"></div>
          </div>
          <div className="px-2 py-5 text-typography">
            <h3 className="text-sm font-bold">Get Directions</h3>
            <div className="flex justify-between items-center">
              <span className="text-xs">Helping you to find the best route
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
