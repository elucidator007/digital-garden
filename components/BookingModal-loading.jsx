import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../public/pizza-loader.json';
import { motion } from 'framer-motion';
import { pizza_facts } from '@/constants/constant';

const BookingModalLoading = ({formData}) => {
  
    const getRandomItem = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    }
  
    return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="text-center py-12 px-6"
    >
      <div className="mb-8 w-40 h-40 mx-auto">
        <Lottie 
          animationData={loadingAnimation}
          loop={true}
          autoplay={true}
        />
      </div>
      <motion.h3 
        className="text-2xl font-light mb-3" 
        style={{ fontFamily: "'Playfair Display', serif", color: '#040303' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Hello {formData.name}
      </motion.h3>
      <motion.p 
        className="text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p>Your booking is being processed...</p>
        <br/>
        <div
            style={{ fontFamily: "'Playfair Display', serif", color: '#040303' }}
        >
            <div>Fun Fact:</div>
            {getRandomItem(pizza_facts)}
        </div>
      </motion.p>
    </motion.div>
  );
}

export default BookingModalLoading;