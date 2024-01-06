import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='pt-[30px] md:pt-[58px]'>
        <Link href="/">
            <Image className='mx-auto' src="/thunder_p.svg" alt='logo' width={140} height={76}/>
        </Link>
    </div>
    <nav className='flex-center top-0 z-50 w-full text-whites'>
        <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
            
        </div>
    </nav>
    </>
  )
}

export default Navbar