'use client';

import React, { useState } from 'react';
import { login } from './actions';
import { Button } from '../../../components/ui/Button';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const res = await login(formData);
    
    if (res?.error) {
      setError(res.error);
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-sm p-8 bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/70 text-sm mb-2" htmlFor="email">Email</label>
            <input 
              id="email"
              name="email"
              type="email" 
              required
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue text-white"
            />
          </div>
          <div>
            <label className="block text-white/70 text-sm mb-2" htmlFor="password">Password</label>
            <input 
              id="password"
              name="password"
              type="password" 
              required
              className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-xl focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue text-white"
            />
          </div>
          
          {error && <p className="text-red-400 text-sm">{error}</p>}
          
          <Button 
            type="submit" 
            variant="primary" 
            className="w-full mt-4"
            disabled={loading}
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </Button>
        </form>
      </div>
    </div>
  );
}
