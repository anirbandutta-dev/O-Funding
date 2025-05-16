'use client'
import React, { useState, useRef, useEffect } from 'react'
import { useSession, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isDropdownOpen])

  // Handlers for menu actions
  const handleDashboard = () => {
    setShowDashboard(true)
    setIsDropdownOpen(false)
  }
  const handleRazorpay = () => {
    alert('Razorpay Integration Clicked!')
    setIsDropdownOpen(false)
  }
  const handleMessage = () => {
    alert('Message Clicked!')
    setIsDropdownOpen(false)
  }
  const handleLogout = () => {
    alert('Logged Out!')
    setIsDropdownOpen(false)
  }

  return (
    <div className='bg-gray-900 text-white flex items-center h-13 px-4'>
      <div className="logo font-bold flex-1">Get Me a Mocktail</div>
      <div className="flex items-center gap-2">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            {session ? 'Dashboard' : 'Menu'}
            <svg
              className={`w-2.5 h-2.5 ms-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button
                    onClick={handleDashboard}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </button>
                </li>
                {session ? (
                  <>
                    <li>
                      <Link
                        href="/settings"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        href="/contact"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Privacy
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
        {!session && (
          <Link
            href="/login"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
