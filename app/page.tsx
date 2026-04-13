import React from 'react';
import { Navbar } from '../components/landing/Navbar';
import { Hero } from '../components/landing/Hero';
import { Features } from '../components/landing/Features';
import { ComparisonTable } from '../components/landing/ComparisonTable';
import { Roadmap } from '../components/landing/Roadmap';
import { FAQ } from '../components/landing/FAQ';
import { ClosingCTA } from '../components/landing/ClosingCTA';
import { Footer } from '../components/landing/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <ComparisonTable />
      <Roadmap />
      <FAQ />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
