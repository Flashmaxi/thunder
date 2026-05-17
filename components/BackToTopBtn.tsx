'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import Link from 'next/link'

export default function BackToTopBtn() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsActive(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Link
      href="#home"
      aria-label="Back to top"
      className={`fixed right-4 lg:right-6 bottom-28 z-30 w-12 h-12 flex justify-center items-center rounded-full bg-thunder-surface text-thunder-pink border-2 border-thunder-pink transition-all duration-300 hover:shadow-pink-glow hover:scale-110 ${
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      <FaArrowUp className="text-xl" />
    </Link>
  )
}
