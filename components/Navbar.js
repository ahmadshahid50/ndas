'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-25">
          
          <Link href="/" className="flex items-center gap-0">
            <img
              src="/images/logo.png"
              alt="SOVA Care logo"
              className="h-25 w-auto sm:h-14 md:h-16 lg:h-35 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-teal-600  transition">Home</Link>
            <Link href="/about" className="px-3 py-2 text-gray-700 hover:text-teal-600 transition">About</Link>
            <Link href="/services" className="px-3 py-2 text-gray-700 hover:text-teal-600 transition">Services</Link>
            <Link href="/cleaning-property-support" className="px-3 py-2 text-gray-700 hover:text-teal-600 transition">Cleaning & Property Support</Link>
            <Link href="/ndis-support" className="px-3 py-2 text-gray-700 hover:text-teal-600 transition">NDIS Support</Link>
            <Link href="/aged-care" className="px-3 py-2 text-gray-700 hover:text-teal-600 transition">Aged Care</Link>
            <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-teal-600 transition">Contact</Link>

            {/* More Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-teal-600 transition flex items-center">
                More
                {/* <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg> */}
              </button>

              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">
                <Link href="/areas-we-service" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">Areas We Service</Link>
                <Link href="/rates-pricing" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">Rates & Pricing</Link>
                <Link href="/client-information" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">Client Information</Link>
                <Link href="/resources" className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600">Resources</Link>
              </div>
            </div>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact#booking"
              className="bg-white text-teal-600 border border-teal-600 px-6 py-2 rounded-md hover:bg-teal-50 transition font-semibold"
            >
              Start your enquiry
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            className="md:hidden text-gray-800 focus:outline-none z-[110]"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 w-full bg-white border-t z-[100] shadow-md">
          <Link href="/" className="block px-4 py-2 text-gray-700 hover:text-teal-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block px-4 py-2 text-gray-700 hover:text-teal-600" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/services" className="block px-4 py-2 text-gray-700 hover:text-teal-600" onClick={() => setIsMenuOpen(false)}>Services Overview</Link>
          <Link href="/cleaning-property-support" className="block px-4 py-2 text-gray-700 hover:text-teal-600" onClick={() => setIsMenuOpen(false)}>Cleaning & Property Support</Link>
          <Link href="/ndis-support" className="block px-4 py-2 text-gray-700 hover:text-teal-600" onClick={() => setIsMenuOpen(false)}>NDIS Support</Link>
          <Link href="/aged-care" className="block px-4 py-2 text-gray-700 hover:text-teal-600" onClick={() => setIsMenuOpen(false)}>Aged Care</Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:text-teal-600" onClick={() => setIsMenuOpen(false)}>Contact</Link>

          {/* Mobile More */}
          <button
            className="w-full text-left px-4 py-2 text-gray-700 flex items-center"
            onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
          >
            More
            {/* <svg
              className={`w-4 h-4 ml-1 transition-transform ${isMoreDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg> */}
          </button>

          {isMoreDropdownOpen && (
            <div className="pl-4">
              <Link href="/areas-we-service" className="block px-4 py-2 text-sm text-gray-700">Areas We Service</Link>
              <Link href="/rates-pricing" className="block px-4 py-2 text-sm text-gray-700">Rates & Pricing</Link>
              <Link href="/client-information" className="block px-4 py-2 text-sm text-gray-700">Client Information</Link>
              <Link href="/resources" className="block px-4 py-2 text-sm text-gray-700">Resources</Link>
            </div>
          )}

          <div className="p-4">
            <Link
              href="/contact"
              className="block text-center bg-white text-teal-600 border border-teal-600 px-6 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Start your enquiry
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}