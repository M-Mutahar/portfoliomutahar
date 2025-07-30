
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-700 shadow-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
            Muhammad Mutahar
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-all font-semibold hover:scale-105 whitespace-nowrap cursor-pointer">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-all font-semibold hover:scale-105 whitespace-nowrap cursor-pointer">
              About
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-yellow-400 transition-all font-semibold hover:scale-105 whitespace-nowrap cursor-pointer">
              Projects
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-all font-semibold hover:scale-105 whitespace-nowrap cursor-pointer">
              Services & Pricing
            </Link>
            <Link href="/hire-me" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-bold hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer shadow-lg">
              Hire Me
            </Link>
            <Link href="/testimonials" className="text-gray-300 hover:text-yellow-400 transition-all font-semibold hover:scale-105 whitespace-nowrap cursor-pointer">
              Testimonials
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
          >
            <i className="ri-menu-line text-xl text-gray-300"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer font-semibold">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer font-semibold">
                About
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer font-semibold">
                Projects
              </Link>
              <Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer font-semibold">
                Services & Pricing
              </Link>
              <Link href="/hire-me" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-bold hover:from-purple-500 hover:to-pink-500 transition-all cursor-pointer text-center">
                Hire Me
              </Link>
              <Link href="/testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer font-semibold">
                Testimonials
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
