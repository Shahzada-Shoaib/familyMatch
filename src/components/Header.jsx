  import { useState } from "react";
import React from 'react'

  function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // Toggle dropdown
    return (
      <div className=''>
        <header class="inse-0 backdrop-blur-md bg-white-200 rounded-[80px] m-6 shadow-2xl px-10  flex items-center justify-between">

          <div class="text-2xl text-white font-bold">
            Family Match
          </div>

      
          <nav className="space-x-6 hidden md:flex text-white text-xl">
            <a href="#" class=" hover:text-blue-600">Home</a>
            <a href="#" class=" hover:text-blue-600">About</a>
            <a href="#" class=" hover:text-blue-600">Services</a>
            <a href="#" class=" hover:text-blue-600">Contact</a>
          </nav>

          <div className='justify-between py-8 hidden md:flex'>
            <div className='flex gap-2'>
              <div>
                <button className='border-2 px-8 py-1 rounded-3xl text-white hover:opacity-80'>MEMBER LOGIN</button>
              </div>
              <div>
                <button className='border-[#CD185B] px-8 py-1 rounded-3xl bg-[#CD185B] text-white hover:opacity-80'>REGISTER</button>
              </div>
            </div>
          </div>

          <div class="md:hidden">
            <button class="text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              >
              <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            {/* Dropdown */}
            {menuOpen && (
              <div className="absolute right-0 mt-6 mr-12 w-50 bg-white shadow-lg rounded-lg z-50">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
              </div>
            )}
          </div>
        </header>

      </div>
    )
  }

  export default Header;