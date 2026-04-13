'use client';

import React, { useState } from 'react';
import { Typography } from '../ui/Typography';
import { SectionWrapper } from '../ui/SectionWrapper';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "How much does the program cost?", a: "The program is 100% sponsored. We believe in building a trading ecosystem where anyone can learn without the burden of paying tuition." },
    { q: "Who is eligible to join?", a: "Anyone eager to learn. Whether you're a complete beginner or looking to refine your strategies, our ecosystem welcomes you." },
    { q: "What is the expected time commitment?", a: "A few hours a week. It's designed to be flexible, but consistency is key to graduating as a verified profitable trader." },
    { q: "Are the tutors verified?", a: "Yes. All our tutors are verified profitable traders with proven, battle-tested strategies and transparent community wins." },
    { q: "How does the hybrid format work?", a: "Core theoretical classes are virtual, while strategic masterclasses and meetups handle the physical, immersive training." },
    { q: "How do I access the training dashboard?", a: "Once accepted, you will receive an invitation to create your profile and access all modules directly via your dashboard." }
  ];

  return (
    <SectionWrapper>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Typography variant="H2" className="text-4xl md:text-5xl">Frequently Asked Questions</Typography>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="divide-y divide-brand-dark/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left flex items-center justify-between focus:outline-none group"
                >
                  <Typography variant="H3" className="text-xl md:text-2xl font-semibold group-hover:text-brand-blue transition-colors">
                    {faq.q}
                  </Typography>
                  <div className={`ml-6 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-brand-dark/5 text-brand-dark transition-all duration-300 ${isOpen ? 'rotate-180 bg-brand-blue text-white' : ''}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <Typography variant="Body" className="text-lg text-brand-dark/60 leading-relaxed pr-12">
                    {faq.a}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
