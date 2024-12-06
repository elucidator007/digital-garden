'use client'

import React, { useState } from 'react';
import { Flame, Info } from 'lucide-react';
import Icon from '@mdi/react';
import { mdiSquareCircle } from '@mdi/js';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { menuData, REGULAR_COLORS, VEG_COLORS } from '@/constants/constant';
import { MenuSection } from './MenuSection';
  
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