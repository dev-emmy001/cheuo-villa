import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#121212] text-[#f3f4f6]">
      <header className="fixed top-0 left-0 w-full bg-[#1a1a1a] border-b border-white/10 z-50">
        <div className="flex h-16 items-center justify-between px-6">
          <Link href="/admin" className="font-bold text-lg text-white">Cheuo-Villa Admin</Link>
        </div>
      </header>
      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}
