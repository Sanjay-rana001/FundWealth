import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = "primary", 
  className = "", 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 ease-out active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 border border-primary-500/50",
    secondary: "bg-surface-card text-foreground shadow-sm hover:shadow-md border border-border-color hover:border-primary-200",
    outline: "border-2 border-primary-500 text-primary-600 hover:bg-primary-50 :bg-primary-900/30",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} px-3 py-2 md:px-6 md:py-3 text-xs md:text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
