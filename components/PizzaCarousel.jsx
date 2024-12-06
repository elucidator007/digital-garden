'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from '@/constants/constant';

const PizzaCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: `brightness(${isHovered ? '0.7' : '0.9'})`
          }}
        >
          {/* Content */}
          <div 
            className={`absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-70'
            }`}
          >
            <h3 className="text-3xl font-bold mb-2 font-playfair text-white">
              {slide.title}
            </h3>
            <p className="text-lg font-cormorant text-white">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Minimalist Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PizzaCarousel;