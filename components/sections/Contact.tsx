'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Reveal from '@/components/motion/Reveal'
import MagneticLink from '@/components/motion/MagneticLink'

const socials = [
  {
    href: 'https://primal.net/p/nprofile1qqsxmk0alw7djtjd8alkgluam2euhfj278txuz7mugtt2lkw4j9s2kqtcc4m4',
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

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-[80vh] flex items-center py-20 lg:py-28 scroll-mt-24"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center max-w-[860px] mx-auto text-center">
          <Reveal>
            <h2 className="text-[32px] lg:text-[52px] font-normal mb-10 lg:mb-14 leading-tight">
              Reach me <span className="text-gradient">here</span>
            </h2>
          </Reveal>

          <ul className="flex flex-row items-center justify-center gap-4 sm:gap-8 mb-10">
            {socials.map((s, i) => (
              <motion.li
                key={s.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                <MagneticLink
                  href={s.href}
                  external
                  ariaLabel={s.alt}
                  strength={0.4}
                  className="relative group flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-thunder-surface/80 backdrop-blur-sm border border-thunder-border hover:border-thunder-pink/60 transition-colors"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl bg-thunder-pink/0 group-hover:bg-thunder-pink/10 transition-colors"
                  />
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={36}
                    height={36}
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </MagneticLink>
              </motion.li>
            ))}
          </ul>

          <Reveal delay={0.5}>
            <p className="text-white/70 max-w-2xl">
              I respect your privacy: Your data will not be collected. We will not
              even be counting how many downloads we get!
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
