'use client';

import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  // Example handlers for menu actions
  const handleDashboard = () => {
    setShowDashboard(true);
    setIsDropdownOpen(false);
  };
  const handleRazorpay = () => {
    alert('Razorpay Integration Clicked!');
    setIsDropdownOpen(false);
  };
  const handleMessage = () => {
    alert('Message Clicked!');
    setIsDropdownOpen(false);
  };
  const handleLogout = () => {
    alert('Logged Out!');
    setIsDropdownOpen(false);
  };

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Menu
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
              <li>
                <button
                  onClick={handleRazorpay}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Razorpay Integration
                </button>
              </li>
              <li>
                <button
                  onClick={handleMessage}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Message
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Dashboard Section */}
      {showDashboard && (
        <div className="mt-12 w-full max-w-2xl bg-gray-900 rounded-2xl shadow-xl border border-gray-800 p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <p>Welcome to your dashboard! Here you can manage your integrations and view your data.</p>
          {/* Add more dashboard content here */}
          <button
            onClick={() => setShowDashboard(false)}
            className="mt-6 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Close Dashboard
          </button>
        </div>
      )}
    </main>
  );
}
