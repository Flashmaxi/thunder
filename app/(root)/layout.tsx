import BackToTopBtn from '@/components/BackToTopBtn'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
       <Navbar/>
        {children}
       <BackToTopBtn/> 
       <Footer/>
      </>
    )
  }
  
  export default layout
