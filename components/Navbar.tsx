"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
   // State to manage the navbar's visibility
   const [nav, setNav] = useState(false);

   // Toggle function to handle the navbar's display
   const handleNav = () => {
     setNav(!nav);
   };

   const closeNav = () => {
    setNav(false); 
   }

   const linkVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5, // Adjust the delay time
      },
    },
  };

  const navItems = [
    { id: 1, text: 'Who dis?', href: "#about" },
    { id: 2, text: 'Books', href: "#books" },
    // { id: 3, text: 'Blog', href: "#blog" },
    { id: 4, text: 'Contact', href: "#contact" },
  ];

  return (
    <header className='bg-[#212121]  rounded-b-2xl' id="home">
      <div className='flex justify-between items-center h-24 max-w-[1600px] mx-auto px-4 text-white w-full'>
        {/* Logo */}
        <Link href="/">
            <Image className='mx-auto' src="/thunder_p.svg" alt='logo' width={95} height={76}/>
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <a key={item.id} href={item.href}>
              <li
                key={item.id}
                className='p-4 font-semibold hover:bg-[#fa8cda1a] rounded-xl m-2 cursor-pointer duration-300 hover:text-[#FA8CDA]'
              >
                {item.text}
              </li>
            </a>
          ))}
        </ul>
        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
          {nav ? <BiX size={30} /> : <BiMenuAltRight size={30} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? 'fixed md:hidden left-0 top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-500'
              : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          {/* Mobile Logo */}
          <div className='mb-[30px] py-4'>
            <Link href="/">
              <Image className='ml-[30px]' src="/thunder_p.png" alt='logo' width={95} height={76}/>
            </Link>
        </div>

          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <a key={item.id} href={item.href}>
              <li
                key={item.id}
                className='py-[10px] text-[22px] font-semibold ps-[40px] hover:bg-[#fa8cda1a] duration-300 hover:text-[#FA8CDA] cursor-pointer'
                onClick={closeNav}
              >
                {item.text}
              </li>
            </a>
          ))}
          
        <ul className="ml-[40px] py-8 flex flex-start justify-start flex-row items-center content-start">
          <li className='mr-[15px]'>
            <Link href="https://snort.social/npub1dhvlm7aumyhy60mlv3lemk4newny4uwkdc9ahcskk4lvatytq4vq60lcq6" target="_blank">
              <Image src='/nostr.svg' alt='nostr thunder' width={36} height={36} />
            </Link>
          </li>

          <li className='mr-[15px]'>
            <Link href="https://www.linkedin.com/in/sladjanamaticrizvic/" target="_blank">
              <Image src='/linkedin.svg' alt='thunder linkedin' width={36} height={36} />
            </Link>
          </li>

          <li className=''>
            <Link href="https://twitter.com/ThunderSvadjica" target="_blank">
              <Image src="/twitter.svg" alt='thunder twitter' width={36} height={36} />
            </Link>
          </li>
        </ul>
        </ul>
      </div>
    </header>
  );
};


export default Navbar