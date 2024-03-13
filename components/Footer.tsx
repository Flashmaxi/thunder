"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


const Footer = () => {
    const navItems = [
      { id: 1, text: 'Who dis?', href: "#about" },
      { id: 2, text: 'Books', href: "#books" },
      // { id: 3, text: 'Blog', href: "#blog" },
      { id: 4, text: 'Contact', href: "#contact" },
  ];

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

  return (
    <footer className='w-full mt-24 bg-[#212121]  rounded-t-2xl'>
      <div className='flex flex-col lg:flex-row justify-between items-center h-24 max-w-[1600px] mx-auto px-4 text-white w-full'>
        <p className="text-[#ffffff80] text-[10px] order-2 lg:order-1 py-[10px] lg:py-0">© 2024 Thunder</p>

        <ul className="flex justify-between sm:w-[300px] mt-[20px] lg:mt-0 mb-[10px] lg:mb-0 text-2xl order-1 lg:order-3">
        {navItems.map(item => (
            <a key={item.id} href={item.href}>
              <li
                key={item.id}
                className='text-[12px] px-3 font-semibold hover:bg-[#fa8cda1a] rounded-xl cursor-pointer duration-300 hover:text-[#FA8CDA]'
              >
                {item.text}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
