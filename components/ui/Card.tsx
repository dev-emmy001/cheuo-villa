import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-3xl shadow-[0_8px_40px_-12px_rgba(30,30,30,0.08)] border border-brand-dark/[0.03] overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
