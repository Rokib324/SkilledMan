'use client'

import React from 'react'
import { FaShoppingCart, FaCheck, FaChevronDown } from 'react-icons/fa'

const RightSide = () => {
  return (
    <div className="w-full max-w-full sm:max-w-sm md:max-w-sm lg:max-w-sm px-4 sm:px-0 space-y-3 sm:space-y-3 md:space-y-4">
      {/* Shopping Cart Status */}
      <div className="bg-gray-50 rounded-lg p-4 sm:p-4 md:p-6 flex flex-col items-center justify-center">
        <div className="relative mb-3 sm:mb-3 md:mb-4">
          <FaShoppingCart className="text-gray-400 text-3xl sm:text-3xl md:text-4xl" />
          <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-purple-600 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
          </div>
        </div>
        <p className="text-xs sm:text-xs md:text-sm text-black text-center">No items in your cart</p>
      </div>
      
      {/* Amazon Cashback Offer */}
      <div className="bg-gray-50 rounded-lg p-3 sm:p-3 md:p-4">
        <div className="flex items-start gap-2 sm:gap-2 md:gap-3 mb-2 sm:mb-2 md:mb-3">
          <div className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0">
            <span className="text-white text-base sm:text-base md:text-lg font-bold">%</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-black mb-1 text-sm sm:text-sm md:text-base">Amazon cashback upto ₹125</p>
            <p className="text-xs sm:text-xs md:text-sm text-black">Via Amazon Pay balance</p>
          </div>
        </div>
        <button className="text-blue-600 text-xs sm:text-xs md:text-sm font-medium flex items-center gap-1 w-full justify-start">
          View More Offers
          <FaChevronDown className="text-xs" />
        </button>
      </div>
      
      {/* UC Promise */}
      <div className="bg-gray-50 rounded-lg p-3 sm:p-3 md:p-4 relative">
        {/* Quality Assured Badge */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-blue-100 rounded-full px-2 py-0.5 sm:px-2 sm:py-0.5 md:px-3 md:py-1 flex items-center gap-1">
          <FaCheck className="text-green-600 text-[10px] sm:text-[10px] md:text-xs" />
          <span className="text-[9px] sm:text-[9px] md:text-xs font-bold text-blue-900">QUALITY ASSURED</span>
        </div>
        
        <h3 className="font-bold text-black mb-3 sm:mb-3 md:mb-4 pr-16 sm:pr-18 md:pr-20 text-sm sm:text-sm md:text-base">UC Promise</h3>
        
        <div className="space-y-2 sm:space-y-2 md:space-y-3">
          <div className="flex items-center gap-2 sm:gap-2 md:gap-3">
            <FaCheck className="text-green-600 shrink-0 text-xs sm:text-xs md:text-sm" />
            <span className="text-xs sm:text-xs md:text-sm text-black">Verified Professionals</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-2 md:gap-3">
            <FaCheck className="text-green-600 shrink-0 text-xs sm:text-xs md:text-sm" />
            <span className="text-xs sm:text-xs md:text-sm text-black">Hassle Free Booking</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-2 md:gap-3">
            <FaCheck className="text-green-600 shrink-0 text-xs sm:text-xs md:text-sm" />
            <span className="text-xs sm:text-xs md:text-sm text-black">Transparent Pricing</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSide

