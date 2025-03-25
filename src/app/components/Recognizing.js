import Image from 'next/image';
import quote from '../../images/quote.svg';
import { Typography } from "./Typography";
export default function Recognize () {
    return(
        <div className="flex flex-row justify-left py-16 px-48 w-full bg-gray-100 ">
            <Image className="mb-16" src={quote} alt="girl" />
            <span>        <div className=" font-lato px-2 text-2xl justify-items-start text-left italic">
            Recognizing that our Employees, Franchisee and Affiliate Drivers are the backbone of our business is the key to our industry’s evolution.<br /><br />
        </div>
        <Typography className="float-right "variant="small"><strong>-Edward Mbeche<br /> Founder & CEO</strong> </Typography></span>
        </div>
    )
}