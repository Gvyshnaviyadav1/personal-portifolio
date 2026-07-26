import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98] cursor-pointer';

  const variants = {
    primary:
      'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-sm hover:shadow-md hover:shadow-indigo-500/20 focus:ring-indigo-600',
    secondary:
      'bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow-md focus:ring-slate-900',
    outline:
      'border border-slate-200 hover:border-indigo-300 text-slate-700 bg-white hover:bg-slate-50/80 focus:ring-indigo-500/20 shadow-2xs hover:shadow-xs hover:text-indigo-600',
    ghost: 'text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60 focus:ring-indigo-500/20',
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <span>Processing...</span> : children}
    </button>
  );
};

export default Button;
