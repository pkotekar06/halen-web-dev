import Image from 'next/image';
import culture from '../../images/culture.png';
import HalenButton from '../components/HalenButton';
import { Typography } from "./Typography";
export default function Culture () {
    return(
        <>
        <div className='py-8 bg-gray-100'>
            <div className=''>
            <div className='cls-topic-title py-8 text-center'><strong>Our Culture</strong></div>
            <div className="cls-topic-text  text-[1.425rem] pt-4 px-36 text-center">Halen is a company that values people over process. We strive to create a dream team environment where everyone is extraordinary at what they do and collaborates effectively. </div>
            
            <div className=" px-42  py-2 cls-list-items items-center text-center">
    We believe in supporting our team with meaningful benefits, including flexible work options and career development opportunities, to help them succeed both professionally and personally.</div>
        
            </div>
        <div className='justify-center mx-auto flex'>
        <Image src={culture} alt="girl" />
        </div>
        <div className="cls-halen-btn py-8"><HalenButton label="Learn More" /></div>
        </div>
        </>
    )
}