import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative h-screen flex overflow-hidden">
      {/* Left Side - Professional Image */}
      <div className="w-1/2 relative bg-white">
        <Image
          src="/heroImg.png"
          alt="Professional service provider"
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
        {/* Urban Company bag branding - positioned exactly as in image */}
        <div className="absolute bottom-8 left-8">
          <div className="bg-black px-6 py-3 rounded-lg shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-black font-bold text-xs">SN</span>
              </div>
              <span className="text-white font-semibold text-sm">SkillNow BD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Text and Form */}
      <div className="w-1/2 bg-black text-white flex items-center">
        <div className="w-full max-w-2xl mx-auto px-16">
          {/* Brand Name - Exact styling from image */}
          <div className="mb-8">
            <h1 className="text-white text-sm font-medium tracking-[0.2em] uppercase">
              SkillNow BD
            </h1>
          </div>

          {/* Main Headline - Large, bold, professional typography */}
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] text-white">
            Quality home services, on demand
          </h2>

          {/* Tagline - Clean, readable description */}
          <p className="text-xl text-gray-200 mb-16 leading-relaxed font-light">
            Experienced, hand-picked Professionals to serve you at your doorstep
          </p>

          {/* Service Location Form - Clean, minimal design */}
          <div>
            {/* Where do you need a service? with City Selection Dropdown */}
            <div className="space-y-4 bg-white p-4 rounded-lg">
              <label htmlFor="city-select" className="block text-black text-sm font-bold">
                Where do you need a service?
              </label>
              <div className="relative">
                <select 
                  id="city-select"
                  className="w-full px-6 py-3 bg-white text-gray-900 text-lg rounded-lg border-1 focus:outline-none focus:ring-2 focus:ring-black appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-500">Select your city</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chittagong">Chittagong</option>
                  <option value="sylhet">Sylhet</option>
                  <option value="rajshahi">Rajshahi</option>
                  <option value="khulna">Khulna</option>
                  <option value="barisal">Barisal</option>
                  <option value="rangpur">Rangpur</option>
                  <option value="mymensingh">Mymensingh</option>
                </select>
                {/* Custom Dropdown Arrow */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero