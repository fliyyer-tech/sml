import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
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
    <div className="w-full py-5 lg:py-10 overflow-x-hidden">
      <div className="w-full md:max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-typography md:text-2xl">
            Promos Spesial
          </h1>
          <button className="border border-none md:hidden  text-sm">
            Show More
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 hidden md:flex flex-col gap-4 text-center md:text-left">
            <div className="flex flex-row items-center gap-2">
              <div className="flex justify-center items-center shadow-lg rounded-full bg-gradient-to-b from-primary to-primary/70 size-12">
                <RiDiscountPercentFill className="text-3xl text-white" />
              </div>
              <h2 className="text-base md:text-2xl font-semibold text-typography/90">
                Cek promonya <br />sekarang!
              </h2>
            </div>
            <button className="border w-fit border-primary bg-primary/10 py-2 px-6 md:px-8 rounded-lg text-sm md:text-base">
              Show More
            </button>
          </div>

          <div className="w-full md:w-[80%] relative mt-6 md:mt-0">
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
                  className="snap-center min-w-[75%] sm:min-w-[300px] bg-white shadow-lg rounded-3xl overflow-hidden"
                >
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full rounded-t-3xl h-40 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {promo.title}
                    </h3>
                  </div>
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
