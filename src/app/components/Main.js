
import React from 'react';
import RidesharePage from './RidesharePage';
import AboutPage from './AboutPage';
import WhyChooseHalenPage from './WhyChooseHalenPage';
import OurCulture from './culture';
import Partneship from './Partnership';
import Recognizing from './Recognizing';
import Footer from './Footer';
import FooterMenu from './FooterMenuPage';

export default function Main() {
    return(
        <div className='flex flex-wrap overflow-auto h-screen'>
         <RidesharePage className="w-full h-96 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"/>
         <AboutPage className="bg-gray-100 w-full  h-96 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"/>
         <WhyChooseHalenPage className="w-full  h-96 py-8 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"/>
         <OurCulture className="w-full  h-96 py-8 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"/>
         <Partneship className="w-full  h-96 py-8 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"/>
         <Recognizing className="w-full  h-96 py-8 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"/>
         <FooterMenu />
         <Footer />
        </div>
 
    )
}