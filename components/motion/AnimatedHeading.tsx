'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Segment = { text: string; accent?: boolean; breakAfter?: boolean }

type Props = {
  segments: Segment[]
  className?: string
  delay?: number
  accentClassName?: string
}

const container: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      delayChildren: delay,
      staggerChildren: 0.04,
    },
  }),
}

const word: Variants = {
  hidden: { opacity: 0, y: '0.25em', filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: '0em',
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

const AnimatedHeading = ({
  segments,
  className = '',
  delay = 0.1,
  accentClassName = 'text-thunder-pink',
}: Props) => {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <h1 className={className}>
        {segments.map((seg, i) => (
          <span key={i}>
            <span className={seg.accent ? accentClassName : undefined}>{seg.text}</span>
            {seg.breakAfter ? ' ' : i < segments.length - 1 ? ' ' : ''}
          </span>
        ))}
      </h1>
    )
  }

  const nodes: ReactNode[] = []
  segments.forEach((seg, segIdx) => {
    const words = seg.text.split(' ').filter(Boolean)
    words.forEach((w, wi) => {
      nodes.push(
        <motion.span
          key={`${segIdx}-${wi}`}
          variants={word}
          className={`inline-block ${seg.accent ? accentClassName : ''}`}
          style={{ marginRight: '0.28em' }}
        >
          {w}
        </motion.span>,
      )
    })
  })

  return (
    <motion.h1
      className={`pb-[0.15em] ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      custom={delay}
    >
      {nodes}
    </motion.h1>
  )
}

export default AnimatedHeading
