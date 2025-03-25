import Image from 'next/image';
import girlImage from '../../images/girl22 1.png';
import HalenButton from '../components/HalenButton';
import { Typography } from "./Typography";
export default function Rideshare () {
    return(
        <div className="flex px-8">
            <div className="basis-1 grow justify-center pl-8  flex flex-col items-start">
               <div className='px-16'> <Typography className="items-start text-left" variant="halen-title">Redefining Rideshare and Delivery</Typography>
               <div className=' font-lato text-2xl py-8'>By prioritizing driver well-being and community engagement, Halen empowers local businesses and fosters a more sustainable and equitable ecosystem for all. 
               <br />One Platform - One App, Six Services</div>
               <HalenButton label="Learn More" ></HalenButton></div>
            </div>
            <div className="just-a-border h-full text-center basis-1 grow">
            <Image className=' pt-8' src={girlImage} alt="girl" />
            </div>
        </div>
    )
}