'use client';

import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export function DashboardHeader() {
  return (
    <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-40 bg-[#0A0E1A]/50 backdrop-blur-md">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-accent-cyan transition-colors" />
          <input 
            type="text" 
            placeholder="Search videos, insights, or competitors..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-accent-magenta rounded-full border-2 border-[#0A0E1A]" />
        </button>
        
        <div className="h-8 w-[1px] bg-white/10 mx-2" />
        
        <button className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-white/5 transition-all group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-white">Ahmed Arslan</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Creator Pro</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple p-[1px]">
            <div className="w-full h-full rounded-[11px] bg-[#0A0E1A] flex items-center justify-center overflow-hidden">
               <User className="w-6 h-6 text-slate-400" />
            </div>
          </div>
        </button>
      </div>
    </header>
  );
}
