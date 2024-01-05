import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div>
        <Link href="/">
            <Image className='mx-auto' src="/thunder_p.svg" alt='logo' width={300} height={200}/>
        </Link>
    </div>
    <nav className='flex-center fixed top-0 z-50 w-fullpy-7 text-whites'>
        <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
            
        </div>
    </nav>
    </>
  )
}

export default Navbar