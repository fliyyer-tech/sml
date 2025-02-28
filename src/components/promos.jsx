import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Promo1 from "../assets/promo-1.png";
import Promo2 from "../assets/promo-2.png";
import Promo3 from "../assets/promo-3.png";

const Promos = () => {
  const sliderRef = useRef(null);

  const allPromos = [
    {
      image: Promo1,
      title: "Diskon 25% untuk Member Baru!",
    },
    {
      image: Promo2,
      title: "Cashback 30% dengan Kartu Kredit",
    },
    {
      image: Promo3,
      title: "Promo Spesial Akhir Bulan!",
    },
    {
      image: Promo1,
      title: "Gratis Ongkir ke Seluruh Indonesia!",
    },
    {
      image: Promo2,
      title: "Cashback 30% dengan Kartu Kredit",
    },
  ];

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full py-5 overflow-x-hidden">
      <div className="w-full mx-auto px-5">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-typography">
            Promos Spesial
          </h1>
          <button className="border border-none flex items-center text-xs">
            Show More <IoIosArrowForward />
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full relative mt-6">
            {allPromos.length > 3 && (
              <button
                onClick={scrollLeft}
                className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
              >
                <FaChevronLeft className="text-gray-600" />
              </button>
            )}

            <div
              ref={sliderRef}
              className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x"
              style={{ scrollbarWidth: "none" }}
            >
              {allPromos.map((promo, index) => (
                <div
                  key={index}
                  className="snap-center min-w-[100%] bg-white shadow-lg rounded-3xl overflow-hidden"
                >
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full rounded-t-3xl h-48 object-cover"
                  />
                </div>
              ))}
            </div>

            {allPromos.length > 3 && (
              <button
                onClick={scrollRight}
                className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
              >
                <FaChevronRight className="text-gray-600" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promos;
