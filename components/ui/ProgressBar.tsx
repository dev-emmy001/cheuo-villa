import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 to 100
  className?: string;
}

export function ProgressBar({ progress, className = '' }: ProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={`w-full h-1.5 bg-brand-dark/10 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-brand-blue transition-all duration-500 ease-out rounded-full"
        style={{ width: `${clampedProgress}%` }}
      />
    </div>
  );
}
