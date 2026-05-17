'use client'

import Image from 'next/image'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import AnimatedHeading from '@/components/motion/AnimatedHeading'
import ShimmerButton from '@/components/ShimmerButton'

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px), (hover: none) and (pointer: coarse)')
    const update = () => setIsSmall(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const ambient = prefersReducedMotion || isSmall

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-1, 1], [8, -8]), { stiffness: 150, damping: 18 })
  const ry = useSpring(useTransform(mx, [-1, 1], [-12, 12]), { stiffness: 150, damping: 18 })

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1)
    my.set(((e.clientY - r.top) / r.height) * 2 - 1)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section className="relative min-h-svh flex items-center py-16 min-[1440px]:py-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col min-[1440px]:flex-row items-center justify-between gap-12 min-[1440px]:gap-20 max-w-[1440px] mx-auto">
          <div className="flex-1 text-center min-[1440px]:text-left max-w-[760px] order-2 min-[1440px]:order-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-thunder-border bg-thunder-surface/60 backdrop-blur-sm text-xs font-medium tracking-wider text-white/80 uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-thunder-pink opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-thunder-pink" />
              </span>
              Bitcoin career compass
            </motion.div>

            <AnimatedHeading
              className="text-[34px] sm:text-[44px] lg:text-[52px] min-[1440px]:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-6 min-[1440px]:mb-8 text-balance"
              segments={[
                { text: 'Unlock Your Bitcoin Career Journey:' },
                {
                  text: 'Transitioning from Fiat to Bitcoin Employment',
                  accent: true,
                },
              ]}
              accentClassName="text-gradient"
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-[18px] lg:text-[22px] min-[1440px]:text-[24px] leading-snug mb-8 min-[1440px]:mb-10 text-white/80 text-balance"
            >
              Empowering Job Seekers and Companies in the Bitcoin Job Market
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center min-[1440px]:justify-start"
            >
              <ShimmerButton href="#books" className="w-full sm:w-auto sm:min-w-[267px]">
                Download books
              </ShimmerButton>
            </motion.div>
          </div>

          <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ perspective: 1200 }}
            className="flex-1 relative w-full max-w-[480px] sm:max-w-[560px] min-[1440px]:max-w-[700px] order-1 min-[1440px]:order-2"
          >
            <motion.div
              animate={ambient ? undefined : { y: [0, -14, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
              className="relative"
            >
              <div className="absolute inset-0 -z-10 bg-thunder-pink/30 blur-[100px] rounded-full scale-90" />
              <Image
                src="/books.png"
                width={700}
                height={700}
                alt="Thunder Bitcoin career guidebooks"
                priority
                sizes="(max-width: 1440px) 80vw, 700px"
                className="w-full h-auto drop-shadow-[0_30px_60px_rgba(250,140,218,0.35)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40 text-xs tracking-widest uppercase"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block w-px h-8 bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}

export default Hero
