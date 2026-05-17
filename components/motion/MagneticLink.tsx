'use client'

import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { useRef, type ReactNode } from 'react'

type Props = {
  href: string
  className?: string
  ariaLabel?: string
  external?: boolean
  strength?: number
  children: ReactNode
}

const MagneticLink = ({
  href,
  className,
  ariaLabel,
  external = false,
  strength = 0.35,
  children,
}: Props) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 })
  const prefersReducedMotion = useReducedMotion()

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = e.clientX - rect.left - rect.width / 2
    const py = e.clientY - rect.top - rect.height / 2
    x.set(px * strength)
    y.set(py * strength)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.div style={{ x: sx, y: sy }} className="inline-block">
      <Link
        ref={ref}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        aria-label={ariaLabel}
        className={className}
        {...externalProps}
      >
        {children}
      </Link>
    </motion.div>
  )
}

export default MagneticLink
