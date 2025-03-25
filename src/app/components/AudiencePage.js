"use server"
import Image from 'next/image';
import { Typography } from './Typography';

import consumer from '../../images/customer1.png';
import merchant from '../../images/merchant.png';
import driver from '../../images/driver.png';

const AudiencePage = (props) => {
    console.log(props)
    return (
      
        <>
        
            {
            
            props.isFlipped ?
             <div className='w-full pt-8'>
            <div className="flex">
             <div className="just-a-border h-full text-center basis-1 grow">
             <Image className=' pt-8' src={props.imageName} alt={props.title} />
             </div>
             <div className="basis-1 grow l-8  flex flex-col justify-center items-start px-48">
                 <Typography className="cls-heading py-8" variant="h5">{props.title}</Typography>
                <Typography className="cls-sub-heading pb-2" variant="body-small"><strong>{props.subTitle}</strong> <br /></Typography>
                <span className="cls-topic-text-span">{props.description}</span>
                
                <ul className='list-disc px-8 py-8 '>
                 <li >Rides & Rentals: Book a ride or rent a car anytime.</li>
                 <li>Quick Deliveries: Get groceries, food, and retail items fast.</li>
                 <li>Travel Savings: Find great deals on flights and lodging.</li>
                 <li>Last-Mile Delivery: Send and receive packages with ease.</li></ul>
             </div>
             </div>
         </div>
           : <div className="flex px-8 bg-gray-100">
            <div className="basis-1 grow l-8  flex flex-col justify-center items-start px-48">
                    <Typography className="cls-heading py-8" variant="h5">{props.title}</Typography>
                  <Typography className="cls-sub-heading pb-2" variant="body-small"><strong>{props.subTitle}</strong> <br /></Typography>
                  <span className="cls-topic-text-span">{props.description}</span>
                  <ul className='list-disc px-8 py-8 '>
                    {
                    props.listItems.map((item, index) =>
                            {
                                <li key={index}>{item}</li>
                            })
                    }
                  </ul>
                </div>
                <div className="just-a-border h-full text-center basis-1 grow">
              <Image src={props.imageName}  alt={props.title}/>
                </div>
                
              </div>}
          </>
    );
  };
  
  export default AudiencePage;
  