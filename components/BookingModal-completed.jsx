import React from 'react';
import Lottie from 'lottie-react';
import successAnimation from '../public/chef-menu-modal.json'; // You'll need to import your Lottie JSON file
import { motion } from 'framer-motion';

const BookingModalCompleted = ({formData}) => {
    return (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="text-center py-12 px-6"
        >
          <motion.div 
            className="mb-8 w-40 h-40 mx-auto"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Lottie 
              animationData={successAnimation}
              loop={false}
              autoplay={true}
            />
          </motion.div>
          <motion.h3 
            className="text-2xl font-light mb-3" 
            style={{ fontFamily: "'Playfair Display', serif", color: '#040303' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Booking Completed!
          </motion.h3>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We look forward to serving you, {formData.name}
          </motion.p>
        </motion.div>
    );
}

export default BookingModalCompleted;