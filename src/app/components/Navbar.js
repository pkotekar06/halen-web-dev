"use client";
import Image from 'next/image';
import Link from 'next/link'
import logo from '../../images/logo.png';
import React from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import AboutPage from './AboutPage';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = React.useState(false)
    const handleNav = () => {
        setMenuOpen(!menuOpen)
    } 
    return(
        <div>
            <nav className="navbar fixed w-full h-24 shadow-x">
               <div className='flex justify-between items-center h-full w-full px-6 2xl:px-16'>

               <Link className="logo" href="/">
                    <Image src={logo} alt="gfg_logo"/>
                </Link>

                <div className='hidden sm:flex'>
                    <ul className='hidden sm:flex'>
                        <Link href="#about">
                            <li className='ml-10 uppercase hover:border-b  text-sm'>ABOUT</li>
                        </Link>
                        <Link href="/whychooseus">
                            <li className='ml-10 uppercase hover:border-b text-sm'>WHY CHOOSE HALEN</li>
                        </Link>
                        <Link href="/partnership">
                            <li className='ml-10 uppercase hover:border-b text-sm'>PARTNERSHIP</li>
                        </Link>
                        <Link href="/culture">
                            <li className='ml-10 uppercase hover:border-b text-sm'>OUR CULTURE</li>
                        </Link>
                    </ul>
                </div>

                    
               </div>
             <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
                <AiOutlineMenu size={25}></AiOutlineMenu> 
            </div>

            <div className={ menuOpen 
                ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[gray] p-10 ease-in: duration-500"
                : "fixed left-[-100%] top-0 ease-in duration-500"
            }>
                <div className="flex w-full items-center justify-end color:white">
                <div onClick={handleNav} className='cursor-pointer'>
                    <AiOutlineClose size={25}></AiOutlineClose>
                </div>
            </div>
            <div className='flex-col py-4'></div>
                <ul className=' sm:flex'>
                    <Link href="/">
                        <li onClick={() => setMenuOpen(false)}
                        className='py-4 text-sm cursor-pointer'>HOME</li>
                    </Link>
                    <Link href="/about">
                        <li onClick={() => setMenuOpen(false)}
                        className='py-4 text-sm cursor-pointer'>ABOUT</li>
                    </Link>
                    <Link href="/whychooseus">
                        <li onClick={() => setMenuOpen(false)}
                        className='py-4 text-sm cursor-pointer'>WHY CHOOSE HALEN</li>
                    </Link>
                    <Link href="/culture">
                        <li onClick={() => setMenuOpen(false)}
                        className='py-4 text-smcursor-pointer'>OUR CULTURE</li>
                    </Link>
                </ul>
            </div>

            
        </nav>

        {/* <section id="about">
            <AboutPage />
      </section>

      <section id="section2">
        <h2>Section 2</h2>
        <p>Content for section 2...</p>
      </section> */}
      </div>
    )
}