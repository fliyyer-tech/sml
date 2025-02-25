import { FaRegUser } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { RiQrScan2Line } from "react-icons/ri";
import { PiCompassLight } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const BottomNavigation = () => {
  const location = useLocation();
  const handleScanQR = () => {
    alert("Scanning QR Code...");
  };

  const menu = [
    {
      name: "Home",
      icon: <AiOutlineHome className="text-2xl" />,
      path: "/",
    },
    {
      name: "Explore",
      icon: <PiCompassLight className="text-2xl" />,
      path: "/explore",
    },
    {
      name: "My Points",
      icon: <AiOutlineStar className="text-2xl" />,
      path: "/points",
    },
    {
      name: "Profile",
      icon: <FaRegUser className="text-2xl" />,
      path: "/profile",
    },
  ];

  return (
    <div className="fixed sm:hidden bottom-0 left-0 w-full px-4">
      <div className="w-full bg-white shadow-3xl rounded-t-2xl p-4 flex justify-between items-center">
        {menu.slice(0, 2).map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex flex-col gap-1 items-center ${location.pathname === item.path ? "border-b-4 border-yellow-500" : ""
              } transition-all duration-300`}
          >
            {item.icon}
            <span className="text-xs">{item.name}</span>
          </Link>
        ))}

        <div className="relative">
          <button
            onClick={handleScanQR}
            className="bg-teal-400 text-white p-3 rounded-full shadow-2xl flex flex-col items-center absolute -top-12 left-1/2 transform -translate-x-1/2"
          >
            <RiQrScan2Line className="text-3xl" />
            <span className="text-xs mt-1 text-nowrap">Scan QR</span>
          </button>
        </div>

        {menu.slice(2, 4).map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex flex-col gap-1 items-center ${location.pathname === item.path ? "border-b-4 border-yellow-500" : ""
              } transition-all duration-300`}
          >
            {item.icon}
            <span className="text-xs">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
