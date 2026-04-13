import React from 'react';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function SectionWrapper({ className = '', children, ...props }: SectionWrapperProps) {
  return (
    <section
      className={`w-full py-24 md:py-32 ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}
