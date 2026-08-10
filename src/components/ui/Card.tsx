import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", glass = true }) => {
  return (
    <div className={`rounded-2xl p-6 md:p-8 border border-border-color ${glass ? 'bg-white/60  backdrop-blur-xl shadow-xl' : 'bg-surface-card'} ${className}`}>
      {children}
    </div>
  );
};
