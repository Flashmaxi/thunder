"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
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
    <footer className='w-full gap-y-10 max-md:flex-col'>
      <ul className="mx-auto flex flex-center justify-center flex-row items-center content-center">
        <motion.li className='mx-3' variants={linkVariants} initial="hidden" animate="visible">
          <Link href="https://damus.io/npub1dhvlm7aumyhy60mlv3lemk4newny4uwkdc9ahcskk4lvatytq4vq60lcq6">
            <Image src='/nostricon.svg' alt='nostr thunder' width={32} height={32} />
          </Link>
        </motion.li>

        <motion.li className='mx-3' variants={linkVariants} initial="hidden" animate="visible">
          <Link href="https://www.linkedin.com/in/sladjanamaticrizvic/">
            <Image src='/linkedin.svg' alt='thunder linkedin' width={32} height={32} />
          </Link>
        </motion.li>

        <motion.li className='mx-3' variants={linkVariants} initial="hidden" animate="visible">
          <Link href="https://twitter.com/svadjica?lang=en">
            <Image src="/twitterlogo.svg" alt='thunder twitter' width={32} height={32} />
          </Link>
        </motion.li>
      </ul>
    </footer>
  );
};

export default Footer;
