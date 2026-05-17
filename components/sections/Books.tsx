'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import TiltCard from '@/components/motion/TiltCard'
import ShimmerButton from '@/components/ShimmerButton'

type Book = {
  id: string
  cover: string
  titleStart: string
  titleAccent: string
  titleEnd: string
  description: string
  fileName: string
}

const books: Book[] = [
  {
    id: 'fiat',
    cover: '/book1.png',
    titleStart: 'Kiss your',
    titleAccent: 'fiat job',
    titleEnd: 'goodbye',
    description:
      'Kiss Your Fiat Job Goodbye is a free guidebook for Bitcoiners looking to pivot into the Bitcoin industry. We will talk about rumors, voluntary work, community, and everything you should know when hunting for your first Bitcoin-only job.',
    fileName: 'Kiss your fiat job goodbye - 2025.pdf',
  },
  {
    id: 'hiring',
    cover: '/book2.png',
    titleStart: 'Kiss your',
    titleAccent: 'bad hiring',
    titleEnd: 'goodbye',
    description:
      'Kiss Your Bad Hiring Goodbye is a free guidebook for all Bitcoin start-ups, looking to improve, or create their hiring processes from the ground up. This ebook can be used as a foundation to build a tailored hiring process for your organization.',
    fileName: 'Kiss your bad hiring goodbye - 2025.pdf',
  },
]

const Books = () => {
  return (
    <section
      id="books"
      className="relative min-h-svh flex items-center py-20 lg:py-28 scroll-mt-24"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 max-w-[1280px] mx-auto items-start">
          {books.map((book, i) => (
            <motion.article
              key={book.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="text-center flex flex-col items-center"
            >
              <div className="relative mb-8 group">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 rounded-2xl bg-thunder-pink/40 blur-[60px] opacity-60"
                />
                <TiltCard maxTilt={14} glare>
                  <Image
                    src={book.cover}
                    width={280}
                    height={280}
                    alt={`${book.titleStart} ${book.titleAccent} ${book.titleEnd} cover`}
                    sizes="(max-width: 768px) 60vw, 280px"
                    className="rounded-lg shadow-pink-glow-lg"
                  />
                </TiltCard>
              </div>

              <h2 className="text-[26px] lg:text-[40px] font-extrabold mb-5 leading-tight">
                {book.titleStart}{' '}
                <span className="text-thunder-pink">{book.titleAccent}</span>{' '}
                {book.titleEnd}
              </h2>

              <p className="text-[16px] lg:text-[18px] leading-relaxed mb-8 text-white/80 max-w-xl text-balance">
                {book.description}
              </p>

              <ShimmerButton
                href={`/${book.fileName}`}
                download={book.fileName}
                className="w-full md:w-auto md:min-w-[267px]"
              >
                Download
              </ShimmerButton>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Books
