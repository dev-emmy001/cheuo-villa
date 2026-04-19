"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import Image from 'next/image';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 w-full z-50 px-4 pointer-events-none">
      <header className="max-w-5xl mx-auto bg-[#1a1a1a]/95 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] rounded-2xl md:rounded-full pointer-events-auto transition-all duration-300">
        <div className="flex justify-between items-center h-16 px-6 sm:px-8">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logos/white-ver.png" alt="Logo" width={180} height={50} />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-sm font-semibold text-white hover:text-brand-blue transition-colors">
              Home
            </Link>
            <Link href="/whitepaper" className="text-sm font-semibold text-white/70 hover:text-brand-blue transition-colors">
              Whitepaper
            </Link>
            <Link href="/chronicle" className="text-sm font-semibold text-white/70 hover:text-brand-blue transition-colors">
              Chronicle
            </Link>
          </nav>

          <div className="hidden md:flex items-center">
            <Link href="/chronicle">
              <Button variant="primary" size="sm" className="px-6">Start now</Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-blue focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 border-t border-white/10 space-y-4">
            <Link href="/" className="block text-base font-semibold text-white hover:text-brand-blue transition-colors">
              Home
            </Link>
            <Link href="/whitepaper" className="block text-base font-semibold text-white/70 hover:text-brand-blue transition-colors">
              Whitepaper
            </Link>
            <Link href="/chronicle" className="block text-base font-semibold text-white/70 hover:text-brand-blue transition-colors">
              Chronicle
            </Link>
            <div className="pt-2">
              <Link href="/chronicle">
                <Button variant="primary" className="w-full">Start now</Button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
