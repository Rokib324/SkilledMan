'use client'

import React, { useState } from 'react'

const DownloadApp = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [countryCode, setCountryCode] = useState('+880')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!phoneNumber.trim()) {
      alert('Please enter your mobile number')
      return
    }
    // TODO: Implement API call to send download link
    console.log('Sending download link to:', countryCode + phoneNumber)
    alert(`Download link will be sent to ${countryCode} ${phoneNumber}`)
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Section - App Download Prompt */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Book professionals from your phone
            </h2>
            
            <p className="text-base sm:text-lg text-black mb-8">
              Enter your mobile number to get the App download link.
            </p>

            {/* Mobile Number Input */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8">
              {/* Country Code Dropdown */}
              <div className="relative">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg bg-white text-black appearance-none cursor-pointer pr-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  aria-label="Country code"
                >
                  <option value="+880">🇧🇩 +880</option>
                  <option value="+966">🇸🇦 +966</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Phone Number Input */}
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your mobile number"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
                required
                aria-label="Mobile number"
              />

              {/* Send Button */}
              <button 
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap"
              >
                Send
              </button>
            </form>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Google Play */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200"
                aria-label="Download Android app from Google Play"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="text-sm font-medium">ANDROID APP ON</span>
                <span className="text-xl font-bold ml-1">Google play</span>
              </a>

              {/* App Store */}
              <a
                href="https://www.apple.com/app-store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200"
                aria-label="Download iOS app from App Store"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <span className="text-sm font-medium">Available on the</span>
                <span className="text-xl font-bold ml-1">App Store</span>
              </a>
            </div>
          </div>

          {/* Right Section - Mobile App Mockups */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end gap-4">
            <div className="flex gap-4 items-start">
              {/* First Phone Mockup - Home Screen */}
              <div className="w-48 sm:w-56 md:w-64 relative">
                {/* Phone Frame */}
                <div className="bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-4xl overflow-hidden h-[600px]">
                    {/* Status Bar */}
                    <div className="bg-white px-4 py-2 flex justify-between items-center text-xs">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 border border-black rounded-sm"></div>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-3 py-4 h-full overflow-y-auto">
                      {/* Service Categories Grid */}
                      <div className="grid grid-cols-4 gap-3 mb-4">
                        {[
                          { name: 'Salon for Men', icon: '👨' },
                          { name: 'Salon for Women', icon: '👩' },
                          { name: 'Cleaning', icon: '🧹' },
                          { name: 'Electrician, Plumber...', icon: '🔧' },
                          { name: 'Appliance Repair', icon: '⚙️' },
                          { name: 'Massage at Home', icon: '🕯️' },
                          { name: 'Painting', icon: '🎨' },
                          { name: 'Pest Control', icon: '🐛' }
                        ].map((service, idx) => (
                          <div key={idx} className="text-center">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-1 text-2xl">
                              {service.icon}
                            </div>
                            <p className="text-[10px] text-gray-700 leading-tight">{service.name}</p>
                          </div>
                        ))}
                      </div>

                      {/* Featured Banner */}
                      <div className="relative mb-4 rounded-lg overflow-hidden">
                        <div className="h-32 flex items-end" style={{ background: 'linear-gradient(to right, rgb(251, 207, 232), rgb(233, 213, 255))' }}>
                          <div className="bg-black bg-opacity-60 w-full p-3 text-white">
                            <p className="text-sm font-semibold mb-1">Salon experience at your home</p>
                            <p className="text-xs opacity-90">Best brands • Trained beauticians</p>
                          </div>
                        </div>
                      </div>

                      {/* Salon Services Grid */}
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { name: 'Packages', emoji: '💄' },
                          { name: 'Facial', emoji: '✨' },
                          { name: 'Waxing', emoji: '🧴' },
                          { name: 'Hair', emoji: '💇' },
                          { name: 'Pedicure', emoji: '💅' },
                          { name: 'Threading', emoji: '🧵' }
                        ].map((service, idx) => (
                          <div key={idx} className="text-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-1 text-2xl">
                              {service.emoji}
                            </div>
                            <p className="text-[10px] text-gray-700">{service.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Phone Mockup - Checkout Screen */}
              <div className="w-48 sm:w-56 md:w-64 relative mt-8">
                {/* Phone Frame */}
                <div className="bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-4xl overflow-hidden h-[600px]">
                    {/* Status Bar */}
                    <div className="bg-white px-4 py-2 flex justify-between items-center text-xs">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 border border-black rounded-sm"></div>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="px-4 py-3 border-b border-gray-200 flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <h3 className="font-semibold text-black">Checkout</h3>
                    </div>

                    {/* Content */}
                    <div className="px-4 py-4 h-full overflow-y-auto flex flex-col">
                      {/* Address */}
                      <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-2">Address for service</p>
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mb-2">HOME</span>
                            <p className="text-sm text-black">Flat 51, Tower 122, Silver Apar...</p>
                          </div>
                          <button type="button" className="text-blue-600 text-sm font-medium">Change</button>
                        </div>
                      </div>

                      {/* Date Selection */}
                      <div className="mb-6">
                        <h4 className="text-base font-semibold text-black mb-3">When would you like your service?</h4>
                        <p className="text-sm text-gray-600 mb-3">Select Date</p>
                        <div className="flex gap-2 overflow-x-auto">
                          {['Mon 21', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'].map((date, idx) => (
                            <button
                              key={idx}
                              type="button"
                              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                                idx === 0 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-black'
                              }`}
                            >
                              {date}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time Selection */}
                      <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-3">Chaandni will arrive at:</p>
                        <div className="grid grid-cols-4 gap-2">
                          {['4 pm', '4:30 pm', '5 pm', '5:30 pm', '6 pm', '6:30 pm', '7 pm', '7:30 pm'].map((time, idx) => (
                            <button
                              key={idx}
                              type="button"
                              className="px-3 py-2 border border-gray-300 rounded-lg text-xs text-black hover:border-blue-600 hover:text-blue-600"
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Payment Mode */}
                      <div className="bg-blue-50 rounded-lg p-3 mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-xs text-gray-600">Payment Mode (Based on offer)</p>
                          <button className="text-blue-600 text-xs font-medium">Change</button>
                        </div>
                        <p className="text-sm font-medium text-black">Jaglan (Ends with 7955)</p>
                      </div>

                      {/* Total and Pay Button */}
                      <div className="mt-auto pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-lg font-bold text-black">$89</p>
                            <button type="button" className="text-xs text-blue-600">View Details</button>
                          </div>
                          <button type="button" className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 whitespace-nowrap">
                            Proceed to Pay →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadApp