import React from 'react';
import { Typography } from '../ui/Typography';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export function Roadmap() {
  const roadmapItems = [
    { title: "Futures", month: "May 2026", color: "brand-blue" },
    { title: "DeFi / Degen / Meme", month: "July 2026", color: "brand-green" },
    { title: "NFT", month: "October 2026", color: "brand-sky" }
  ];

  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row items-center md:items-stretch max-w-6xl mx-auto gap-12 lg:gap-24">

        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
          <Typography variant="Label" className="text-brand-blue mb-4 tracking-widest uppercase">The Chronicle Series</Typography>
          <Typography variant="H2" >
            Our 2026 Curriculum Roadmap
          </Typography>
          <Typography className='mt-2.5' variant="Body">
            A structured path through every major market domain, ensuring no stone is left unturned.
          </Typography>
        </div>

        <div className="flex-1 w-full space-y-6 relative before:absolute before:inset-y-6 before:left-8 before:w-px before:bg-brand-dark/10">
          {roadmapItems.map((item, idx) => (
            <Card key={idx} className="relative z-10 p-8 pl-16 rounded-[2rem] hover:-translate-y-1 transition-transform border-brand-dark/5 shadow-md shadow-brand-dark/[0.02]">
              <div className={`absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-${item.color} ring-8 ring-white`}></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Typography variant="H3" className="text-2xl">{item.title}</Typography>
                <Badge color={item.color.replace('brand-', '') as any} className="w-fit text-sm px-4 py-2 rounded-xl">
                  {item.month}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
