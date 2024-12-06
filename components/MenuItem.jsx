import React from 'react';
import { Flame, Info } from 'lucide-react';
import Icon from '@mdi/react';
import { mdiSquareCircle } from '@mdi/js';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { menuData, REGULAR_COLORS, VEG_COLORS } from '@/constants/constant';


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
  
  
  const SpicyIndicator = ({ level }) => (
    <span className="flex gap-0.5">
      {[...Array(level)].map((_, i) => (
        <Flame key={i} size={14} className="text-[#A13333]" />
      ))}
    </span>
  );
  

export const MenuItem = ({ name, description, price, isVeg, spicyLevel = 0, ingredients = [], showVegOnly }) => {
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