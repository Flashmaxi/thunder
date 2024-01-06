"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Page = () => {
  const [isVisible, setIsVisible] = useState(true);
  const isInteractedRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const handleInteractionStart = () => {
    isInteractedRef.current = true;
    setIsVisible(false);
    resetTimer();
  };

  const handleInteractionEnd = () => {
    isInteractedRef.current = false;
    setIsVisible(true);
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      setIsVisible(true);
    }, 5000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2, // Adjust the delay time
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3, // Adjust the delay time
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4, // Adjust the delay time
      },
    },
  };

  return (
    <main className='flex-center py-[100px] md:py-[160px] mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <motion.div
          className='flex-center relative min-h-[150px] md:min-h-[200px] px-4'
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={itemVariants}
        >
          <motion.h1 className='text-4xl md:text-7xl font-bold mb-[38px] text-center' variants={itemVariants}>HODL on</motion.h1>
          <motion.div className='text-sm font-medium md:text-2xl  opacity-60 flex flex-center w-full justify-center max-w-md items-center mx-auto mb-[38px]' variants={textVariants}>
            …brb, learning how to use a typewriter
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-center w-full max-w-sm items-center space-x-2 mx-auto hover-container px-2"
          onMouseEnter={handleInteractionStart}
          onMouseLeave={handleInteractionEnd}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          exit="hidden"
          variants={inputVariants}
        >
          {isVisible && (
            <motion.div className='w-full md:flex md:justify-between' variants={inputVariants}>
              <Input className='h-12 md:h-16 rounded-xl w-full mb-3 md:mb-0 md:me-2' type="email" placeholder="Email" />
              <Button className='h-12 md:h-16 bg-[#222222] rounded-xl w-full md:w-fit' type="submit">Sign up</Button>
            </motion.div>
          )}
        </motion.div>

        {isInteractedRef.current && !isVisible && (
          <motion.div className="text-sm md:text-2xl font-medium opacity-60 text-center flex flex-center justify-center w-full max-w-md items-center mx-auto" variants={itemVariants}>
            Lol, keep your data, I respect your privacy,
            stay tuned for updates.
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Page;
