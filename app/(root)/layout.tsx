import AmbientBackground from '@/components/AmbientBackground'
import BackToTopBtn from '@/components/BackToTopBtn'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AmbientBackground />
      <Navbar />
      {children}
      <BackToTopBtn />
      <Footer />
    </>
  )
}

export default Layout
