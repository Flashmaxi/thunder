'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'header' | 'p' | 'span'
  once?: boolean
}

const Reveal = ({
  children,
  delay = 0,
  y = 24,
  className,
  as = 'div',
  once = true,
}: RevealProps) => {
  const prefersReducedMotion = useReducedMotion()

  const variants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  }

  const MotionTag = motion[as] as typeof motion.div

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
