'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertCircle } from 'lucide-react';

const BookingModal = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [ripples, setRipples] = useState({});
  const [bookingStatus, setBookingStatus] = useState('form'); // 'form' | 'processing' | 'completed'

  // Calculate form completion percentage
  useEffect(() => {
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter(value => value !== '').length;
    setCompletionPercentage((filledFields / totalFields) * 100);
  }, [formData]);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name is too short' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
      case 'phone':
        return !/^\d{10}$/.test(value.replace(/\D/g, '')) ? 'Invalid phone number' : '';
      case 'date':
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return !value ? 'Date is required' : selectedDate < today ? 'Date cannot be in the past' : '';
      case 'time':
        return !value ? 'Time is required' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const createRipple = (event, inputId) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      id: Date.now()
    };

    setRipples(prev => ({
      ...prev,
      [inputId]: ripple
    }));

    setTimeout(() => {
      setRipples(prev => {
        const newRipples = { ...prev };
        delete newRipples[inputId];
        return newRipples;
      });
    }, 1000);
  };

  const handleGuestChange = (increment) => {
    setFormData(prev => ({
      ...prev,
      guests: Math.min(Math.max(prev.guests + increment, 1), 8)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    let hasErrors = false;
    const newErrors = {};
    Object.entries(formData).forEach(([field, value]) => {
      const error = validateField(field, value);
      if (error) {
        hasErrors = true;
        newErrors[field] = error;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      // Mark all fields as touched to show errors
      const allTouched = Object.keys(formData).reduce((acc, field) => ({
        ...acc,
        [field]: true
      }), {});
      setTouched(allTouched);
      return;
    }

    setBookingStatus('processing');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setBookingStatus('completed');
    
    // Reset after showing completion
    setTimeout(() => {
      setBookingStatus('form');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2
      });
      setTouched({});
      setErrors({});
      onOpenChange(false);
    }, 3000);
  };

  const renderContent = () => {
    switch (bookingStatus) {
      case 'processing':
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center py-12 px-6"
          >
            <div className="mb-8">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#00ADB5] border-t-transparent mx-auto"></div>
            </div>
            <motion.h3 
              className="text-2xl font-light mb-3" 
              style={{ fontFamily: "'Playfair Display', serif", color: '#222831' }}
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
              Your booking is being processed...
            </motion.p>
          </motion.div>
        );

      case 'completed':
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center py-12 px-6"
          >
            <motion.div 
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="w-16 h-16 bg-[#00ADB5] rounded-full mx-auto flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </motion.div>
            <motion.h3 
              className="text-2xl font-light mb-3" 
              style={{ fontFamily: "'Playfair Display', serif", color: '#222831' }}
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

      default:
        return (
          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            {Object.entries(formData).map(([field, value], index) => (
              field !== 'guests' && (
                <motion.div 
                  key={field} 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif", color: '#222831' }}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <div className="relative">
                    <input
                      type={field === 'email' ? 'email' : field === 'date' ? 'date' : field === 'time' ? 'time' : 'text'}
                      name={field}
                      value={value}
                      onChange={handleInputChange}
                      onFocus={(e) => createRipple(e, field)}
                      className={`
                        w-full px-4 py-2 rounded-lg border-2 transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20
                        ${errors[field] && touched[field] ? 'border-red-500 animate-shake' : 'border-gray-200 focus:border-[#00ADB5]'}
                      `}
                    />
                    {ripples[field] && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0.5 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute bg-[#00ADB5]/20 w-12 h-12 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        style={{
                          left: ripples[field].x,
                          top: ripples[field].y,
                        }}
                      />
                    )}
                  </div>
                  <AnimatePresence mode="wait">
                    {errors[field] && touched[field] && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="absolute -bottom-6 left-0 text-red-500 text-sm flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors[field]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            ))}

            {/* Guest Counter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <label 
                className="block text-sm font-medium mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif", color: '#222831' }}
              >
                Number of Guests
              </label>
              <div className="flex items-center gap-4">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleGuestChange(-1)}
                  className="w-12 h-12 rounded-full bg-[#00ADB5] text-white flex items-center justify-center text-2xl disabled:opacity-50"
                  disabled={formData.guests <= 1}
                >
                  -
                </motion.button>
                <span className="text-xl font-semibold w-8 text-center">{formData.guests}</span>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleGuestChange(1)}
                  className="w-12 h-12 rounded-full bg-[#00ADB5] text-white flex items-center justify-center text-2xl disabled:opacity-50"
                  disabled={formData.guests >= 8}
                >
                  +
                </motion.button>
              </div>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full px-8 py-4 rounded-full text-lg bg-[#00ADB5] text-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Complete Reservation
            </motion.button>
          </form>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-white"
        >
          <DialogHeader className="p-6 pb-0">
            <DialogTitle 
              className="text-3xl font-light mb-4 text-center" 
              style={{ fontFamily: "'Playfair Display', serif", color: '#222831' }}
            >
              Reserve Your Table
            </DialogTitle>
          </DialogHeader>

          {bookingStatus === 'form' && (
            <motion.div 
              className="h-1 bg-[#00ADB5]"
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          )}

          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;