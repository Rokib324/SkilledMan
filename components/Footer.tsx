import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black text-gray-300">
      {/* Top border line */}
      <div className="border-t border-gray-700"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
          
          {/* Left Section - Logo and Brand */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded flex items-center justify-center shrink-0">
              <span className="text-black font-semibold text-sm sm:text-base">SN</span>
            </div>
            
            {/* Company Name */}
            <div className="flex flex-col">
              <span className="text-gray-300 font-semibold text-base sm:text-lg leading-tight">SkillNow</span>
              <span className="text-gray-300 font-medium text-sm sm:text-base leading-tight">Bangladesh</span>
            </div>
          </div>

          {/* Middle Section - Copyright */}
          <div className="flex-1 text-center lg:text-left px-4 lg:px-0">
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              © {currentYear} SkillNow Bangladesh Ltd.
              <br className="hidden sm:inline" />
              <span className="hidden sm:inline"> (formerly known as Urban Company)</span>
            </p>
          </div>

          {/* Right Section - Social Media Icons and App Download Badges */}
          <div className="flex flex-col items-center lg:items-end gap-4 w-full lg:w-auto">
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 sm:gap-5">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Pinterest"
              >
                <FaPinterest className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>

            {/* App Download Badges */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Google Play */}
              <Link
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-black border border-gray-600 px-4 py-2 rounded hover:border-gray-400 transition-colors duration-200"
                aria-label="Download Android app from Google Play"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 leading-tight">ANDROID APP ON</span>
                  <span className="text-sm font-semibold text-gray-300 leading-tight">Google play</span>
                </div>
              </Link>

              {/* App Store */}
              <Link
                href="https://www.apple.com/app-store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-black border border-gray-600 px-4 py-2 rounded hover:border-gray-400 transition-colors duration-200"
                aria-label="Download iOS app from App Store"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 leading-tight">Available on the</span>
                  <span className="text-sm font-semibold text-gray-300 leading-tight">App Store</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
