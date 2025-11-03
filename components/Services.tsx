'use client'

import React, { useState, useRef, useEffect } from 'react'

const Services = () => {
  const [activeService, setActiveService] = useState<string | null>(null)
  const [lastButtonIndexInActiveRow, setLastButtonIndexInActiveRow] = useState<number | null>(null)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  // City/Location data for each service
  const serviceLocations: { [key: string]: string[] } = {
    "Ac": [
      "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal",
      "Rangpur", "Mymensingh", "Comilla", "Narayanganj", "Gazipur", "Jessore",
      "Cox's Bazar", "Bogra", "Dinajpur", "Tangail", "Pabna", "Jamalpur"
    ],
    "Painting & Waterproofing": [
      "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal"
    ],
    "Wall Panels By Revamp": [
      "Dhaka", "Chittagong", "Sylhet", "Rajshahi"
    ],
    "Rooms/walls Painting": [
      "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna"
    ],
    "Electrician": [
      "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal",
      "Rangpur", "Mymensingh", "Comilla", "Narayanganj"
    ],
    "Plumber": [
      "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal",
      "Rangpur", "Mymensingh"
    ],
    "Carpenter": [
      "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna"
    ]
  }

  // Default locations if service not found in serviceLocations
  const defaultLocations = [
    "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal",
    "Rangpur", "Mymensingh", "Comilla", "Narayanganj", "Gazipur"
  ]

  const BangladeshServices = [
    { name: "Ac", icon: "❄️" },
    { name: "Painting & Waterproofing", icon: "🎨" },
    { name: "Wall Panels By Revamp", icon: "🪵" },
    { name: "Rooms/walls Painting", icon: "🏠" },
    { name: "Talk To Expert", icon: "💬" },
    { name: "Air Cooler", icon: "🌬️" },
    { name: "Refrigerator Video Consult", icon: "📹" },
    { name: "Ac_amazon", icon: "🛒" },
    { name: "Carpenters_flipkart", icon: "🔨" },
    { name: "Rooms/ Walls Painting", icon: "🏠" },
    { name: "Electricians_amazon", icon: "⚡" },
    { name: "Makeup & Styling Studio", icon: "💄" },
    { name: "Microwave", icon: "📺" },
    { name: "Laptop", icon: "💻" },
    { name: "Furniture Assembly", icon: "🪑" },
    { name: "Fan Installation", icon: "🌀" },
    { name: "Walls & Rooms Painting", icon: "🏠" },
    { name: "Ikea Furniture Assembly", icon: "🪑" },
    { name: "Chimney", icon: "🏠" },
    { name: "Geyser", icon: "🔥" },
    { name: "Stove", icon: "🔥" },
    { name: "Electrician", icon: "⚡" },
    { name: "Carpenter", icon: "🔨" },
    { name: "Plumber", icon: "🔧" },
    { name: "Refrigerator", icon: "❄️" },
    { name: "Television", icon: "📺" },
    { name: "Bed Bugs Control", icon: "🛏️" },
    { name: "Native Smart Locks", icon: "🔐" },
    { name: "Massage For Men Ayurveda", icon: "💆‍♂️" },
    { name: "Hair Studio For Women", icon: "💇‍♀️" },
    { name: "Salon Royale", icon: "👑" },
    { name: "Massage Therapy For Men Royale", icon: "💆‍♂️" }
  ]

  const toggleService = (serviceName: string, index: number) => {
    if (activeService === serviceName) {
      setActiveService(null)
      setLastButtonIndexInActiveRow(null)
    } else {
      setActiveService(serviceName)
      // Calculate which row this button is in and find last button in that row
      calculateLastButtonInRow(index)
    }
  }

  const calculateLastButtonInRow = (clickedIndex: number) => {
    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(() => {
      // Get all button refs
      const buttons = buttonRefs.current.filter(Boolean) as HTMLButtonElement[]
      if (buttons.length === 0) return

      // Get the clicked button's position
      const clickedButton = buttons[clickedIndex]
      if (!clickedButton) return

      const clickedTop = clickedButton.offsetTop

      // Group buttons by their Y position (row)
      const rows: number[][] = []
      buttons.forEach((button, index) => {
        const buttonTop = button.offsetTop
        // Find existing row with same Y position (within 5px tolerance)
        const existingRowIndex = rows.findIndex(row => {
          const firstButtonInRow = buttons[row[0]]
          return firstButtonInRow && Math.abs(firstButtonInRow.offsetTop - buttonTop) < 5
        })

        if (existingRowIndex >= 0) {
          rows[existingRowIndex].push(index)
        } else {
          rows.push([index])
        }
      })

      // Find which row contains the clicked button
      const rowIndex = rows.findIndex(row => row.includes(clickedIndex))
      if (rowIndex >= 0) {
        // Get the last button index in that row
        const activeRow = rows[rowIndex]
        const lastIndex = Math.max(...activeRow)
        setLastButtonIndexInActiveRow(lastIndex)
      } else {
        setLastButtonIndexInActiveRow(clickedIndex)
      }
    }, 0)
  }

  useEffect(() => {
    // Recalculate rows when window is resized
    const handleResize = () => {
      if (activeService !== null) {
        const serviceIndex = BangladeshServices.findIndex(s => s.name === activeService)
        if (serviceIndex >= 0) {
          setTimeout(() => calculateLastButtonInRow(serviceIndex), 100)
        }
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [activeService])

  const getLocations = (serviceName: string): string[] => {
    return serviceLocations[serviceName] || defaultLocations
  }

  const getServiceTitle = (serviceName: string): string => {
    // Format service name for title (capitalize first letter, handle special cases)
    const formatted = serviceName === "Ac" ? "AC" : serviceName
    return `Book #1 ${formatted} service & ${formatted} repair experts.`
  }

  const getServiceSubtitle = (serviceName: string): string => {
    if (serviceName === "Ac") {
      return "Trusted professionals for AC servicing, AC repair, gas refill & AC installation. Book now and save up to ₹ 3000 on electricity bill!"
    }
    return `Trusted professionals for ${serviceName} services. Book now and get the best quality service at your doorstep!`
  }

  // Dropdown Content Component
  const DropdownContent = ({ 
    activeService, 
    getLocations, 
    getServiceTitle, 
    getServiceSubtitle 
  }: {
    activeService: string
    getLocations: (name: string) => string[]
    getServiceTitle: (name: string) => string
    getServiceSubtitle: (name: string) => string
  }) => {
    const locations = getLocations(activeService)
    
    return (
      <div className="w-full bg-white rounded-lg shadow-xl border border-gray-200 p-4 sm:p-6 lg:p-8 mt-4">
        {/* Heading */}
        <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2">
          {getServiceTitle(activeService)}
        </h4>
        
        {/* Subtitle */}
        <p className="text-sm sm:text-base text-black mb-4 sm:mb-6 font-normal">
          {getServiceSubtitle(activeService)}
        </p>

        {/* Responsive Column Location List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-2">
          {locations.map((city, cityIndex) => (
            <div key={cityIndex} className="flex items-start">
              <span className="text-black mr-2 mt-1 flex-shrink-0">•</span>
              <a 
                href="#" 
                className="text-black text-xs sm:text-sm hover:text-blue-600 transition-colors break-words"
              >
                {activeService === "Ac" ? "Ac" : activeService} in {city}
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8 lg:mb-12 text-left">
          Services Offered
        </h2>
        
        {/* Bangladesh Services */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-6 lg:mb-8">
            Bangladesh
          </h3>
          
          {/* Service Buttons Container */}
          <div className="relative">
            {/* Service Buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-2">
              {BangladeshServices.map((service, index) => {
                const isActive = activeService === service.name
                const isLastButtonInActiveRow = lastButtonIndexInActiveRow === index
                
                return (
                  <React.Fragment key={index}>
                    <button
                      ref={(el) => { buttonRefs.current[index] = el }}
                      onClick={() => toggleService(service.name, index)}
                      className={`inline-flex items-center justify-between py-[6px] px-3 sm:px-4 bg-gray-100 border border-gray-200 rounded-full hover:bg-gray-200 transition-all duration-200 whitespace-nowrap text-xs sm:text-sm ${
                        isActive ? 'bg-gray-200 shadow-sm' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <span className="text-base sm:text-lg flex-shrink-0">{service.icon}</span>
                        <span className="text-xs sm:text-sm font-medium text-black">
                          {service.name}
                        </span>
                      </div>
                      <svg 
                        className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0 ml-2 transition-transform duration-200 ${
                          isActive ? 'rotate-180' : ''
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Render dropdown after the last button in the active row */}
                    {isLastButtonInActiveRow && activeService && (
                      <div className="w-full mt-4">
                        <DropdownContent 
                          activeService={activeService}
                          getLocations={getLocations}
                          getServiceTitle={getServiceTitle}
                          getServiceSubtitle={getServiceSubtitle}
                        />
                      </div>
                    )}
                  </React.Fragment>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Services