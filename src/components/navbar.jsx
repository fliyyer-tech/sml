import { Link, useLocation } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import Logo from '../assets/logo.svg'

const Navbar = () => {
    const menu = [
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'explore',
            path: '/explore'
        },
        {
            name: 'my points',
            path: '/points'
        }
    ]
    const location = useLocation();
    return (
        <nav className='hidden sm:block w-full bg-white border-b-2 border-gray-200'>
            <div className='max-w-7xl py-4 px-4 xl:px-0 mx-auto flex items-center justify-between'>
                <div className='flex items-center gap-10'>
                    <img src={Logo} alt='BSD CITY' className='w-20 lg:w-28' />
                    <ul className='flex gap-4 lg:gap-14'>
                        {menu.map((item, i) => {
                            return (
                                <Link
                                    key={i}
                                    to={item.path}
                                    className={`relative text-typography capitalize transition-all duration-300 
                                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                                    after:w-full after:h-1 after:bg-yellow-500 after:scale-x-0 after:origin-right
                                    after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left`}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex items-center gap-4 bg-white">
                    <div className="relative w-56 lg:w-full">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 shadow-md border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <button className="bg-primary text-white px-3 py-2 rounded-lg font-medium">
                        EN
                    </button>
                    <div className="relative flex items-center gap-4 cursor-pointer">
                        <IoMdNotificationsOutline className="size-8 text-gray-400" />
                        <Link to="/profile" className="size-10">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" className='rounded-full' alt="profile" />
                        </Link>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
