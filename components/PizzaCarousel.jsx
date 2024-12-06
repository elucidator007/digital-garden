'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1480548004877-593316be2bd5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ancient Origins',
    description: 'Dating back to ancient civilizations, flatbreads with toppings were served in Naples, Italy. Poor workers needed quick, affordable meals, leading to the birth of pizza.'
  },
  {
    image: 'https://images.unsplash.com/photo-1611588275568-72ecc1a502d1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'The Perfect Dough',
    description: 'Our master pizzaiolos hand-knead the dough using a centuries-old recipe. The dough rests for 24-48 hours, developing complex flavors and the perfect texture.'
  },
  {
    image: 'https://images.unsplash.com/photo-1610913729746-9d5d752daf59?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Sauce Creation',
    description: 'San Marzano tomatoes, grown in the volcanic soil near Mount Vesuvius, are crushed and seasoned with Mediterranean herbs to create our signature sauce.'
  },
  {
    image: 'https://images.unsplash.com/photo-1609280797194-acf56a8b95aa?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Traditional Toppings',
    description: 'Fresh mozzarella, hand-torn basil, and extra virgin olive oil - the colors of the Italian flag come together in our authentic Neapolitan pizza.'
  },
  {
    image: 'https://images.unsplash.com/photo-1607018244619-dab6235709dd?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Wood-Fired Perfection',
    description: 'Each pizza is cooked in our wood-fired oven at 900°F for exactly 90 seconds, creating the perfect leopard-spotted crust characteristic of true Neapolitan pizza.'
  }
];

const PizzaCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides - increased to 4000ms (4 seconds)
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