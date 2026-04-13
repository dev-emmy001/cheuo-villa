import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: 'blue' | 'sky' | 'green' | 'dark';
}

export function Badge({
  className = '',
  color = 'blue',
  children,
  ...props
}: BadgeProps) {
  const colors = {
    blue: 'bg-brand-blue/10 text-brand-blue',
    sky: 'bg-brand-sky/10 text-brand-sky',
    green: 'bg-brand-green/10 text-brand-green',
    dark: 'bg-brand-dark/10 text-brand-dark',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${colors[color]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
