import React from "react";
import Map from "../assets/map.png";
import { IoIosArrowForward } from "react-icons/io";

const Traffic = () => {
  return (
    <div className="w-full px-5 lg:px-0 md:max-w-7xl mx-auto flex flex-col md:my-10">
      <div className="text-center md:text-left mb-8">
        <h1 className="font-bold text-3xl md:text-2xl text-typography flex items-center gap-2">
          BSD Traffic
        </h1>
        <p className="text-gray-600 mt-1 max-w-2xl">
          Stay ahead of the traffic with real-time updates. Get insights on congestion levels, road closures, and alternative routes to make your journey smoother.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 bg-white rounded-xl shadow-md overflow-hidden">
          <img src={Map} alt="Traffic Map" className="w-full h-72 object-cover" />
          <div className="p-6">
            <h2 className="font-semibold text-xl text-gray-800 flex items-center gap-2">
              Live Traffic Conditions
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Monitor real-time traffic flow, avoid congested areas, and explore alternative routes for a hassle-free commute.
            </p>
            <div className="flex items-center mt-5">
              <button className="text-[#ff9514] font-semibold flex items-center gap-2 hover:text-[#e57c00] transition">
                View Details <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:w-2/5">
          {[1, 2].map((index) => (
            <div key={index} className="bg-white rounded-xl shadow-md  transition-shadow overflow-hidden">
              <img src={Map} alt={`Traffic Update ${index}`} className="w-full h-36 object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-800">
                  Traffic Update {index}
                </h3>
                <p className="text-gray-600 mt-2">
                  Stay updated on the latest road conditions and avoid traffic congestion.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Traffic;
