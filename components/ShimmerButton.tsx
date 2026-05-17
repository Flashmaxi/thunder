'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  href: string
  download?: string
  children: ReactNode
  className?: string
  ariaLabel?: string
}

const ShimmerButton = ({
  href,
  download,
  children,
  className = '',
  ariaLabel,
}: Props) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.a
      href={href}
      download={download}
      aria-label={ariaLabel}
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-thunder-pink px-8 py-4 font-bold text-white shadow-pink-glow transition-shadow duration-300 hover:shadow-pink-glow-lg ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20"
      />
    </motion.a>
  )
}

export default ShimmerButton
