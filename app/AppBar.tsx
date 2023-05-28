'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function AppBar() {
  const [mobile, setMobile] = useState(false)

  const handleMobile = () => {
    setMobile(!mobile)
  }

  return (
    <div>
      {/* navbar goes here */}
      <nav className="bg-gray-100 mb-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <span className="flex items-center space-x-1 py-5 text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                    />
                  </svg>
                  <span className="font-bold cursor-default">Next Auth</span>
                </span>
              </div>
              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-1">
                <Link
                  href="/"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  About
                </Link>
              </div>
            </div>
            {/* secundary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/login" className="py-5 px-3">
                Login
              </Link>
              <Link
                href="/register"
                className="py-2 px-3 bg-cyan-600 hover:bg-cyan-700 text-white hover:text-white rounded transition duration-300"
              >
                Signup
              </Link>
            </div>

            {/* mobile button goes here */}
            <div className="md:hidden flex items-center" onClick={handleMobile}>
              <button aria-label="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div className={`${mobile ? '' : 'hidden '} md:hidden`}>
          <Link
            href="/"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
            onClick={handleMobile}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
            onClick={handleMobile}
          >
            About
          </Link>
        </div>
      </nav>
    </div>
  )
}

/* youtube tutorial
https://www.youtube.com/watch?v=miiPsBlqMns&t=1473s
Building Tailwind CSS Navbars - Responsive Too!
DigitalOcean channel
*/
