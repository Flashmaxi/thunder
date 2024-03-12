"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Iframe from 'react-iframe'
import Image from 'next/image';
import Link from 'next/link';



const Page = () => {
  const [isVisible, setIsVisible] = useState(true);
  const isInteractedRef = useRef(false);

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
  <main className='mb-auto'>
    <section className='h-full xl:h-[100vh] py-[40px] lg:py-[60px]'>
      <div className='container mx-auto h-full xl:pt-10'>
        <div className='flex flex-col lg:flex-row h-full max-w-[1440px] justify-center items-center xl:justify-start'>
          <div className='text-center xl:text-left mt-16 lg:mt-0 xl:max-w-[700px]  order-2 lg:order-1'>
            <h1 className='text-[28px] lg:text-[50px] w-full font-extrabold mb-[16px] lg:mb-[25px] leading-normal'>
            Unlock Your Bitcoin Career Journey: <span className='text-[#FA8CDA]'>Transitioning from <br></br>Fiat to Bitcoin Employment</span>
            </h1>

            <div className='text-[24px] lg:text-[28px] leading-9 mb-[16px] lg:mb-[44px]'>
              Empowering Job Seekers and Companies in the Bitcoin Job Market
            </div>

            <a href="#books">
              <button className="bg-[#FA8CDA] hover:bg-[#FA8CDA] text-white font-bold py-[16px] px-4 rounded w-full md:max-w-[267px]">
                Download books
              </button>
            </a>

          </div>

          <div className='w-full max-h-[70vh] md:max-w-[70vh] xl:max-w-[700px] xl:max-h-[700px] order-1 lg:order-2'>
          <Image src="/books.png" width={700} height={700} alt='circle'/>
          </div>
        </div>
      </div>
    </section>

    <section className='h-full xl:h-[100vh] py-[40px] lg:py-[60px]' id="about">
      <div className='container mx-auto h-full xl:pt-10'>
        <div className='flex flex-col lg:flex-row h-full max-w-[1440px] justify-center items-center xl:justify-start'>
          <div className='w-full max-h-[50vh] md:max-w-[70vh] xl:max-w-[500px] xl:max-h-[542px] order-1 text-center justify-center items-center flex'>
            <Image className='rounded-2xl' src="/thunder-about.png" width={300} height={300} alt='thunder about me'/>
          </div>

          <div className='text-center xl:text-left mt-16 lg:mt-0 xl:max-w-[700px] lg:ml-[160px] order-2'>
            <h1 className='text-[28px] lg:text-[50px] w-full font-extrabold mb-[16px] lg:mb-[25px] leading-normal'>
            Who <span className='text-[#FA8CDA]'>dis?</span>
            </h1>

            <div className='text-[16px] lg:text-[20px] leading-normal mb-4'>
            Welcome to my corner of the Internet! I'm Thunder, a Bitcoiner deeply invested in the world of Bitcoin startups and recruitment. With years of experience in both realms, I understand the challenges companies encounter when seeking top talent, as well as the hurdles job seekers face when navigating the competitive landscape of the Bitcoin industry.
</div>
<div className='text-[16px] lg:text-[20px] leading-normal mb-4'>My mission is simple: to bridge the gap between employers and job seekers in the Bitcoin ecosystem. I believe in creating a common ground where both parties can thrive, fostering meaningful connections that drive innovation and growth.

</div> <div className='text-[16px] lg:text-[20px] leading-normal'>Whether you're a forward-thinking company seeking to build your dream team or an ambitious individual eager to carve out a career path in Bitcoin, I hope I can support you every step of the way.
            </div>
            <Image className='ml-auto' src="/thunder_p.svg" alt='logo' width={95} height={76}/> 
          </div>
        </div>
      </div>
    </section>

    <section className='h-full xl:h-[100vh] py-[40px] lg:py-[60px]' id="books">
      <div className='container mx-auto h-full xl:pt-10'>
        <div className='flex flex-col lg:flex-row h-full max-w-[1440px] justify-center items-center xl:justify-start'>
          <div 
           className='w-full h-full md:max-w-[70vh] xl:max-w-[600px] xl:max-h-[542px] lg:mr-[160px] order-1 mb-[60px] lg:mb-0'>
            <Image className='mx-auto mb-[20px] shadow-[0_10px_20px_rgba(250,_140,_218,_0.7)]' src="/book1.png" width={250} height={250} alt='circle'/>
            <h1 className='text-[28px] lg:text-[50px] text-center w-full font-extrabold mb-[16px] lg:mb-[25px] leading-normal'>
              Kiss your <span className='text-[#FA8CDA]'>fiat job</span> goodbye
            </h1>

            <div className='text-[16px] lg:text-[18px] leading-normal mb-[20px]'>
            Kiss Your Fiat Job Goodbye is a free guidebook for Bitcoiners looking to pivot into the Bitcoin industry. We will talk about rumors, voluntary work, community, and everything you should know when hunting for your first Bitcoin-only job.  
            </div>
            <a href="/Kiss your fiat job goodbye.pdf" download="kiss your fiat job goodbye">
              <button className="bg-[#FA8CDA] hover:bg-[#FA8CDA] text-white font-bold py-[16px] px-4 rounded w-full md:max-w-[267px] flex justify-center items-center mx-auto">
                Download
              </button>
            </a>
          </div>

          <div className='w-full h-full md:max-w-[70vh] xl:max-w-[600px] xl:max-h-[542px] order-2'>
            <Image className='mx-auto mb-[20px] shadow-[0_10px_20px_rgba(250,_140,_218,_0.7)]' src="/book2.png" width={250} height={250} alt='circle'/>
            <h1 className='text-[24px] lg:text-[50px] w-full text-center font-bold mb-[16px] lg:mb-[25px] leading-normal'>
             Kiss your <span className='text-[#FA8CDA]'>bad hiring</span> goodbye
            </h1> 

            <div className='text-[16px] lg:text-[18px] leading-normal mb-[20px]'>
              Kiss Your Bad Hiring Goodbye is a free guidebook for all Bitcoin start-ups, looking to improve, or create their hiring processes from the ground up. This ebook can be used as a foundation to build a tailored hiring process for your organization.
            </div>

            <a href="/Kiss your bad hiring goodbye.pdf" download="kiss your bad hiring goodbye">
              <button className="bg-[#FA8CDA] hover:bg-[#FA8CDA] text-white font-bold py-[16px] px-4 rounded w-full md:max-w-[267px] flex justify-center items-center mx-auto">
                Download
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className='h-full xl:h-[100vh]' id="contact">
      <div className='container mx-auto h-full xl:pt-10'>
        <div className='flex flex-col lg:flex-row h-full max-w-[1440px] justify-center items-center xl:justify-start'>
          <div className='w-full max-h-[50vh] xl:max-h-[542px]'>
            <h3 className='justify-center text-center text-[28px] lg:text-[50px] w-full font-normal mb-[16px] lg:mb-[44px] flex leading-normal mx-auto'>
              Reach me here
            </h3>

            <ul className="mx-auto flex flex-center justify-center flex-row items-center content-center mb-[32px]">
              <motion.li className='mx-3' variants={linkVariants} initial="hidden" animate="visible">
                <Link href="https://snort.social/npub1dhvlm7aumyhy60mlv3lemk4newny4uwkdc9ahcskk4lvatytq4vq60lcq6" target="_blank">
                  <Image src='/nostr.svg' alt='nostr thunder' width={48} height={48} />
                </Link>
              </motion.li>

              <motion.li className='mx-3' variants={linkVariants} initial="hidden" animate="visible">
                <Link href="https://www.linkedin.com/in/sladjanamaticrizvic/" target="_blank">
                  <Image src='/linkedin.svg' alt='thunder linkedin' width={48} height={48} />
                </Link>
              </motion.li>

              <motion.li className='mx-3' variants={linkVariants} initial="hidden" animate="visible">
                <Link href="https://twitter.com/ThunderSvadjica" target="_blank">
                  <Image src="/twitter.svg" alt='thunder twitter' width={48} height={48} />
                </Link>
              </motion.li>
            </ul>

            <div className='text-center'>
              I respect your privacy: Your data will not be collected. We will not even be counting how many downloads we get! 
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
};

export default Page;

