import React from 'react';
import Link from 'next/link';
import { Typography } from '../ui/Typography';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-dark/[0.02] pt-24 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20 text-center md:text-left">
          
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-brand-dark font-inter mb-6">
              Cheuo<span className="text-brand-blue">-Villa</span>
            </Link>
            <Typography variant="Body" className="text-brand-dark/60 text-sm max-w-xs leading-relaxed">
              Africa's First All-in-One Platform for Sponsored Trading Ecosystem.
            </Typography>
          </div>

          <div className="flex flex-col space-y-4">
            <Typography variant="Label" className="text-brand-dark/80 font-bold mb-2">Program</Typography>
            <Link href="/chronicle" className="text-brand-dark/60 hover:text-brand-blue text-sm transition-colors">Start your Chronicle</Link>
            <Link href="#roadmap" className="text-brand-dark/60 hover:text-brand-blue text-sm transition-colors">2026 Roadmap</Link>
            <Link href="#features" className="text-brand-dark/60 hover:text-brand-blue text-sm transition-colors">Benefits</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <Typography variant="Label" className="text-brand-dark/80 font-bold mb-2">Resources</Typography>
            <Link href="/whitepaper" className="text-brand-dark/60 hover:text-brand-blue text-sm transition-colors">Whitepaper</Link>
            <Link href="#faq" className="text-brand-dark/60 hover:text-brand-blue text-sm transition-colors">FAQ</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <Typography variant="Label" className="text-brand-dark/80 font-bold mb-2">Connect</Typography>
            <a href="#" className="text-brand-dark/60 hover:text-brand-blue text-sm transition-colors">Twitter (X)</a>
            <a href="#" className="text-brand-dark/60 hover:text-brand-blue text-sm transition-colors">Discord</a>
            <a href="#" className="text-brand-dark/60 hover:text-brand-blue text-sm transition-colors">Email</a>
          </div>

        </div>

        <div className="border-t border-brand-dark/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Typography variant="Caption" className="text-brand-dark/40 font-medium">
            &copy; {year} Cheuo-Villa. All rights reserved.
          </Typography>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-xs text-brand-dark/40 hover:text-brand-dark transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-brand-dark/40 hover:text-brand-dark transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
