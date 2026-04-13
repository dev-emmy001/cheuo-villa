import React from 'react';

type TypographyVariant = 'H1' | 'H2' | 'H3' | 'Body' | 'Caption' | 'Label';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
}

export function Typography({
  className = '',
  variant = 'Body',
  as,
  children,
  ...props
}: TypographyProps) {
  const elements: Record<TypographyVariant, React.ElementType> = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    Body: 'p',
    Caption: 'p',
    Label: 'label',
  };

  const Component = as || elements[variant];

  const variants: Record<TypographyVariant, string> = {
    H1: 'text-4xl md:text-5xl font-bold tracking-tight text-brand-dark',
    H2: 'text-3xl md:text-4xl font-bold tracking-tight text-brand-dark',
    H3: 'text-2xl md:text-3xl font-semibold tracking-tight text-brand-dark',
    Body: 'text-base text-brand-dark/80 font-normal leading-relaxed',
    Caption: 'text-sm text-brand-dark/60 font-medium',
    Label: 'text-sm font-semibold text-brand-dark uppercase tracking-wider',
  };

  return (
    <Component className={`font-montserrat ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
}
