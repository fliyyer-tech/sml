import React from 'react'
import Story1 from '../assets/story-1.png'
import Story2 from '../assets/story-2.png'
import Story3 from '../assets/story-3.png'
import Story4 from '../assets/story-4.png'
import CardStoryDesktop from '../components/card-story-desktop'

const StoryLayout = () => {
  return (
    <div className='w-full hidden md:flex px-5 xl:px-0 md:max-w-7xl mx-auto flex-col'>
      <h1 className='font-bold text-typography md:text-2xl'>BSD Story</h1>
      <div className="my-3 flex md:grid py-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 overflow-x-scroll md:overflow-hidden scroll-smooth scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        <CardStoryDesktop image={Story1} title='Story 1' />
        <CardStoryDesktop image={Story2} title='Story 2' />
        <CardStoryDesktop image={Story3} title='Story 3' />
        <CardStoryDesktop image={Story4} title='Story 4' />
      </div>
    </div>
  )
}

export default StoryLayout
