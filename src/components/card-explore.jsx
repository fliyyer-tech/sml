import Explore from "../assets/explore-1.png";
import { IoIosArrowForward } from "react-icons/io";

const CardExplore = (props) => {
  const { title, image } = props;
  return (
    <div className="flex min-w-52 cursor-pointer flex-col border border-gray-200 rounded-3xl bg-white overflow-hidden">
      <div className="relative w-full h-32 md:h-56 overflow-hidden">
        <img
          className="w-full object-cover rounded-t-3xl absolute inset-0 transition-transform duration-500 transform hover:scale-110"
          src={image ? image : Explore}
          alt={title}
        />
        <div className="absolute -bottom-5 left-0 w-full h-16 bg-gradient-to-t from-white/90 to-transparent"></div>
      </div>
      <div className="px-2 py-5 text-typography">
        <h3 className="text-sm md:text-lg font-bold">Merchant Partners</h3>
        <div className="flex justify-between items-center">
          <span className="text-xs md:text-sm md:mt-2">Lorem ipsum dolor sit amet.</span>
          <div>
            <IoIosArrowForward className="size-5 text-[#ff9514]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExplore;
