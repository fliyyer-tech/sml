import { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import { MdClose, MdContactSupport } from "react-icons/md";
import CSimg from '../assets/cs.png';

const CustomerService = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-24 right-0 md:bottom-10 md:right-0 z-50">
            <div
                className={`absolute bottom-16 right-0 bg-white shadow-lg rounded-lg w-48 p-3 transition-all duration-300 
                    ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`}
            >
                <button className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition">
                    <BsChatDots className="text-yellow-500 text-lg mr-3" />
                    BSD Chat
                </button>
                <button className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition">
                    <MdContactSupport className="text-yellow-500 text-lg mr-3" />
                    Contact Us
                </button>
            </div>

            <button
                className="flex items-center bg-yellow-500 text-white py-3 px-5 rounded-l-full shadow-lg hover:bg-yellow-600 transition-all"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
                    <MdClose className="text-2xl" />
                ) : (
                    <>
                        <img src={CSimg} alt="Customer Service" className="w-8" />
                    </>
                )}
            </button>
        </div>
    );
};

export default CustomerService;
