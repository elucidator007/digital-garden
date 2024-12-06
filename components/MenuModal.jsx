'use client'

import React, { useState } from 'react';
import { Flame, Info } from 'lucide-react';
import Icon from '@mdi/react';
import { mdiSquareCircle, mdiSquareCircleOutline } from '@mdi/js';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { menuData, COLORS, FONTS } from '@/constants/menuData';

const SpicyIndicator = ({ level }) => (
  <span className="flex gap-0.5">
    {[...Array(level)].map((_, i) => (
      <Flame key={i} size={14} className="text-[#FF6B6B]" />
    ))}
  </span>
);

const FoodTypeIcon = ({ isVeg }) => (
  isVeg ? 
    <Icon 
      path={mdiSquareCircle}
      size={0.7}
      className="text-green-600"
    /> : 
    <Icon 
      path={mdiSquareCircle}
      size={0.7}
      className="text-red-600"
    />
);

const MenuItem = ({ name, description, price, isVeg, spicyLevel = 0, ingredients = [] }) => (
    <div className="mb-3 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-start gap-2">
        <div className="flex-grow">
          <div className="flex items-center gap-2">
            <FoodTypeIcon isVeg={isVeg} />
            <h3 
              className="text-base font-medium"
              style={{ 
                fontFamily: FONTS.primary,
                color: COLORS.primary
              }}
            >
              {name}
            </h3>
            {spicyLevel > 0 && <SpicyIndicator level={spicyLevel} />}
          </div>
          <p 
            className="text-sm mt-0.5"
            style={{ 
              fontFamily: FONTS.secondary,
              color: COLORS.secondary
            }}
          >
            {description}
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span 
            className="text-base"
            style={{ 
              fontFamily: FONTS.secondary,
              color: COLORS.accent
            }}
          >
            ${price}
          </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="p-0.5 hover:bg-black/5 rounded-full transition-colors">
                  <Info size={14} style={{ color: COLORS.secondary }} />
                </button>
              </TooltipTrigger>
              <TooltipContent 
                className="p-2 max-w-xs"
                style={{ 
                  backgroundColor: COLORS.background,
                  border: `1px solid ${COLORS.border}`
                }}
              >
                <p 
                  className="text-sm font-medium mb-0.5"
                  style={{ 
                    fontFamily: FONTS.text,
                    color: COLORS.primary
                  }}
                >
                  Ingredients:
                </p>
                <p
                  className="text-sm"
                  style={{ 
                    fontFamily: FONTS.secondary,
                    color: COLORS.secondary
                  }}
                >
                  {ingredients.join(', ')}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
  
  const MenuSection = ({ title, items, showVegOnly }) => {
    const filteredItems = showVegOnly ? items.filter(item => item.isVeg) : items;
    
    if (filteredItems.length === 0) return null;
  
    return (
      <div className="mb-6 transition-all duration-300 ease-in-out">
        <div className="relative mb-4">
          <h2 
            className="text-xl mb-2"
            style={{ 
              fontFamily: FONTS.primary,
              color: COLORS.primary,
            }}
          >
            {title}
          </h2>
          <div className="flex items-center gap-2">
            <div 
              className="h-px flex-grow"
              style={{ 
                background: 'linear-gradient(90deg, #D4956A 0%, #E2C4A9 100%)' 
              }}
            />
            <svg height="8" width="8" className="text-[#D4956A]">
              <circle cx="4" cy="4" r="2" fill="currentColor"/>
            </svg>
            <div 
              className="h-px w-8"
              style={{ 
                background: 'linear-gradient(270deg, #D4956A 0%, #E2C4A9 100%)' 
              }}
            />
          </div>
        </div>
        <div className="grid transition-all duration-300 ease-in-out">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="transition-all duration-300 ease-in-out opacity-100"
              style={{
                animation: 'fadeIn 300ms ease-in-out'
              }}
            >
              <MenuItem {...item} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const MenuModal = ({ open, onOpenChange }) => {
    const [showVegOnly, setShowVegOnly] = useState(false);
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent 
        className="max-w-[1200px] p-6 transition-all duration-300 ease-in-out"
        style={{ 
            backgroundColor: showVegOnly ? COLORS.vegBackground : COLORS.background
        }}
        >
          <DialogHeader className="mb-4">
            <div className="flex justify-between items-center">
              <DialogTitle 
                className="text-3xl font-light"
                style={{ 
                  fontFamily: FONTS.primary,
                  color: COLORS.primary
                }}
              >
                Our Menu
              </DialogTitle>
              <div className="flex items-center gap-2">
                <span 
                  className={`text-sm ${showVegOnly ? 'text-green-700' : 'text-[#765C48]'}`}
                  style={{ fontFamily: FONTS.text }}
                >
                  Vegetarian Only
                </span>
                <Switch
                  checked={showVegOnly}
                  onCheckedChange={setShowVegOnly}
                  className="data-[state=checked]:bg-green-600"
                />
              </div>
            </div>
          </DialogHeader>
          
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="border-r pr-6" style={{ borderColor: COLORS.border }}>
              <MenuSection 
                title="Appetizers" 
                items={menuData.appetizers}
                showVegOnly={showVegOnly} 
              />
              <MenuSection 
                title="Pizzas" 
                items={menuData.pizzas}
                showVegOnly={showVegOnly} 
              />
            </div>
  
            {/* Right Column */}
            <div className="pl-6">
              <MenuSection 
                title="Chef's Specials" 
                items={menuData.chefsSpecials}
                showVegOnly={showVegOnly} 
              />
              <MenuSection 
                title="Desserts" 
                items={menuData.desserts}
                showVegOnly={showVegOnly} 
              />
            </div>
          </div>
  
          <div className="flex flex-col items-center gap-2 mt-4 pt-4 border-t" style={{ borderColor: COLORS.border }}>
            <div 
              className="flex items-center justify-center gap-6"
              style={{ 
                fontFamily: FONTS.text,
                color: COLORS.secondary
              }}
            >
              <span className="flex items-center gap-1.5">
                <Icon path={mdiSquareCircle} size={0.6} className="text-green-600" />
                Vegetarian
              </span>
              <span className="flex items-center gap-1.5">
                <Icon path={mdiSquareCircle} size={0.6} className="text-red-600" />
                Non-Vegetarian
              </span>
              <span className="flex items-center gap-1.5">
                <Flame size={12} className="text-[#FF6B6B]" />
                Spicy Level
              </span>
              <span className="flex items-center gap-1.5">
                <Info size={12} style={{ color: COLORS.secondary }} />
                Ingredients
              </span>
            </div>
            <p 
              className="text-xs"
              style={{ 
                fontFamily: FONTS.text,
                color: COLORS.secondary
              }}
            >
              * All our pizzas are cooked in a traditional wood-fired oven
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default MenuModal;