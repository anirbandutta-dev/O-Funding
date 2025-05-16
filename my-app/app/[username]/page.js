'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [amount, setAmount] = useState('');

  const handleAmount = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Full Screen Profile Section */}
      <div className="relative min-h-screen">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black z-0" />
        
        {/* Profile Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header Section */}
          <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl w-full text-center">
              <div className="mb-8">
                <div className="relative h-40 w-40 mx-auto mb-6">
                  <div className="h-40 w-40 rounded-full border-4 border-purple-400 shadow-xl shadow-purple-500/30 overflow-hidden bg-gray-900 ring-4 ring-white/20">
                    <Image
                      src="/profile.jpeg"
                      alt="Creator Avatar"
                      width={160}
                      height={160}
                      className="object-cover"
                    />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Anirban Dutta</h1>
                <p className="text-xl text-gray-300 mb-6">Digital Artist & MERN Developer</p>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Creating amazing digital art and sharing my creative journey. Your support helps me continue creating amazing content and building this community!
                </p>
              </div>

              {/* Payment Section */}
              <div className="mt-12 max-w-md mx-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">Support the Creator</h2>
                  
                  <div className="space-y-6">
                    {/* Amount Input */}
                    <div className="relative">
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-2">
                        Enter Amount (₹)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">₹</span>
                        <input
                          id="amount"
                          type="text"
                          value={amount}
                          onChange={handleAmount}
                          placeholder="Enter amount"
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 text-lg backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    {/* Payment Button */}
                    {amount && (
                      <button
                        className="w-full py-4 px-6 rounded-xl font-medium text-white bg-purple-600 
                          hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center text-lg
                          shadow-lg shadow-purple-500/20"
                      >
                        Pay ₹{parseInt(amount).toLocaleString('en-IN')}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </main>
  );
} 