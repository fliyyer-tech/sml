import Story from '../assets/story-1.png'

const CardStory = () => {
  return (
    <div className='relative min-w-[120px] rounded-3xl h-[160px] overflow-hidden'>
      <img src={Story} className='absolute inset-0 rounded-3xl w-full h-full object-cover transition-transform duration-500 transform hover:scale-125' alt="Story Instagram" />
    </div>
  )
}

export default CardStory
