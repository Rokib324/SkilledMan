'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LeftSide from '@/components/LeftSide'
import MiddleFeed from '@/components/MiddleFeed'
import RightSide from '@/components/RightSide'

const SpecificWorkPage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-8 items-start w-full">
          {/* Left Side - Full width on mobile/tablet, fixed width on desktop */}
          <div className="w-full lg:w-1/4 xl:w-1/4">
            <LeftSide />
          </div>
          
          {/* Middle Feed - Full width on mobile/tablet, takes remaining space on desktop */}
          <div className="w-full lg:flex-1 lg:max-w-2xl xl:max-w-2xl">
            <MiddleFeed />
          </div>
          
          {/* Right Side - Full width on mobile/tablet, fixed width on desktop */}
          <div className="w-full lg:w-1/4 xl:w-1/4">
            <RightSide />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SpecificWorkPage