'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Video, 
  Users, 
  CreditCard, 
  Settings, 
  ChevronRight,
  Bell,
  Search,
  Menu,
  X,
  Sparkles
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Videos', href: '/videos', icon: Video, badge: '3' },
  { name: 'Competitors', href: '/competitors', icon: Users },
  { name: 'Subscriptions', href: '/subscriptions', icon: CreditCard },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <aside className={cn(
      "fixed left-0 top-0 h-screen z-50 transition-all duration-300 border-r border-white/5 bg-[#0A0E1A]/80 backdrop-blur-xl",
      isOpen ? "w-64" : "w-20"
    )}>
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center justify-between mb-10 px-2">
          {isOpen && (
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Sutorium</span>
            </Link>
          )}
          {!isOpen && (
             <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">S</span>
             </div>
          )}
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group relative",
                  isActive 
                    ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]" 
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive ? "text-accent-cyan" : "group-hover:text-accent-cyan")} />
                {isOpen && <span className="font-medium">{item.name}</span>}
                {isOpen && item.badge && (
                  <span className="ml-auto bg-accent-purple/20 text-accent-purple text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-accent-purple/30">
                    {item.badge}
                  </span>
                )}
                {!isOpen && isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent-cyan rounded-r-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5">
           {isOpen ? (
             <div className="glass rounded-2xl p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-accent-cyan" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Pro Plan</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-2">
                  <div className="bg-gradient-primary h-full w-3/4" />
                </div>
                <p className="text-[10px] text-slate-400">750 / 1,000 comments processed</p>
             </div>
           ) : (
             <div className="flex justify-center mb-4">
                <Sparkles className="w-5 h-5 text-accent-cyan animate-pulse" />
             </div>
           )}
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-center p-2 rounded-xl hover:bg-white/5 text-slate-400 transition-colors"
          >
            <ChevronRight className={cn("w-5 h-5 transition-transform", isOpen && "rotate-180")} />
          </button>
        </div>
      </div>
    </aside>
  );
}
