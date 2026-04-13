import React from 'react';
import Link from 'next/link';
import { Typography } from '../ui/Typography';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';

export function ClosingCTA() {
  return (
    <SectionWrapper className="relative overflow-hidden mb-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side: Stats mimicking sample 2 colored blocks */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="bg-brand-blue text-white rounded-[2rem] p-10 flex flex-col justify-end min-h-[240px] shadow-xl shadow-brand-blue/20 transform hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-white/20 rounded-full mb-auto flex items-center justify-center">
              <span className="text-white font-bold text-xl">%</span>
            </div>
            <div className="text-3xl font-extrabold mb-2 tracking-tight">100%</div>
            <div className="text-lg font-medium text-white/80">Sponsored Tuition</div>
          </div>

          <div className="bg-brand-green text-white rounded-[2rem] p-10 flex flex-col justify-end min-h-[240px] shadow-xl shadow-brand-green/20 transform sm:translate-y-8 hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-white/20 rounded-full mb-auto flex items-center justify-center">
              <span className="text-white font-bold text-xl">↑</span>
            </div>
            <div className="text-3xl font-extrabold mb-2 tracking-tight">100+</div>
            <div className="text-lg font-medium text-white/80">Traders</div>
          </div>
        </div>

        {/* Right Side: CTA Text */}
        <div className="flex-1 gap-4 flex flex-col items-start text-left lg:pl-10">
          <Typography variant="H2">
            Ready to give yourself a 6-figure growth chance?
          </Typography>

          <Typography variant="Body">
            Join the ecosystem built by real traders, for real traders. Elevate your portfolio with battle-tested strategies.
          </Typography>

          <Link href="/chronicle" >
            <Button variant="primary" size="lg" className="h-14 px-10 text-lg shadow-lg">
              Start your Chronicle
            </Button>
          </Link>
        </div>

      </div>
    </SectionWrapper>
  );
}
