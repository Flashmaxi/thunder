import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thunder.example.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bitcoin Jobs & Careers — Get Hired in Bitcoin | Thunder',
    template: '%s · Thunder',
  },
  description:
    'Land your first Bitcoin-only job. Free guidebook from Thunder, a Bitcoin recruiter who helps Bitcoiners transition from fiat to Bitcoin employment and connects startups with top talent.',
  applicationName: 'Thunder',
  keywords: [
    'bitcoin jobs',
    'bitcoin careers',
    'bitcoin only jobs',
    'work in bitcoin',
    'bitcoin employment',
    'get hired in bitcoin',
    'how to get a bitcoin job',
    'bitcoin recruiter',
    'bitcoin job market',
    'bitcoin startup jobs',
    'bitcoin hiring',
    'bitcoiner jobs',
    'lightning network jobs',
    'transition from fiat to bitcoin',
    'first bitcoin job',
  ],
  authors: [{ name: 'Thunder', url: siteUrl }],
  creator: 'Thunder',
  publisher: 'Thunder',
  category: 'Career',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bitcoin Jobs & Careers — Get Hired in Bitcoin',
    description:
      'Free guidebook for Bitcoiners hunting their first Bitcoin-only job. Real advice from a Bitcoin recruiter on community, rumors, voluntary work, and breaking into the industry.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Thunder',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Jobs & Careers — Get Hired in Bitcoin',
    description:
      'Free guidebook for Bitcoiners hunting their first Bitcoin-only job. From a Bitcoin recruiter.',
    creator: '@ThunderSvadjica',
    site: '@ThunderSvadjica',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/thunder_p.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport: Viewport = {
  themeColor: '#000001',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      url: siteUrl,
      name: 'Thunder',
      description:
        'Free guidebooks and career help for Bitcoiners looking to work in Bitcoin, and for startups hiring Bitcoin-only talent.',
      inLanguage: 'en',
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}#thunder`,
      name: 'Thunder',
      jobTitle: 'Bitcoin Recruiter',
      url: siteUrl,
      sameAs: [
        'https://twitter.com/ThunderSvadjica',
        'https://www.linkedin.com/in/sladjanamaticrizvic/',
        'https://primal.net/p/nprofile1qqsxmk0alw7djtjd8alkgluam2euhfj278txuz7mugtt2lkw4j9s2kqtcc4m4',
      ],
      knowsAbout: [
        'Bitcoin',
        'Bitcoin recruitment',
        'Bitcoin careers',
        'Lightning Network',
        'Startup hiring',
      ],
    },
    {
      '@type': 'Book',
      name: 'Kiss your fiat job goodbye',
      author: { '@id': `${siteUrl}#thunder` },
      description:
        'A free guidebook for Bitcoiners looking to pivot into the Bitcoin industry — rumors, voluntary work, community, and everything you should know when hunting for your first Bitcoin-only job.',
      url: `${siteUrl}#books`,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'Book',
      name: 'Kiss your bad hiring goodbye',
      author: { '@id': `${siteUrl}#thunder` },
      description:
        'A free guidebook for Bitcoin start-ups looking to improve or build their hiring processes from the ground up.',
      url: `${siteUrl}#books`,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${jakarta.variable} scroll-smooth`} lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans min-h-screen bg-thunder-bg text-white">{children}</body>
    </html>
  )
}
