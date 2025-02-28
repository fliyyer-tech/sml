
const CardFeature = (props) => {
  const { icons, title } = props
  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-center items-center shadow-2xl md:shadow-lg rounded-full bg-gradient-to-b from-gray-100 to-gray-200 size-12'>
        {icons}
      </div>
      <span className='text-[10px] font-normal text-typography text-nowrap mt-2'>{title}</span>
    </div>
  )
}

export default CardFeature
