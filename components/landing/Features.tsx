import React from 'react';
import { Typography } from '../ui/Typography';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { SectionWrapper } from '../ui/SectionWrapper';

export function Features() {
  const features = [
    // {
    //   title: "Yearly updated masterclass",
    //   desc: "Stay ahead of the curve with fresh strategies taught by proven experts each season.",
    //   color: "bg-brand-blue"
    // },
    {
      title: "All-in-one crypto training",
      desc: "a holistic approach combining features defi, futures and nft trading tailored for the African market .",
      color: "bg-brand-sky"
    },
    {
      title: "Verified tutors",
      desc: "learn only from mentors with verified and transparent profit track records.",
      color: "bg-brand-green"
    },
    // {
    //   title: "All-in-one crypto training",
    //   desc: "A holistic approach combining spot, futures, and DeFi tailored for the African market.",
    //   color: "bg-brand-dark"
    // }
  ];

  const tags = ["Futures", "DeFi", "Degen", "Meme Trading", "NFT Trading"];

  return (
    <SectionWrapper>
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
        <Typography variant="H2">The African Wall Street</Typography>
        <Typography variant="Body" className="text-sm md:text-base text-brand-dark/60 font-medium max-w-2xl mx-auto leading-relaxed">
          We're building the African trading Wall-Street where anyone can learn how
          to how the market works, able to trade independently and become long
          term profitable traders.
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24 max-w-5xl mx-auto">
        {features.map((feature, idx) => (
          <Card key={idx} className="p-10 flex flex-col items-start bg-brand-dark hover:bg-brand-dark/[0.01] transition-colors border-none ring-1 ring-brand-dark/[0.04]">
            {/* <div className={`w-12 h-12 rounded-2xl ${feature.color}/10 flex items-center justify-center mb-8`}>
              <div className={`w-4 h-4 rounded-full ${feature.color}`}></div>
            </div> */}
            <Typography variant="H3" className="text-2xl mb-3">{feature.title}</Typography>
            <Typography variant="Body" className="text-lg text-brand-dark/60 leading-relaxed">{feature.desc}</Typography>
          </Card>
        ))}
      </div>

      {/* <div className="flex flex-col items-center space-y-8 bg-white/50 backdrop-blur-xl py-12 px-6 rounded-3xl max-w-4xl mx-auto border border-brand-dark/[0.04]">
        <Typography variant="H3" className="text-2xl text-brand-dark/80">Tailored to your curiosity</Typography>
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag, idx) => (
            <Badge key={idx} color="dark" className="px-6 py-3 text-sm rounded-xl font-bold bg-white border border-brand-dark/10 text-brand-dark hover:border-brand-dark/30 transition-colors cursor-default shadow-sm">
              {tag}
            </Badge>
          ))}
        </div>
        <Typography variant="Caption" className="pt-2 text-brand-dark/40 font-semibold tracking-widest uppercase">Personalised experience</Typography>
      </div> */}
    </SectionWrapper>
  );
}
