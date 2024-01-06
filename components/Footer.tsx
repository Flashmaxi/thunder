import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full gap-y-10 max-md:flex-col'>
        <ul className="mx-auto flex flex-center justify-center flex-row items-center content-center">
        <li className='mx-3'>
                <Link href="https://damus.io/npub1dhvlm7aumyhy60mlv3lemk4newny4uwkdc9ahcskk4lvatytq4vq60lcq6">
                    <Image src='/nostricon.svg' alt='nostr thunder' width={32} height={32}/>
                </Link>
            </li>

            <li className='mx-3'>
                <Link href="https://www.linkedin.com/in/sladjanamaticrizvic/">
                    <Image src='/linkedin.svg' alt='thunder linkedin' width={32} height={32}/>
                </Link>
            </li>

            <li className='mx-3'>
                <Link href="https://twitter.com/svadjica?lang=en">
                    <Image src="/twitterlogo.svg" alt='thunder twitter' width={32} height={32}/>
                </Link>
            </li>

            
        </ul>
    </footer>
  )
}

export default Footer