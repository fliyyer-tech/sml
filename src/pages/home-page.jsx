import React from 'react'
import NavbarMobile from '../components/navbar-mobile'
import HeaderBanner from '../components/header-banner'
import Feature from '../components/feature'
import CardStory from '../components/card-story'
import CardExplore from '../components/card-explore'
import BottomNavigation from '../components/bottom-navbar'

export default function Homepage() {
  return (
    <main className='flex flex-col h-screen'>
      <NavbarMobile />
      <section className='px-5'>
        <HeaderBanner />
        <Feature />
        <div className='flex flex-col'>
          <h1 className='font-bold text-typography'>BSD Story</h1>
          <div className="my-3 flex gap-2 overflow-x-scroll scroll-smooth scrollbar-hide">
            <CardStory />
            <CardStory />
            <CardStory />
            <CardStory />
          </div>
        </div>
        <div className='flex flex-col mb-28'>
          <h1 className='font-bold text-typography'>Explore</h1>
          <div className="my-3 gap-2 grid grid-cols-2 md:grid-cols-4">
            <CardExplore />
            <CardExplore />
          </div>
        </div>
      </section>
      <BottomNavigation />
    </main>
  )
}
