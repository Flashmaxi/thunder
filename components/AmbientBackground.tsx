'use client'

import { motion } from 'framer-motion'

const orbs = [
  {
    className: 'left-[-10%] top-[-10%] w-[60vw] h-[60vw] bg-thunder-pink/20',
    duration: 22,
    delay: 0,
    x: [0, 60, -30, 0],
    y: [0, 40, 80, 0],
  },
  {
    className: 'right-[-15%] top-[20%] w-[50vw] h-[50vw] bg-fuchsia-500/10',
    duration: 28,
    delay: 2,
    x: [0, -50, 30, 0],
    y: [0, 60, -40, 0],
  },
  {
    className: 'left-[20%] bottom-[-20%] w-[55vw] h-[55vw] bg-pink-400/10',
    duration: 26,
    delay: 4,
    x: [0, 40, -30, 0],
    y: [0, -50, -20, 0],
  },
]

const AmbientBackground = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[120px] ${orb.className}`}
          animate={{ x: orb.x, y: orb.y }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(250,140,218,0.08),_transparent_60%)]" />
      <div className="absolute inset-0 bg-thunder-bg/40" />
    </div>
  )
}

export default AmbientBackground
