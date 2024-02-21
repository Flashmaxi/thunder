"use client"

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import Link from "next/link";

export default function BackToTopBtn() {
    const [isActive, setIsActive ] = useState(false);
    useEffect(() => {
        const handleScroll = ()=> {
            if(window.scrollY > 400) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        //clean up ev listener
        return ()=> {
            window.removeEventListener('scroll', handleScroll);
        };
    });
  return (
    <Link href="#home" className={`${ !isActive && 'hidden'} fixed bg-[#212121] w-12 h-12 right-2 lg:right-5 bottom-28 z-10 flex justify-center items-center cursor-pointer text-[#FA8CDA] border-2 border-[#FA8CDA] rounded-full`}>
        <FaArrowUp className="text-xl"/>
    </Link>
  )
}
