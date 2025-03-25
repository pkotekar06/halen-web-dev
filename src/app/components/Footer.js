import Image from 'next/image';
import quote from '../../images/quote.svg';
import { Typography } from "./Typography";
export default function Footer () {
    return(
        <div className="cls-footer w-full h-12 ">
            <div className='flex justify-around py-2'>

            <div>Copyright ©2025. All Rights Reserved by Halen</div>
                <div className='flex justify-between w-96'>
                        <div>
                            Terms and Conditions
                        </div>
                        <div>
                            Privacy Policy
                        </div>
                </div>


            </div>
 
            </div>
    )
}