import Story from '../assets/story-1.png'

const CardStory = (props) => {
  const { title, image } = props
  return (
    <div className='relative min-w-[120px] cursor-pointer rounded-3xl h-[160px]  overflow-hidden group'>
      <img
        src={image ? image : Story}
        className='absolute inset-0 rounded-3xl w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110'
        alt={title}
      />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-typography/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
    </div>
  )
}

export default CardStory
