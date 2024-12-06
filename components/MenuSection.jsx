'use client'

import React from 'react';

import {REGULAR_COLORS, VEG_COLORS } from '@/constants/constant';
import { MenuItem } from "./MenuItem";

export const MenuSection = ({ title, items, showVegOnly }) => {
    const filteredItems = showVegOnly ? items.filter(item => item.isVeg) : items;
    const colors = showVegOnly ? VEG_COLORS : REGULAR_COLORS;
    
    if (filteredItems.length === 0) return null;
  
    return (
      <div className="mb-6 transition-all duration-300 ease-in-out">
        <div className="relative mb-4">
          <h2 
            className="text-xl mb-2"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              color: colors.primary,
            }}
          >
            {title}
          </h2>
          <div className="flex items-center gap-2">
            <div 
              className="h-px flex-grow transition-all duration-300"
              style={{ 
                background: `linear-gradient(90deg, ${colors.accent} 0%, ${colors.border} 100%)` 
              }}
            />
            <svg height="8" width="8" style={{ color: colors.accent }}>
              <circle cx="4" cy="4" r="2" fill="currentColor"/>
            </svg>
            <div 
              className="h-px w-8 transition-all duration-300"
              style={{ 
                background: `linear-gradient(270deg, ${colors.accent} 0%, ${colors.border} 100%)` 
              }}
            />
          </div>
        </div>
        <div className="grid transition-all duration-300 ease-in-out">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="transition-all duration-300 ease-in-out opacity-100"
            >
              <MenuItem {...item} showVegOnly={showVegOnly} />
            </div>
          ))}
        </div>
      </div>
    );
  };