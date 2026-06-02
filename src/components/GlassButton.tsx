import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface GlassButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'transparent' | 'glass';
  children: React.ReactNode;
  className?: string;
  showChevron?: boolean;
}

export const GlassButton: React.FC<GlassButtonProps> = ({ 
  variant = 'glass', 
  children, 
  className = '', 
  showChevron = false,
  ...props 
}) => {
  const baseClasses = "relative px-8 py-4 font-modern text-base font-semibold transition-all duration-300 select-none touch-manipulation flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#e4000b] hover:bg-[#ff0a16] text-white active:scale-95 rounded-full shadow-[0_8px_16px_rgba(228,0,11,0.4)]",
    transparent: "bg-transparent text-white/80 hover:text-white active:opacity-70 rounded-full",
    glass: "glass-panel text-white hover:bg-white/10 active:scale-95 !rounded-full !border-white/20"
  };

  return (
    <motion.button
      whileTap={variant === 'transparent' ? {} : { scale: 0.96 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showChevron && <ChevronRight size={18} strokeWidth={2.5} />}
    </motion.button>
  );
};
