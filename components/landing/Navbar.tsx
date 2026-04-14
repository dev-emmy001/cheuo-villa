import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import Image from 'next/image';

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 w-full z-50 px-4 pointer-events-none">
      <header className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md border border-brand-dark/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] rounded-full pointer-events-auto">
        <div className="flex justify-between items-center h-16 px-6 sm:px-8">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-extrabold tracking-tight text-brand-dark font-inter">
              <Image src="/logos/logo.png" alt="Logo" width={150} height={50} />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-sm font-semibold text-brand-dark hover:text-brand-blue transition-colors">
              Home
            </Link>
            <Link href="/whitepaper" className="text-sm font-semibold text-brand-dark/70 hover:text-brand-blue transition-colors">
              Whitepaper
            </Link>
            <Link href="/chronicle" className="text-sm font-semibold text-brand-dark/70 hover:text-brand-blue transition-colors">
              Chronicle
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Link href="/chronicle">
              <Button variant="primary" size="sm" className="px-6">Start now</Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
