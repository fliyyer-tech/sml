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
import Navbar from '../components/navbar'
import CustomerService from '../components/customer-service'
import Promos from '../components/promos'
import GetTrafic from '../components/get-trafic'
import Footer from '../components/footer'
import HeaderDesktop from '../components/header-desktop'
import FeatureDesktop from '../components/feature-desktop'
import StoryLayout from '../content/story'
import ExploreLayout from '../content/explore'
import Traffic from '../content/trafic'

export default function Homepage() {
  return (
    <main className='flex flex-col h-screen'>
      <NavbarMobile />
      <Navbar />
      <CustomerService />
      <section className='xl:px-0'>
        <HeaderBanner />
        <HeaderDesktop />
        <Feature />
        <FeatureDesktop />
        <div className='w-full md:hidden px-5 xl:px-0 md:max-w-7xl mx-auto flex flex-col'>
          <h1 className='font-bold text-typography md:text-2xl'>BSD Story</h1>
          <div className="my-3 flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 overflow-x-scroll md:overflow-hidden scroll-smooth scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            <CardStory image={Story} title='Story 1' />
            <CardStory image={Story2} title='Story 2' />
            <CardStory image={Story3} title='Story 3' />
            <CardStory image={Story4} title='Story 4' />
          </div>
        </div>
        <StoryLayout />
        <div className='w-full md:hidden px-5 xl:px-0 md:max-w-7xl mx-auto flex flex-col mb-5 md:my-5'>
          <h1 className='font-bold text-typography md:text-2xl'>Explore</h1>
          <div className="my-3 flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 overflow-x-scroll md:overflow-hidden scroll-smooth scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            <CardExplore image={Explore} title='Explore 1' />
            <CardExplore image={Explore2} title='Explore 2' />
            <CardExplore image={Explore} title='Explore 3' />
            <CardExplore image={Explore2} title='Explore 4' />
          </div>
        </div>
        <ExploreLayout />
        <Promos />
        <GetTrafic />
        <Traffic />
      </section>
      <BottomNavigation />
      <Footer />
    </main>
  )
}
