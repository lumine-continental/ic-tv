import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface RetroButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'default' | 'primary';
  children: React.ReactNode;
  className?: string;
}

export const RetroButton: React.FC<RetroButtonProps> = ({ 
  variant = 'default', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseClasses = "relative px-6 py-4 font-pixel text-sm uppercase transition-colors select-none touch-manipulation active:scale-95";
  const variants = {
    default: "bg-[#1c1c1c] text-white retro-border hover:bg-[#2a2a2a]",
    primary: "bg-[#cd001a] text-white retro-border-red hover:bg-[#e6001d]"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
