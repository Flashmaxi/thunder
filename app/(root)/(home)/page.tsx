"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Page = () => {
  const [isVisible, setIsVisible] = useState(true);
  const isInteractedRef = useRef(false);

  const resetTimer = () => {
    setIsVisible(false);
    isInteractedRef.current = true;
    setTimeout(() => {
      setIsVisible(true);
      isInteractedRef.current = false;
    }, 5000);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 0.6,
      y: 0,
      transition: {
        delay: 0.3,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
      },
    },
  };

  return (
    <main className='flex-center py-[84px] md:py-[160px] mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <motion.div
          className='flex-center relative md:min-h-[200px] px-4'
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={itemVariants}
        >
          <motion.h1 className='text-4xl md:text-7xl font-bold  mb-8 md:mb-[38px] text-center' variants={itemVariants}>HODL on</motion.h1>
          <motion.div className='text-sm font-medium md:text-2xl  opacity-60 flex flex-center w-full justify-center max-w-md items-center mx-auto mb-8 md:mb-[38px]' variants={textVariants}>
            …brb, learning how to use a typewriter
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-center w-full max-w-md items-center space-x-2 mx-auto px-2"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          exit="hidden"
          variants={inputVariants}
          onClick={resetTimer}
        >
          {isVisible && (
            <motion.div className='w-full md:flex md:justify-between' variants={inputVariants}>
              <Input className='md:w-[333px] h-12 md:h-16 rounded-xl w-full mb-3 md:mb-0 md:me-2' type="email" placeholder="Email" />
              <Button className='md:w-[110px] h-12 md:h-16 bg-[#222222] rounded-xl w-full' type="submit">Sign up</Button>
            </motion.div>
          )}
        </motion.div>

        {isInteractedRef.current && !isVisible && (
          <motion.div>
            <motion.div className="text-lg md:text-2xl font-medium text-gradient text-center flex flex-center justify-center w-7/12 md:w-full md:max-w-lg items-center  mx-auto mb-8 md:mb-[38px]" variants={textVariants}>
              lol, keep your data, I respect your privacy
            </motion.div>

            <motion.div className="text-sm md:text-2xl font-medium opacity-60 text-center flex flex-center justify-center w-full max-w-md items-center mx-auto" variants={textVariants}>
              stay tuned for updates.
            </motion.div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Page;

