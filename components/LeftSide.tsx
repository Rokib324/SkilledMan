'use client'

import React from 'react'
import { FaStar } from 'react-icons/fa'

const LeftSide = () => {
  const services = [
    {
      id: 1,
      name: 'Super saver packages',
      iconType: 'percent',
    },
    {
      id: 2,
      name: 'Service',
      iconType: 'check',
    },
    {
      id: 3,
      name: 'Repair & gas refill',
      iconType: 'settings',
    },
    {
      id: 4,
      name: 'Installation/uninstallation',
      iconType: 'tools',
    },
  ]

  return (
    <div className="w-full max-w-full md:max-w-md lg:max-w-md xl:max-w-md px-4 sm:px-6 md:px-0">
      {/* Main Heading */}
      <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-black mb-2 sm:mb-2 md:mb-2">
        Ac Service & Repair
      </h1>
      
      {/* Subtitle */}
      <p className="text-sm sm:text-sm md:text-base lg:text-base text-black mb-4 sm:mb-4 md:mb-4">
        Get #1 AC service & AC repair experts in Delhi NCR, India
      </p>
      
      {/* Rating and Bookings */}
      <div className="flex items-center gap-2 mb-6 sm:mb-6 md:mb-8">
        <FaStar className="text-purple-600 text-base sm:text-base md:text-lg" />
        <span className="font-bold text-black text-sm sm:text-sm md:text-base">4.75</span>
        <span className="text-black text-xs sm:text-xs md:text-sm">(11.4 M bookings)</span>
      </div>
      
      {/* Select a service Section */}
      <div>
        <h2 className="text-base sm:text-base md:text-lg lg:text-lg font-normal text-black mb-3 sm:mb-3 md:mb-4">
          Select a service
        </h2>
        
        {/* Service Cards Grid - Responsive: 1 col mobile, 2 col tablet+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-3 md:gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-lg p-3 sm:p-3 md:p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <div className="mb-2 sm:mb-2 md:mb-3">
                {service.iconType === 'percent' ? (
                  <div className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg sm:text-lg md:text-xl font-bold">%</span>
                  </div>
                ) : (
                  <div className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {service.iconType === 'check' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      ) : service.iconType === 'settings' ? (
                        <>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </>
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      )}
                    </svg>
                  </div>
                )}
              </div>
              <p className="text-xs sm:text-xs md:text-sm text-center text-black font-medium leading-tight">
                {service.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeftSide

