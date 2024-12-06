'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import BookingModal from './BookingModal';
import MenuModal from './MenuModal';

// Import Lottie with no SSR
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 flex items-center justify-center">
      <div>Loading...</div>
    </div>
  ),
});

const Animation = () => {
  const chefAnimation = require('../public/chef-animation.json');
  return (
    <Lottie 
      animationData={chefAnimation}
      loop={true}
      className="w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

const PizzeriaHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FDF6EC] to-[#F5E6D3]">
        {/* Main Content */}
        <main className="flex-grow container mx-auto flex flex-col md:flex-row items-center justify-center px-6 py-16 md:py-24">
          {/* Left Side - Lottie Animation */}
          <div className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
            <div className="w-full max-w-md transform hover:scale-105 transition-transform duration-500">
              <Animation />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-10 md:pl-12">
            <div className="text-center md:text-left">
              <h1 
                className="text-6xl md:text-7xl font-light tracking-tight mb-4"
                style={{ 
                  color: '#2C1810',
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                Pizzeria Paradiso
              </h1>
              <h2 
                className="text-2xl md:text-3xl font-light tracking-wide"
                style={{ 
                  color: '#8B5E3C',
                  fontFamily: "'Cormorant Garamond', serif"
                }}
              >
                Authentic Italian Experience
              </h2>
            </div>
            
            <div className="flex flex-col gap-6 w-full max-w-sm">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
                style={{ 
                  background: 'linear-gradient(135deg, #D4956A, #C77D46)',
                  color: '#FFF',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500
                }}
              >
                Book Reservation
              </button>
              
              <button 
                onClick={() => setIsMenuModalOpen(true)}
                className="w-full px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
                style={{ 
                  background: 'linear-gradient(135deg, #8B5E3C, #6B4423)',
                  color: '#FFF',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500
                }}
              >
                See Menu
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer 
          className="w-full py-6"
          style={{ 
            background: 'linear-gradient(to right, #2C1810, #4A3527)',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <div className="container mx-auto text-center">
            <p className="text-[#F5E6D3] opacity-80" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              © 2024 Pizzeria Paradiso. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Modals */}
      <BookingModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen}
      />
      <MenuModal 
        open={isMenuModalOpen} 
        onOpenChange={setIsMenuModalOpen}
      />
    </>
  );
};

export default PizzeriaHome;