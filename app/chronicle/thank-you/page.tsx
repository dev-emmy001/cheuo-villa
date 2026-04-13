'use client';

import React from 'react';
import Link from 'next/link';
import { Typography } from '../../../components/ui/Typography';
import { Button } from '../../../components/ui/Button';
import { SectionWrapper } from '../../../components/ui/SectionWrapper';

export default function ThankYouPage() {
  return (
    <SectionWrapper className="min-h-screen flex items-center justify-center bg-brand-dark/[0.01]">
      <div className="max-w-xl mx-auto text-center space-y-8 animate-fade-in-up">
        
        <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <Typography variant="H1" className="text-5xl md:text-6xl font-extrabold text-brand-dark">
          You're in.
        </Typography>
        
        <Typography variant="Body" className="text-xl md:text-2xl text-brand-dark/60 leading-relaxed max-w-md mx-auto">
          We've received your application. Expect feedback via email within a few days.
        </Typography>
        
        <div className="pt-8">
          <Link href="/">
            <Button variant="outline" size="lg" className="px-10 h-14 text-lg border-brand-dark/20 hover:bg-brand-dark/5">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
