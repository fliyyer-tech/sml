import Logo from '../assets/logo.svg'


function Footer() {
  return (
    <footer className="bg-white hidden md:block rounded-lg shadow-sm m-4">
      <div className="w-full max-w-screen-xl mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="Flowbite Logo" />
          </a>
          <ul className="flex gap-8 flex-wrap items-center mb-6 text-sm font-medium text-typography sm:mb-0">
            <li>
              <a href="#" className={`relative text-typography capitalize transition-all duration-300 
                                after:content-[''] after:absolute after:left-0 after:bottom-0 
                                after:w-full after:h-1 after:bg-yellow-500 after:scale-x-0 after:origin-right
                                after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left`}>Home</a>
            </li>
            <li>
              <a href="#" className={`relative text-typography capitalize transition-all duration-300 
                                after:content-[''] after:absolute after:left-0 after:bottom-0 
                                after:w-full after:h-1 after:bg-yellow-500 after:scale-x-0 after:origin-right
                                after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left`}>Explore</a>
            </li>
            <li>
              <a href="#" className={`relative text-typography capitalize transition-all duration-300 
                                after:content-[''] after:absolute after:left-0 after:bottom-0 
                                after:w-full after:h-1 after:bg-yellow-500 after:scale-x-0 after:origin-right
                                after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left`}>My Points</a>
            </li>
            <li>
              <a href="#" className={`relative text-typography capitalize transition-all duration-300 
                                after:content-[''] after:absolute after:left-0 after:bottom-0 
                                after:w-full after:h-1 after:bg-yellow-500 after:scale-x-0 after:origin-right
                                after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left`}>Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-typography sm:text-center">© 2025 Tested. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
