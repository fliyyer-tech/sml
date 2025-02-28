import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Logo from "../assets/logo.svg";
import Logo1 from "../assets/logo.png";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menu = [
        { name: "home", path: "/" },
        { name: "about", path: "/about" },
        { name: "explore", path: "/explore" },
        { name: "News & Events", path: "/news" },
        { name: "gallery", path: "/gallery" },
        { name: "Access", path: "/Access" },
        { name: "services", path: "/services" },
        { name: "contact", path: "/contact" },
    ];

    return (
        <nav
            className={`fixed hidden md:block top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-typography/10"
                }`}
        >
            <div className="max-w-7xl py-4 px-4 xl:px-0 mx-auto flex items-center justify-between">
                <div className="flex items-center gap-8 lg:gap-16">
                    <img src={isScrolled ? Logo : Logo1} alt="BSD CITY" className="w-16 lg:w-20" />
                    <ul className="flex gap-3 lg:gap-6">
                        {menu.map((item, i) => (
                            <Link
                                key={i}
                                to={item.path}
                                className={`relative text-[10px] lg:text-xs font-medium capitalize transition-all duration-300 ${isScrolled ? "text-typography" : "text-[#fff]"
                                    } after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-full after:h-[2px] after:bg-yellow-500 after:scale-x-0 after:origin-right
                after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-2 lg:gap-4">
                    <div className="relative w-32 lg:w-full">
                        <FaSearch
                            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-lg ${isScrolled ? "text-gray-400" : "text-white"
                                }`}
                        />
                        <input
                            type="text"
                            placeholder="Search..."
                            className={`w-full ${isScrolled ? "bg-white placeholder:text-gray-400" : "bg-transparent placeholder:text-white"} pl-10 pr-4 py-2 text-xs shadow-md border rounded-lg focus:outline-none
                        `} />
                    </div>
                    <button
                        className={`border border-gray-200 text-xs px-2 lg:px-3 py-2 rounded-lg font-medium ${isScrolled ? "text-gray-400 hover:bg-gray-100" : "text-white border-white"
                            }`}
                    >
                        EN
                    </button>
                    <button className="bg-primary transition-all duration-300 hover:bg-red-500 text-white px-4 lg:px-6 py-2 rounded-lg text-xs font-medium">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
