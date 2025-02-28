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
import CustomerService from '../components/customer-service'
import Promos from '../components/promos'
import GetTrafic from '../components/get-trafic'

export default function Homepage() {
  return (
    <main className='flex max-w-[432px] md:border md:border-gray-200 mx-auto flex-col relative'>
      <NavbarMobile />
      <CustomerService />
      <section className=''>
        <HeaderBanner />
        <Feature />
        <div className='w-full px-5 mx-auto flex flex-col'>
          <h1 className='font-bold text-typography'>BSD Story</h1>
          <div className="my-3 flex gap-2 overflow-x-scroll scroll-smooth scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            <CardStory image={Story} title='Story 1' />
            <CardStory image={Story2} title='Story 2' />
            <CardStory image={Story3} title='Story 3' />
            <CardStory image={Story4} title='Story 4' />
          </div>
        </div>
        <div className='w-full px-5 mx-auto flex flex-col'>
          <h1 className='font-bold text-typography'>Explore</h1>
          <div className="my-3 grid grid-cols-2 gap-2 ">
            <CardExplore image={Explore} title='Explore 1' />
            <CardExplore image={Explore2} title='Explore 2' />
          </div>
        </div>
        <Promos />
        <GetTrafic />
      </section>
      <BottomNavigation />
    </main>
  )
}
