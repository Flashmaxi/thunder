'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Reveal from '@/components/motion/Reveal'
import TiltCard from '@/components/motion/TiltCard'

const paragraphs = [
  `Welcome to my corner of the Internet! I'm Thunder, a Bitcoiner deeply invested in the world of Bitcoin startups and recruitment. With years of experience in both realms, I understand the challenges companies encounter when seeking top talent, as well as the hurdles job seekers face when navigating the competitive landscape of the Bitcoin industry.`,
  `My mission is simple: to bridge the gap between employers and job seekers in the Bitcoin ecosystem. I believe in creating a common ground where both parties can thrive, fostering meaningful connections that drive innovation and growth.`,
  `Whether you're a forward-thinking company seeking to build your dream team or an ambitious individual eager to carve out a career path in Bitcoin, I hope I can support you every step of the way.`,
]

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-svh flex items-center py-20 lg:py-28 scroll-mt-24"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -32, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex-shrink-0 w-full max-w-[360px] lg:max-w-[440px]"
          >
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-3xl bg-thunder-pink/30 blur-[60px] opacity-60"
              />
              <TiltCard maxTilt={8}>
                <Image
                  className="rounded-2xl ring-1 ring-thunder-border"
                  src="/about.jpg"
                  width={440}
                  height={440}
                  alt="Thunder"
                  sizes="(max-width: 1024px) 80vw, 440px"
                />
              </TiltCard>
            </div>
          </motion.div>

          <div className="flex-1 text-center xl:text-left max-w-[720px]">
            <Reveal>
              <h2 className="text-[32px] lg:text-[52px] font-extrabold mb-6 lg:mb-8 leading-tight text-balance">
                Who <span className="text-gradient">dis?</span>
              </h2>
            </Reveal>

            {paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={0.05 + i * 0.07}>
                <span className="block text-[16px] lg:text-[19px] leading-relaxed mb-5 text-white/85">
                  {p}
                </span>
              </Reveal>
            ))}

            <Reveal delay={0.25}>
              <Image
                className="ml-auto mt-2 opacity-90"
                src="/thunder_p.svg"
                alt="Thunder signature"
                width={100}
                height={80}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
