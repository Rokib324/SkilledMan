'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black text-white w-full">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-2 sm:py-2.5 md:py-3 min-h-[48px] sm:min-h-[52px] md:min-h-[56px]">
          {/* Left side - Logo and Brand */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity flex-shrink-0 z-50">
            {/* Logo */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded flex items-center justify-center flex-shrink-0">
              <span className="text-black font-semibold text-xs sm:text-sm">SN</span>
            </div>
            
            {/* Brand Name */}
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight whitespace-nowrap">SkillNow</span>
              <span className="text-white font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-tight ml-1 whitespace-nowrap">Bangladesh</span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Only visible on large screens */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link 
              href="#" 
              className="text-white text-xs xl:text-sm font-semibold border-b-2 border-white transition-all duration-200 whitespace-nowrap"
            >
              Register As a Professional
            </Link>
            <Link 
              href="#" 
              className="text-white text-xs xl:text-sm font-semibold hover:underline transition-all duration-200"
            >
              Help
            </Link>
            <Link 
              href="#" 
              className="text-white text-xs xl:text-sm font-semibold hover:underline transition-all duration-200"
            >
              Login / Sign Up
            </Link>
          </div>

          {/* Tablet Navigation - Visible only on medium screens (tablets) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Link 
              href="#" 
              className="text-white text-sm font-semibold hover:underline transition-all duration-200"
            >
              Help
            </Link>
            <Link 
              href="#" 
              className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button - Visible on mobile and tablet */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none z-50 relative"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            type="button"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Dropdown Menu */}
      <div 
        className={`lg:hidden fixed left-0 right-0 bg-black border-t border-gray-800 transform transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 top-[48px] sm:top-[52px] md:top-[56px]' 
            : 'opacity-0 -translate-y-full pointer-events-none top-[48px] sm:top-[52px] md:top-[56px]'
        }`}
      >
        <div className="flex flex-col py-4 px-4 space-y-4">
          <Link 
            href="#" 
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-base font-semibold border-b-2 border-white pb-2 transition-all duration-200"
          >
            Register As a Professional
          </Link>
          <Link 
            href="#" 
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-base font-semibold hover:underline transition-all duration-200 py-2"
          >
            Help
          </Link>
          <Link 
            href="#" 
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-base font-semibold hover:underline transition-all duration-200 py-2"
          >
            Login / Sign Up
          </Link>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 top-[48px] sm:top-[52px] md:top-[56px]"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </>
  )
}

export default Navbar