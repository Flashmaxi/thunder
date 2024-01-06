"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

  return (
    <main className='flex-center py-[100px] md:py-[160px] mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[150px] md:min-h-[200px] px-4'>
          <h1 className='text-4xl md:text-7xl font-bold mb-[38px] text-center'>HODL on</h1>
          <div className='text-sm font-medium md:text-2xl  opacity-60 flex flex-center w-full justify-center max-w-md items-center mx-auto mb-[38px]'>
            …brb, learning how to use a typewriter
          </div>

          <div
            className="flex flex-center w-full max-w-sm items-center space-x-2 mx-auto hover-container"
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
          >
            {isVisible && (
              <div className='w-full md:flex md:justify-between'>
                <Input className='h-12 md:h-16 rounded-xl w-full mb-3 md:mb-0 md:me-2' type="email" placeholder="Email" />
                <Button className='h-12 md:h-16 bg-[#222222] rounded-xl w-full md:w-fit' type="submit">Sign up</Button>
              </div>
            )}
          </div>

          {isInteractedRef.current && !isVisible && (
            <div className="text-sm md:text-2xl font-medium opacity-60 text-center flex flex-center justify-center w-full max-w-md items-center mx-auto">
              Lol, keep your data, I respect your privacy,
              stay tuned for updates.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;

