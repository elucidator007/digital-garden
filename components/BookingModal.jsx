'use client'

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const BookingModal = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onOpenChange(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]" style={{ backgroundColor: '#FDF6EC' }}>
        <DialogHeader>
          <DialogTitle className="text-3xl font-light mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#2C1810' }}>
            Reserve Your Table
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif", color: '#8B5E3C' }}
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
                style={{ 
                  borderColor: '#D4956A',
                  backgroundColor: '#FFF',
                  fontFamily: "'Montserrat', sans-serif"
                }}
              />
            </div>

            <div>
              <label 
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif", color: '#8B5E3C' }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
                style={{ 
                  borderColor: '#D4956A',
                  backgroundColor: '#FFF',
                  fontFamily: "'Montserrat', sans-serif"
                }}
              />
            </div>

            <div>
              <label 
                htmlFor="phone"
                className="block text-sm font-medium mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif", color: '#8B5E3C' }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
                style={{ 
                  borderColor: '#D4956A',
                  backgroundColor: '#FFF',
                  fontFamily: "'Montserrat', sans-serif"
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label 
                  htmlFor="date"
                  className="block text-sm font-medium mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif", color: '#8B5E3C' }}
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: '#D4956A',
                    backgroundColor: '#FFF',
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="time"
                  className="block text-sm font-medium mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif", color: '#8B5E3C' }}
                >
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
                  style={{ 
                    borderColor: '#D4956A',
                    backgroundColor: '#FFF',
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="guests"
                className="block text-sm font-medium mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif", color: '#8B5E3C' }}
              >
                Number of Guests
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
                style={{ 
                  borderColor: '#D4956A',
                  backgroundColor: '#FFF',
                  fontFamily: "'Montserrat', sans-serif"
                }}
              >
                {[1,2,3,4,5,6,7,8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
            style={{ 
              background: 'linear-gradient(135deg, #D4956A, #C77D46)',
              color: '#FFF',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500
            }}
          >
            Confirm Reservation
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;