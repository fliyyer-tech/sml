import { MdEventAvailable } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { TbView360Number } from "react-icons/tb";
import Smlp from '../assets/smlp.png';
import CardFeature1 from "./card-feature1";

const FeatureDesktop = () => {
  return (
    <section className="w-full hidden md:block md:max-w-4xl mx-auto px-5">
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold mb-4">Discover the Heartbeat of City</h1>
        <p className="text-lg text-gray-700">
          Step into a vibrant world where culture meets innovation. Explore iconic landmarks, engage in dynamic events, and connect with the community in ways you've never imagined.
        </p>
      </div>

      <div className='grid grid-cols-4 my-7 md:my-10'>
        <CardFeature1 icons={<MdEventAvailable className='size-6 md:size-12' />} title='Events & Festival' />
        <CardFeature1 icons={<IoChatbubblesOutline className='size-6 md:size-12' />} title='Chatroom' />
        <CardFeature1 icons={<TbView360Number className='size-6 md:size-12' />} title='Augmented Reality' />
        <CardFeature1 icons={<img src={Smlp} alt='smlp' className='w-full px-1 md:px-2' />} title='SML Precious' />
      </div>
    </section>
  )
}

export default FeatureDesktop;
