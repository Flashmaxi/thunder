'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BiMenuAltRight, BiX } from 'react-icons/bi'

const navItems = [
  { id: 'about', text: 'Who dis?', href: '#about' },
  { id: 'books', text: 'Books', href: '#books' },
  { id: 'contact', text: 'Contact', href: '#contact' },
]

const socials = [
  {
    href: 'https://snort.social/npub1dhvlm7aumyhy60mlv3lemk4newny4uwkdc9ahcskk4lvatytq4vq60lcq6',
    src: '/nostr.svg',
    alt: 'Thunder on Nostr',
  },
  {
    href: 'https://www.linkedin.com/in/sladjanamaticrizvic/',
    src: '/linkedin.svg',
    alt: 'Thunder on LinkedIn',
  },
  {
    href: 'https://twitter.com/ThunderSvadjica',
    src: '/twitter.svg',
    alt: 'Thunder on Twitter',
  },
]

const overlayVariants = {
  hidden: { clipPath: 'circle(0% at calc(100% - 36px) 40px)' },
  visible: {
    clipPath: 'circle(150% at calc(100% - 36px) 40px)',
    transition: { duration: 0.6, ease: [0.77, 0, 0.18, 1] },
  },
  exit: {
    clipPath: 'circle(0% at calc(100% - 36px) 40px)',
    transition: { duration: 0.45, ease: [0.77, 0, 0.18, 1] },
  },
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = nav ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [nav])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setNav(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5, 1] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const closeNav = () => setNav(false)

  return (
    <>
      <motion.header
        id="home"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled && !nav
            ? 'bg-thunder-surface/70 backdrop-blur-xl border-b border-thunder-border shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div
          className={`flex justify-between items-center max-w-[1600px] mx-auto px-4 text-white w-full transition-all duration-500 ${
            scrolled && !nav ? 'h-16' : 'h-20'
          }`}
        >
          <Link
            href="/"
            aria-label="Thunder — home"
            className="shrink-0 relative z-[60]"
            onClick={closeNav}
          >
            <Image
              src="/thunder_p.svg"
              alt="Thunder logo"
              width={80}
              height={64}
              priority
              className={`transition-all duration-500 ${
                scrolled && !nav ? 'scale-90' : 'scale-100'
              }`}
            />
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = active === item.id
                return (
                  <li key={item.id} className="relative">
                    <a
                      href={item.href}
                      className={`relative block px-4 py-2 rounded-xl font-semibold transition-colors duration-200 ${
                        isActive ? 'text-thunder-pink' : 'text-white/85 hover:text-thunder-pink'
                      }`}
                    >
                      {item.text}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-xl bg-thunder-pink-soft"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setNav((v) => !v)}
            className="md:hidden relative z-[60] inline-flex items-center justify-center w-11 h-11 rounded-full bg-thunder-surface/80 backdrop-blur-md border border-thunder-border text-white hover:border-thunder-pink/60 transition-colors"
            aria-label={nav ? 'Close menu' : 'Open menu'}
            aria-expanded={nav}
            aria-controls="mobile-nav"
          >
            <AnimatePresence mode="wait" initial={false}>
              {nav ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <BiX size={26} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <BiMenuAltRight size={26} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {nav && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 z-50 bg-thunder-bg/95 backdrop-blur-2xl overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <motion.div
                className="absolute top-[-20%] right-[-30%] w-[80vw] h-[80vw] rounded-full bg-thunder-pink/25 blur-[100px]"
                animate={{ x: [0, 30, -20, 0], y: [0, 40, 20, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute bottom-[-30%] left-[-20%] w-[70vw] h-[70vw] rounded-full bg-fuchsia-500/15 blur-[100px]"
                animate={{ x: [0, -30, 20, 0], y: [0, -40, -20, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                  maskImage:
                    'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)',
                }}
              />
            </div>

            <div className="relative flex flex-col h-full px-8 pt-28 pb-10">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.35 } }}
                exit={{ opacity: 0 }}
                className="text-[11px] font-semibold tracking-[0.3em] uppercase text-thunder-pink/80 mb-6"
              >
                Menu
              </motion.span>

              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex-1 flex flex-col gap-2"
              >
                {navItems.map((item) => {
                  const isActive = active === item.id
                  return (
                    <motion.li
                      key={item.id}
                      variants={itemVariants}
                      className="overflow-hidden"
                    >
                      <a
                        href={item.href}
                        onClick={closeNav}
                        className="group relative flex items-center justify-between py-4 border-b border-thunder-border"
                      >
                        <span
                          className={`text-[42px] sm:text-[52px] font-extrabold leading-none tracking-tight transition-all duration-300 ${
                            isActive
                              ? 'text-thunder-pink translate-x-2'
                              : 'text-white group-hover:text-thunder-pink group-hover:translate-x-2'
                          }`}
                        >
                          {item.text}
                        </span>
                        <motion.span
                          aria-hidden="true"
                          className="text-thunder-pink text-2xl opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        >
                          →
                        </motion.span>
                      </a>
                    </motion.li>
                  )
                })}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.55, duration: 0.5 } }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-10"
              >
                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-4">
                  Find me
                </p>
                <ul className="flex items-center gap-3">
                  {socials.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.alt}
                        onClick={closeNav}
                        className="flex items-center justify-center w-12 h-12 rounded-xl bg-thunder-surface/80 border border-thunder-border hover:border-thunder-pink/60 hover:bg-thunder-pink-soft transition-colors"
                      >
                        <Image src={s.src} alt={s.alt} width={26} height={26} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
