import React from 'react';
import Link from 'next/link';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { SectionWrapper } from '../ui/SectionWrapper';

export function Hero() {
  return (
    <SectionWrapper className="pt-40 md:pt-56 pb-20 grid place-items-center relative overflow-hidden bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(8,137,204,0.06),transparent)]">

      {/* Animated Glowing Background Orbs */}
      <div className="absolute top-0 md:top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[800px] md:h-[500px] bg-brand-blue/20 blur-[100px] md:blur-[120px] rounded-full mix-blend-screen pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-1/4 md:top-20 right-0 md:right-20 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-brand-green/10 blur-[80px] md:blur-[100px] rounded-full mix-blend-screen pointer-events-none animate-pulse delay-700" style={{ animationDuration: '6s' }}></div>

      <div className="max-w-5xl mx-auto space-y-10 text-center relative z-10">
        <Typography variant="H1" className="text-4xl sm:text-6xl md:text-7xl !leading-[1.1] tracking-tight font-extrabold max-w-4xl mx-auto">
          Africa's First All-in-One Sponsored Trading Ecosystem
        </Typography>

        <Typography variant="Body" className="max-w-2xl mx-auto text-lg md:text-2xl text-brand-dark/60 leading-relaxed font-medium">
          Sponsored yearly training by verified profitable traders with proven strategies and real profits.
        </Typography>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6">
          <Link href="/chronicle" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="relative group w-full h-14 px-10 text-lg">
              Save your sponsored spot
            </Button>
          </Link>
          <Link href="/whitepaper" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full h-14 px-10 text-lg border-white/10 text-white hover:bg-white/5 hover:border-white/30">
              Read Whitepaper
            </Button>
          </Link>
        </div>
      </div>

    </SectionWrapper>
  );
}
