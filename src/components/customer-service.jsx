import { useState } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import { MdClose, MdContactSupport } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const CustomerService = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-36 right-6 md:bottom-10 md:right-10 z-50">
            <div
                className={`absolute bottom-16 right-0 bg-white shadow-lg rounded-lg w-48 p-3 transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
                    }`}
            >
                <button
                    className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
                >
                    <BsChatDotsFill className="text-yellow-500 text-lg mr-3" />
                    BSD Chat
                </button>
                <button
                    className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
                >
                    <MdContactSupport className="text-yellow-500 text-lg mr-3" />
                    Contact Us
                </button>
            </div>

            <button
                className="w-14 h-14 md:w-16 md:h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-600 transition-all"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <MdClose className="text-3xl" /> : <RiCustomerService2Fill className="text-2xl" />}
            </button>
        </div>
    );
};

export default CustomerService;
