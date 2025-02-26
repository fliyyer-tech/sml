import React from 'react'
import NavbarMobile from '../components/navbar-mobile'
import HeaderBanner from '../components/header-banner'
import Feature from '../components/feature'
import CardStory from '../components/card-story'
import CardExplore from '../components/card-explore'
import BottomNavigation from '../components/bottom-navbar'
import Story from '../assets/story-1.png'
import Story2 from '../assets/story-2.png'
import Story3 from '../assets/story-3.png'
import Story4 from '../assets/story-4.png'
import Explore from "../assets/explore-1.png";
import Explore2 from "../assets/explore-2.png";
import Logo from '../assets/logo.svg'

import Navbar from '../components/navbar'
import CustomerService from '../components/customer-service'
import Promos from '../components/promos'
import GetTrafic from '../components/get-trafic'

export default function Homepage() {
  return (
    <main className='flex flex-col h-screen'>
      <NavbarMobile />
      <Navbar />
      <CustomerService />
      <section className='xl:px-0'>
        <HeaderBanner />
        <Feature />
        <div className='w-full px-5 xl:px-0 md:max-w-7xl mx-auto flex flex-col'>
          <h1 className='font-bold text-typography md:text-2xl'>BSD Story</h1>
          <div className="my-3 flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 overflow-x-scroll md:overflow-hidden scroll-smooth scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            <CardStory image={Story} title='Story 1' />
            <CardStory image={Story2} title='Story 2' />
            <CardStory image={Story3} title='Story 3' />
            <CardStory image={Story4} title='Story 4' />
          </div>
        </div>
        <div className='w-full px-5 xl:px-0 md:max-w-7xl mx-auto flex flex-col mb-5 md:my-5'>
          <h1 className='font-bold text-typography md:text-2xl'>Explore</h1>
          <div className="my-3 flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 overflow-x-scroll md:overflow-hidden scroll-smooth scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            <CardExplore image={Explore} title='Explore 1' />
            <CardExplore image={Explore2} title='Explore 2' />
            <CardExplore image={Explore} title='Explore 3' />
            <CardExplore image={Explore2} title='Explore 4' />
          </div>
        </div>
        <Promos />
        <GetTrafic />
      </section>
      <BottomNavigation />
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


    </main>
  )
}
