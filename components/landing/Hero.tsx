import React from 'react';
import Link from 'next/link';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { SectionWrapper } from '../ui/SectionWrapper';

export function Hero() {
  return (
    <SectionWrapper className="pt-40 md:pt-56 pb-20 grid place-items-center relative overflow-hidden bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(8,137,204,0.06),transparent)]">

      <div className="max-w-5xl mx-auto space-y-10 text-center relative z-10">
        <div className="inline-block animate-fade-in-up">
          {/* <Badge color="sky" className="px-5 py-2 shadow-sm bg-white border border-brand-sky/20">The African Wall-Street</Badge> */}
        </div>

        <Typography variant="H1" className="text-5xl sm:text-6xl md:text-7xl !leading-[1.1] tracking-tight font-extrabold max-w-4xl mx-auto">
          Africa's First All-in-One Sponsored Trading Ecosystem
        </Typography>

        <Typography variant="Body" className="max-w-2xl mx-auto text-lg md:text-2xl text-brand-dark/60 leading-relaxed font-medium">
          Sponsored yearly training by verified profitable traders with proven strategies and real profits.
        </Typography>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
          <Link href="/chronicle" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full h-14 px-10 text-lg">
              Start your Chronicle
            </Button>
          </Link>
          <Link href="/whitepaper" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full h-14 px-10 text-lg border-brand-dark/10 text-brand-dark hover:bg-brand-dark/5 hover:border-brand-dark/20">
              Read Whitepaper
            </Button>
          </Link>
        </div>
      </div>

    </SectionWrapper>
  );
}
