import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Thunder — Get hired in Bitcoin',
    template: '%s · Thunder',
  },
  description:
    'Bridging Bitcoiners and Bitcoin-only companies. Free guidebooks for job seekers and startups, written by Thunder.',
  keywords: [
    'Bitcoin jobs',
    'Bitcoin recruitment',
    'Bitcoin career',
    'Bitcoin hiring',
    'Thunder',
  ],
  authors: [{ name: 'Sladjana Matic-Rizvic' }],
  creator: 'Thunder',
  openGraph: {
    title: 'Thunder — Get hired in Bitcoin',
    description:
      'Bridging Bitcoiners and Bitcoin-only companies. Free guidebooks for job seekers and startups.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Thunder',
    images: [
      {
        url: '/thunder-about.png',
        width: 1200,
        height: 630,
        alt: 'Thunder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thunder — Get hired in Bitcoin',
    description: 'Bridging Bitcoiners and Bitcoin-only companies.',
    creator: '@ThunderSvadjica',
    images: ['/thunder-about.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/thunder_p.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#000001',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${jakarta.variable} scroll-smooth`} lang="en">
      <body className="font-sans min-h-screen bg-thunder-bg text-white">{children}</body>
    </html>
  )
}
