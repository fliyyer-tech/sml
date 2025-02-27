const CardFeature1 = ({ icons, title }) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="flex justify-center text-typography items-center w-16 h-16 md:w-28 md:h-28 rounded-full bg-gradient-to-b from-gray-100 to-gray-200 shadow-lg 
          transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
        {icons}
      </div>
      <span className="text-sm md:text-lg font-medium text-typography mt-3 md:mt-6 tracking-wide 
          transition-colors duration-300 group-hover:text-gray-900">
        {title}
      </span>
      <div className="w-0 h-[2px] bg-gray-900 mt-1 transition-all duration-300 group-hover:w-10"></div>
    </div>
  );
};

export default CardFeature1;
