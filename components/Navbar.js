'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-teal-600">
            SOVA Care
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-gray-700 hover:text-teal-600 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 text-gray-700 hover:text-teal-600 transition"
            >
              About
            </Link>
            <Link
              href="/services"
              className="px-3 py-2 text-gray-700 hover:text-teal-600 transition"
            >
              Services
            </Link>
            <Link
              href="/ndis-support"
              className="px-3 py-2 text-gray-700 hover:text-teal-600 transition"
            >
              NDIS Support
            </Link>
            <Link
              href="/aged-care"
              className="px-3 py-2 text-gray-700 hover:text-teal-600 transition"
            >
              Aged Care
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-gray-700 hover:text-teal-600 transition"
            >
              Contact
            </Link>

            {/* More Dropdown (Desktop) */}
            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-teal-600 transition flex items-center">
                More
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <Link
                  href="/areas-we-service"
                  className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 first:rounded-t-md"
                >
                  Areas We Service
                </Link>
                <Link
                  href="/rates-pricing"
                  className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                >
                  Rates & Pricing
                </Link>
                <Link
                  href="/client-information"
                  className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                >
                  Client Information
                </Link>
                <Link
                  href="/resources"
                  className="block px-4 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 last:rounded-b-md"
                >
                  Resources
                </Link>
              </div>
            </div>
          </div>

          {/* Book Support Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact#booking"
              className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition font-semibold"
            >
              Book Support
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-teal-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/ndis-support"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              NDIS Support
            </Link>
            <Link
              href="/aged-care"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Aged Care
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* More Dropdown (Mobile) */}
            <button
              className="w-full text-left px-3 py-2 text-gray-700 hover:text-teal-600 transition flex items-center"
              onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
            >
              More
              <svg
                className={`w-4 h-4 ml-1 transition-transform ${isMoreDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
            {isMoreDropdownOpen && (
              <div className="pl-4">
                <Link
                  href="/areas-we-service"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition text-sm"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsMoreDropdownOpen(false);
                  }}
                >
                  Areas We Service
                </Link>
                <Link
                  href="/rates-pricing"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition text-sm"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsMoreDropdownOpen(false);
                  }}
                >
                  Rates & Pricing
                </Link>
                <Link
                  href="/client-information"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition text-sm"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsMoreDropdownOpen(false);
                  }}
                >
                  Client Information
                </Link>
                <Link
                  href="/resources"
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition text-sm"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsMoreDropdownOpen(false);
                  }}
                >
                  Resources
                </Link>
              </div>
            )}

            <div className="mt-4 px-3">
              <Link
                href="/contact#booking"
                className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition font-semibold block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
