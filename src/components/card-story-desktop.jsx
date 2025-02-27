import Story from '../assets/story-1.png';

const CardStoryDesktop = (props) => {
  const { title, image } = props;
  return (
    <div className='relative min-w-[120px] cursor-pointer rounded-3xl h-[160px] md:h-96 overflow-hidden group shadow-lg transition-transform duration-300 hover:scale-105'>
      <img
        src={image ? image : Story}
        className='absolute inset-0 rounded-3xl w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110'
        alt={title}
      />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/70 to-transparent transition-opacity duration-500 group-hover:opacity-0 flex items-center justify-center">
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-500 group-hover:opacity-0 flex items-center justify-center">
      </div>
    </div>
  );
};

export default CardStoryDesktop;
