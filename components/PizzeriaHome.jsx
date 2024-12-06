'use client'

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import BookingModal from './BookingModal';
import MenuModal from './MenuModal';
import PizzaCarousel from './PizzaCarousel';
import { motion } from 'framer-motion';

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 flex items-center justify-center">
      <div className="text-gray-400">Loading...</div>
    </div>
  ),
});

const Animation = () => {
  const chefAnimation = require('../public/chef-animation.json');
  return (
    <div className="relative w-32 h-32">
      <Lottie 
        animationData={chefAnimation}
        loop={true}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
      {/* Decorative circle behind the animation */}
      <div className="absolute inset-0 -m-4 bg-sky-400/10 rounded-full blur-md" />
    </div>
  );
};

const PizzeriaHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex">
        {/* Left Side - Pizza History Carousel */}
        <div className="w-1/2 h-screen">
          <PizzaCarousel />
        </div>

        {/* Right Side - Branding and Buttons */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-[#222831] px-8 py-16 md:py-24 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          
          <motion.main 
            className="flex flex-col items-center gap-12 relative z-10 w-full max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Animation />
            </motion.div>

            <motion.div className="text-center space-y-4" variants={itemVariants}>
              <h1 
                className="text-6xl md:text-7xl font-bold tracking-tight"
                style={{ 
                  color: '#00ADB5',
                  fontFamily: "'Playfair Display', serif",
                  textShadow: '0 2px 8px rgba(0, 173, 181, 0.2)'
                }}
              >
                Pizzeria Paradiso
              </h1>
              <h2 
                className="text-2xl md:text-3xl font-medium tracking-wide"
                style={{ 
                  color: '#EEEEEE',
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: '0.05em'
                }}
              >
                Authentic Italian Experience
              </h2>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-6 w-full max-w-sm"
              variants={itemVariants}
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group w-full px-8 py-4 rounded-full text-lg transition-all duration-500 hover:shadow-2xl hover:shadow-sky-500/20 hover:translate-y-[-2px] relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #00ADB5, #009DA5)',
                  color: '#EEEEEE',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                <span className="relative z-10">Book Reservation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              
              <button 
                onClick={() => setIsMenuModalOpen(true)}
                className="w-full px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] hover:bg-sky-500/10 border-2"
                style={{ 
                  borderColor: '#00ADB5',
                  color: '#00ADB5',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500
                }}
              >
                See Menu
              </button>
            </motion.div>

            <motion.p 
              className="mt-8 text-sm text-gray-400 italic tracking-wider"
              variants={itemVariants}
              style={{
                fontFamily: "'Cormorant Garamond', serif"
              }}
            >
              Experience the taste of tradition
            </motion.p>
          </motion.main>
        </div>
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