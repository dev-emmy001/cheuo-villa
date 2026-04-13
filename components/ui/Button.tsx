import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  className = '',
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:ring-offset-2 rounded-full active:scale-[0.98]';
  
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-brand-blue text-white hover:bg-brand-blue/90 active:bg-brand-blue/80',
    outline: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/10 active:bg-brand-blue/20',
    ghost: 'text-brand-dark hover:bg-brand-dark/5 active:bg-brand-dark/10',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'text-sm px-4 py-1.5',
    md: 'text-base px-6 py-2.5',
    lg: 'text-lg px-8 py-3.5',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
