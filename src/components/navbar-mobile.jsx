import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function NavbarMobile() {
  return (
    <div className="w-full sm:hidden p-5 flex items-center gap-2 bg-white">
      <div className="relative w-full">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 shadow-md border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
      <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium">
        EN
      </button>
      <div className="relative cursor-pointer">
        <IoMdNotificationsOutline className="size-8 text-gray-400" />
      </div>
    </div>
  );
}
