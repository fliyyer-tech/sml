import { MdEventAvailable } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { TbView360Number } from "react-icons/tb";
import CardFeature from './card-feature';
import Smlp from '../assets/smlp.png';

const Feature = () => {
  return (
    <section className="w-full md:hidden md:max-w-7xl mx-auto px-5">
      <div className='grid grid-cols-4 my-7 md:my-10'>
        <CardFeature icons={<MdEventAvailable className='size-6 md:size-12' />} title='Events & Festival' />
        <CardFeature icons={<IoChatbubblesOutline className='size-6 md:size-12' />} title='Chatroom' />
        <CardFeature icons={<TbView360Number className='size-6 md:size-12' />} title='Augmented Reality' />
        <CardFeature icons={<img src={Smlp} alt='smlp' className='w-full px-1 md:px-2' />} title='SML Precious' />
      </div>
    </section>
  )
}

export default Feature
