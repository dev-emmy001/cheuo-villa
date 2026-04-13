import React from 'react';
import { Typography } from '../ui/Typography';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';

export function ComparisonTable() {
  const rows = [
    { traditional: "Fake profit display", cheuo: "Real community wins" },
    { traditional: "Unproven strategies", cheuo: "Proven profitable strategy" },
    { traditional: "Limited knowledge", cheuo: "Elite guidance" },
    { traditional: "Outdated courses", cheuo: "New courses per season" },
    { traditional: "Virtual training only", cheuo: "Hybrid (physical + virtual)" },
    { traditional: "No after-session docs", cheuo: "Downloadable resources" }
  ];

  return (
    <SectionWrapper>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 max-w-6xl mx-auto">
        
        {/* Left Column: Traditional */}
        <div className="flex-1 w-full flex flex-col">
          <div className="pb-8 pl-8">
            <Typography variant="H3" className="text-2xl text-brand-dark/40 font-medium">Most Traditional Courses</Typography>
          </div>
          <Card className="flex-1 rounded-[2.5rem] bg-brand-dark/[0.02] border-brand-dark/[0.05] shadow-none flex flex-col p-8 sm:p-12 space-y-6">
            {rows.map((row, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="w-2 h-2 rounded-full bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors"></div>
                <Typography variant="Body" className="text-xl text-brand-dark/60">{row.traditional}</Typography>
              </div>
            ))}
          </Card>
        </div>

        {/* Right Column: Cheuo-Villa */}
        <div className="flex-1 w-full flex flex-col mt-12 lg:mt-0">
          <div className="pb-8 pl-8 flex items-center gap-3">
             <Typography variant="H3" className="text-3xl text-brand-dark font-extrabold">Cheuo-Villa</Typography>
             <span className="px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full">The Standard</span>
          </div>
          <Card className="flex-1 rounded-[2.5rem] bg-brand-green/[0.04] border-brand-green/20 shadow-[0_8px_40px_-12px_rgba(136,190,42,0.15)] flex flex-col p-8 sm:p-12 space-y-6">
            {rows.map((row, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-bold text-xs group-hover:bg-brand-green group-hover:text-white transition-colors">
                  ✓
                </div>
                <Typography variant="Body" className="text-xl text-brand-dark font-semibold">{row.cheuo}</Typography>
              </div>
            ))}
          </Card>
        </div>

      </div>
    </SectionWrapper>
  );
}
