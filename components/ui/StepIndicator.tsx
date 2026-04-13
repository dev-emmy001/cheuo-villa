import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export function StepIndicator({
  currentStep,
  totalSteps,
  className = '',
}: StepIndicatorProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const step = index + 1;
        const isActive = step === currentStep;
        const isCompleted = step < currentStep;

        return (
          <React.Fragment key={step}>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-colors duration-300 ${
                isActive
                  ? 'bg-brand-blue text-white ring-4 ring-brand-blue/20'
                  : isCompleted
                  ? 'bg-brand-green text-white'
                  : 'bg-brand-dark/10 text-brand-dark/40'
              }`}
            >
              {isCompleted ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                step
              )}
            </div>
            {step < totalSteps && (
              <div
                className={`h-1 w-12 rounded-full transition-colors duration-300 ${
                  isCompleted ? 'bg-brand-green' : 'bg-brand-dark/10'
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
