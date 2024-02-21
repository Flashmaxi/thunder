import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'],
weight: ['400', '500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Thunder',
  description: 'Get hired in Bitcoin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} min-h-screen bg-[#000001] text-white`}>
        {children}
        </body>
    </html>
  )
}
