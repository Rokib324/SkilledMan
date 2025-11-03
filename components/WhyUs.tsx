import React from 'react'
import { FaBangladeshiTakaSign, FaToolbox } from 'react-icons/fa6'
import { GrUserExpert } from 'react-icons/gr'
import { PiToolboxFill } from 'react-icons/pi'
import { TbUserFilled } from 'react-icons/tb'

const WhyUs = () => {
  return (
    <section className="py-20 ml-20 mr-20 mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Why SkillNow BD */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">
              Why SkillNow BD?
            </h2>
            <div className="space-y-10">
              {/* Transparent Pricing */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Receipt Icon */}
                    <FaBangladeshiTakaSign className="w-12 h-12 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Transparent pricing
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    See fixed prices before you book. No hidden charges.
                  </p>
                </div>
              </div>

              {/* Experts Only */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* User with Star Icon */}
                    <GrUserExpert className="w-12 h-12 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Experts only
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our professionals are well trained and have on-job expertise.
                  </p>
                </div>
              </div>

              {/* Fully Equipped */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Briefcase Icon */}
                    <PiToolboxFill className="w-12 h-12 text-yellow-600" />

                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    Fully equipped
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We bring everything needed to get the job done well.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quality Assurance Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-blue-50 rounded-2xl p-12 shadow-lg max-w-md w-full">
              <div className="text-left">
                {/* Shield Icon */}
                <div className="mb-8 relative w-24 h-24 mx-auto">
                  <svg className="w-24 h-24 mx-auto" viewBox="0 0 96 96" fill="none">
                    <path 
                      d="M48 8L16 16v24c0 20 16 36 32 40 16-4 32-20 32-40V16L48 8z" 
                      fill="#60A5FA" 
                      stroke="#60A5FA" 
                      strokeWidth="2"
                    />
                    <circle cx="48" cy="40" r="15" fill="white"/>
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <TbUserFilled className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-4">
                  100% Quality Assured
                </h3>
                
                <p className="text-gray-600 text-md font-light leading-relaxed">
                  If you don't love our service, we will make it right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
