'use client'

import React from 'react'
import { FaStar } from 'react-icons/fa'

interface ServiceCard {
  id: number
  badge: string
  title: string
  description: string
  rating: number
  reviews: string
  price: number
  originalPrice: number
  duration: string
  perACPrice: number
  features: string[]
}

const MiddleFeed = () => {
  const services: ServiceCard[] = [
    {
      id: 1,
      badge: '2 ACs PACK',
      title: 'Foam-jet AC service',
      description: 'Dust-free filters & better airflow',
      rating: 4.77,
      reviews: '1.8M reviews',
      price: 998,
      originalPrice: 1198,
      duration: '1 hr 30 mins',
      perACPrice: 499,
      features: [
        'Applicable for both window or split ACs',
        'Indoor unit deep cleaning with foam & jet spray',
      ],
    },
    {
      id: 2,
      badge: '3 ACs PACK',
      title: 'Foam-jet service (3 ACs)',
      description: 'Dust-free filters & better airflow',
      rating: 4.77,
      reviews: '1.8M reviews',
      price: 1397,
      originalPrice: 1797,
      duration: '2 hrs',
      perACPrice: 466,
      features: [
        'Applicable for both window or split ACs',
        'Indoor unit deep cleaning with foam & jet spray',
      ],
    },
  ]

  return (
    <div className="w-full max-w-full md:max-w-2xl lg:max-w-2xl px-4 sm:px-6 md:px-0">
      {/* Section Heading */}
      <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-black mb-4 sm:mb-4 md:mb-6">
        Super saver packages
      </h2>
      
      {/* Scrollable Feed */}
      <div className="space-y-4 sm:space-y-4 md:space-y-6 overflow-y-auto max-h-[600px] sm:max-h-[700px] md:max-h-[800px] pr-1 sm:pr-1 md:pr-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden"
          >
            {/* Main Card Content */}
            <div className="relative bg-gray-50 p-3 sm:p-3 md:p-4">
              {/* Badge */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 bg-gray-800 text-white text-[10px] sm:text-[10px] md:text-xs font-bold px-1.5 py-0.5 sm:px-1.5 sm:py-0.5 md:px-2 md:py-1 rounded">
                {service.badge}
              </div>
              
              {/* Responsive Layout: Stack on mobile, side-by-side on tablet+ */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-3 md:gap-4 mt-6 sm:mt-6 md:mt-8">
                {/* Left Side - Text */}
                <div className="flex-1 w-full sm:w-auto">
                  <h3 className="font-bold text-black text-base sm:text-base md:text-lg mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-xs md:text-sm text-black">
                    {service.description}
                  </p>
                </div>
                
                {/* Right Side - Image Placeholder */}
                <div className="w-full h-48 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gray-200 rounded-lg flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                  <svg className="w-12 h-12 sm:w-12 sm:h-12 md:w-16 md:h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Service Details */}
            <div className="p-3 sm:p-3 md:p-4">
              {/* Service Title */}
              <h4 className="font-bold text-black text-base sm:text-base md:text-lg mb-2">
                {service.title}
              </h4>
              
              {/* Rating and Reviews */}
              <div className="flex items-center gap-2 mb-2 sm:mb-2 md:mb-3">
                <FaStar className="text-purple-600 text-xs sm:text-xs md:text-sm" />
                <span className="text-xs sm:text-xs md:text-sm text-black">
                  {service.rating} ({service.reviews})
                </span>
              </div>
              
              {/* Pricing and Duration */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mb-2 sm:mb-2 md:mb-3">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span className="font-bold text-black text-base sm:text-base md:text-lg">
                    ₹{service.price.toLocaleString()}
                  </span>
                  <span className="text-xs sm:text-xs md:text-sm text-gray-500 line-through">
                    ₹{service.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-xs sm:text-xs md:text-sm text-black">• {service.duration}</span>
                </div>
                <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-lg text-xs sm:text-xs md:text-sm font-medium transition-colors w-full sm:w-auto">
                  Add
                </button>
              </div>
              
              {/* Per AC Price */}
              <div className="flex items-center gap-2 mb-3 sm:mb-3 md:mb-4">
                <svg className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-xs md:text-sm text-green-600 font-medium">
                  ₹{service.perACPrice} per AC
                </span>
              </div>
              
              {/* Bullet Points */}
              <ul className="space-y-1.5 sm:space-y-1.5 md:space-y-2 mb-3 sm:mb-3 md:mb-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5 sm:mt-0.5 md:mt-1 text-xs sm:text-xs md:text-sm">•</span>
                    <span className="text-xs sm:text-xs md:text-sm text-black leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* View Details Link */}
              <button className="text-blue-600 text-xs sm:text-xs md:text-sm font-medium hover:underline">
                View details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MiddleFeed

