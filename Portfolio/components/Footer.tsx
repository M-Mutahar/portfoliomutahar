
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Muhammad Mutahar
            </h3>
            <p className="text-gray-300 mb-6 max-w-md font-medium text-lg">
              Professional graphic designer creating stunning visuals for brands and businesses worldwide. 
              Let's bring your creative vision to life.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-full transition-all transform hover:scale-110 cursor-pointer shadow-lg">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="https://instagram.com/m.mutahar_m" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 rounded-full transition-all transform hover:scale-110 cursor-pointer shadow-lg">
                <i className="ri-instagram-fill text-lg"></i>
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 rounded-full transition-all transform hover:scale-110 cursor-pointer shadow-lg">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 rounded-full transition-all transform hover:scale-110 cursor-pointer shadow-lg">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors cursor-pointer font-medium">
                About Me
              </Link>
              <Link href="/projects" className="block text-gray-300 hover:text-white transition-colors cursor-pointer font-medium">
                My Work
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-white transition-colors cursor-pointer font-medium">
                Services
              </Link>
              <Link href="/hire-me" className="block text-gray-300 hover:text-white transition-colors cursor-pointer font-medium">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <div className="space-y-3">
              <p className="text-gray-300 font-medium">Logo Design</p>
              <p className="text-gray-300 font-medium">Brand Identity</p>
              <p className="text-gray-300 font-medium">Web Graphics</p>
              <p className="text-gray-300 font-medium">Print Design</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-medium">
            2024 Muhammad Mutahar. All rights reserved. | Designed with passion
          </p>
        </div>
      </div>
    </footer>
  );
}
