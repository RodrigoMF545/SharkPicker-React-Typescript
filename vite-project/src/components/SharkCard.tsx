import React, { useState } from 'react';
import { Shark } from '../types/shark';

interface SharkCardProps {
  shark: Shark;
  
  onselect?: (shark: Shark) => void;
}

const SharkCard: React.FC<SharkCardProps> = ({ shark, onselect }) => {
  const [isHovered, setIsHovered] = useState(false);

      const handleSelected = () => {
      if (onselect) {
        onselect(shark);
      }
    };

  return (
    <div 
    onClick={handleSelected}
      className={`
        bg-white/5 
        rounded-lg 
        overflow-hidden 
        backdrop-blur-sm 
        border 
        transition-all 
        duration-300 
        ${isHovered 
          ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' 
          : 'border-white/10'
        }
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video bg-black/20">
        <img
          src={`http://localhost:4000/${shark.image.src}`}
          alt={shark.image.alt}
          className={`
            w-full 
            h-full 
            object-contain 
            transition-transform 
            duration-300
            ${isHovered ? 'scale-105' : 'scale-100'}
          `}
        />
      </div>
      <div className="p-2">
        <div className={`
          inline-block 
          rounded 
          px-2 
          py-0.5
          transition-colors 
          duration-300
          ${isHovered ? 'bg-cyan-300' : 'bg-yellow-300'}
        `}>
          <span className="text-black text-sm font-medium">{shark.title}</span>
        </div>
      </div>
    </div>
  );
};

export default SharkCard;