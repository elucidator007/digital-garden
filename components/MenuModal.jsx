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
import { menuData } from '@/constants/menuData';


const REGULAR_COLORS = {
    background: '#E4C59E',
    primary: '#040303',
    secondary: '#461111',
    accent: '#A13333',
    border: '#B3541E'
  };
  
  const VEG_COLORS = {
    background: '#C4DAD2',
    primary: '#16423C',
    secondary: '#6A9C89',
    accent: '#6A9C89',
    border: '#C4DAD2'
  };

const SpicyIndicator = ({ level }) => (
  <span className="flex gap-0.5">
    {[...Array(level)].map((_, i) => (
      <Flame key={i} size={14} className="text-[#A13333]" />
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

const MenuItem = ({ name, description, price, isVeg, spicyLevel = 0, ingredients = [], showVegOnly }) => {
    const colors = showVegOnly ? VEG_COLORS : REGULAR_COLORS;
    
    return (
      <div className="mb-3 transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-start gap-2">
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <FoodTypeIcon isVeg={isVeg} />
              <h3 
                className="text-base font-medium"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: colors.primary
                }}
              >
                {name}
              </h3>
              {spicyLevel > 0 && <SpicyIndicator level={spicyLevel} />}
            </div>
            <p 
              className="text-sm mt-0.5"
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                color: colors.primary
              }}
            >
              {description}
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span 
              className="text-base"
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                color: colors.primary
              }}
            >
              ${price}
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="p-0.5 hover:bg-black/5 rounded-full transition-colors">
                    <Info size={14} style={{ color: colors.secondary }} />
                  </button>
                </TooltipTrigger>
                <TooltipContent 
                  className="p-2 max-w-xs"
                  style={{ 
                    backgroundColor: colors.background,
                    border: `1px solid ${colors.border}`
                  }}
                >
                  <p 
                    className="text-sm font-medium mb-0.5"
                    style={{ 
                      fontFamily: "'Montserrat', sans-serif",
                      color: colors.primary
                    }}
                  >
                    Ingredients:
                  </p>
                  <p
                    className="text-sm"
                    style={{ 
                      fontFamily: "'Cormorant Garamond', serif",
                      color: colors.secondary
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
  };
  
  const MenuSection = ({ title, items, showVegOnly }) => {
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
  
  const MenuModal = ({ open, onOpenChange }) => {
    const [showVegOnly, setShowVegOnly] = useState(false);
    const colors = showVegOnly ? VEG_COLORS : REGULAR_COLORS;
  
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent 
          className="max-w-[1200px] p-6 transition-all duration-300 ease-in-out"
          style={{ 
            backgroundColor: colors.background
          }}
        >
          <DialogHeader className="mb-4">
            <div className="flex justify-between items-center">
              <DialogTitle 
                className="text-3xl font-light"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: colors.primary
                }}
              >
                Our Menu
              </DialogTitle>
              <div className="flex items-center gap-2">
                <span 
                  className="text-sm"
                  style={{ 
                    fontFamily: "'Montserrat', sans-serif",
                    color: showVegOnly ? '#16423C' : colors.secondary
                  }}
                >
                  Vegetarian Only
                </span>
                <Switch
                  checked={showVegOnly}
                  onCheckedChange={setShowVegOnly}
                  className={showVegOnly ? "bg-[#6A9C89]" : ""}
                />
              </div>
            </div>
          </DialogHeader>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="border-r pr-6" style={{ borderColor: colors.border }}>
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
  
          <div className="flex flex-col items-center gap-2 mt-4 pt-4 border-t" style={{ borderColor: colors.border }}>
            <div 
              className="flex items-center justify-center gap-6"
              style={{ 
                fontFamily: "'Montserrat', sans-serif",
                color: colors.secondary
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
                <Flame size={12} style={{ color: colors.accent }} />
                Spicy Level
              </span>
              <span className="flex items-center gap-1.5">
                <Info size={12} style={{ color: colors.secondary }} />
                Ingredients
              </span>
            </div>
            <p 
              className="text-xs"
              style={{ 
                fontFamily: "'Montserrat', sans-serif",
                color: colors.secondary
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