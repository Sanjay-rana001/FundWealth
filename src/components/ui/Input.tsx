import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = "", ...props }) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label className="text-sm font-semibold text-foreground/80">{label}</label>}
      <input 
        className="px-4 py-3 rounded-xl border border-border-color bg-surface  focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-shadow duration-200"
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
