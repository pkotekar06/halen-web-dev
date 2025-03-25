import Image from 'next/image';
import customer1 from '../../images/customer1.png';
import merchant from '../../images/merchant.png';
import driver from '../../images/driver.png';
import { Typography } from './Typography';
import HalenButton from '../components/HalenButton';
export default function WhyChooseHalen () {

    const audiences = [
        {
            title: 'Consumers', 
            subTitle: 'Get More Done with Halen', 
            description:'Say goodbye to app juggling. Halen brings all your essential services together in one place—seamless, affordable, and socially responsible.',
            listItems: ['Rides & Rentals: Book a ride or rent a car anytime.',
                        'Quick Deliveries: Get groceries, food, and retail items fast.',
                        'Travel Savings: Find great deals on flights and lodging.',
                        'Last-Mile Delivery: Send and receive packages with ease.'
            ]
        },
        {
            title: 'Drivers', 
            subTitle: 'Earn what you deserve.', 
            description:'Tired of rideshare gigs that don’t pay what you deserve? Halen is here to change the game with better earnings for drivers.',
            listItems: ['Keep 100% of Fares – Halen takes ZERO commission.',
                        'Optimized Routes – Less wait time, more earnings.',
                        'Multiple Revenue Streams – More ways to earn.',
                        '24/7 Local Support – Help when you need it.',
                        'Rating Protections – Fair and transparent.'
            ]
        },
        {
            title: 'Merchants', 
            subTitle: 'Fed-up with delivery service commissions making it nearly impossible to profit from delivery orders? .', 
            description:'Halen puts the control (and profits) back in your hands',
            listItems: ['Low transaction fees will not eat into your profits.',
                        'One platform to manage your delivery orders.',
                        'Multiple Revenue Streams – More ways to earn.',
                        '24/7 Local Support – Help when you need it.',
                        'Rating Protections – Fair and transparent.'
            ]
        },
    ]
    return(
        <div className='w-full pt-8'>
            <div className='cls-topic-title  py-8 text-center'><strong>Why Choose Halen?</strong></div>
            <div className="cls-topic-text  text-[1.425rem] p-4 px-36 text-center">Our approach at Halen® combines proven business models into a single app. This lets us reach a wide audience, build customer loyalty, and create multiple revenue streams. By doing this, we can create a fair and sustainable system that benefits both drivers and customers.</div>
            <div className="flex">
            <div className="just-a-border h-full text-center basis-1 grow">
            <Image className=' pt-8' src={customer1} alt="girl" />
            </div>
            <div className="basis-1 grow l-8  flex flex-col justify-center items-start px-48">
                <Typography className="cls-heading py-8" variant="h5">Consumers</Typography>
               <Typography className="cls-sub-heading pb-2" variant="body-small"><strong>Get More Done with Halen</strong> <br /></Typography>
               <span className="cls-topic-text-span">Say goodbye to app juggling. Halen brings all your essential services together in one place—seamless, affordable, and socially responsible.</span>
               
               <ul className='list-disc px-8 py-8 '>
                <li >Rides & Rentals: Book a ride or rent a car anytime.</li>
                <li>Quick Deliveries: Get groceries, food, and retail items fast.</li>
                <li>Travel Savings: Find great deals on flights and lodging.</li>
                <li>Last-Mile Delivery: Send and receive packages with ease.</li></ul>
                <div className="cls-halen-btn py-16"><HalenButton label="Learn More" /></div>
            </div>
            
            
        </div>
        <div className="flex px-8 bg-gray-100">
            <div className="basis-1 grow l-8  flex flex-col justify-center items-start px-48">
                <Typography className="cls-heading py-8" variant="h5">Drivers</Typography>
               <Typography className="cls-sub-heading pb-2" variant="body-small"><strong>Earn what you deserve.</strong> <br /></Typography>
               <span className="cls-topic-text-span">Tired of rideshare gigs that don’t pay what you deserve? Halen is here to change the game with better earnings for drivers.</span>
               
               <ul className='list-disc px-8 py-8 '>
                <li><span>Keep 100% of Fares – Halen takes ZERO commission.</span></li>
                <li>Optimized Routes – Less wait time, more earnings.</li>
                <li>Multiple Revenue Streams – More ways to earn.</li>
                <li>24/7 Local Support – Help when you need it.</li>
                <li>Rating Protections – Fair and transparent.</li>
                </ul>
                <div className="cls-halen-btn py-16"><HalenButton label="Learn More" /></div>
            
            </div>
            <div className="just-a-border h-full text-center basis-1 grow">
            <Image className=' pt-8' src={driver} alt="girl" />
            </div>
            
        </div>
        <div className="flex">
            <div className="just-a-border h-full text-center basis-1 grow">
            <Image className=' pt-8' src={merchant} alt="girl" />
            </div>
            <div className="basis-1 grow l-8  flex flex-col justify-center items-start">
            <Typography className="cls-heading py-8" variant="h5">Merchants</Typography>
               <Typography className="cls-sub-heading pb-2" variant="body-small"><strong>Fed-up with delivery service commissions making it nearly impossible to profit from delivery orders? 
               .</strong> <br /></Typography>
               <span className="cls-topic-text-span">Halen puts the control (and profits) back in your hands</span>
               <ul className='list-disc px-8 py-8 '>
                <li>Low transaction fees will not eat into your profits.</li>
                <li>One platform to manage your delivery orders.</li>
                <li>Engage with drivers who provide top performance to your customers.</li>
                </ul>
                <div className="cls-halen-btn py-4"><HalenButton label="Learn More" /></div>
            </div>
            
        </div>

          </div>
    )
}