import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import DownloadApp from '@/components/DownloadApp'
import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <DownloadApp />
      <Footer />
    </div>
  )
}

export default page