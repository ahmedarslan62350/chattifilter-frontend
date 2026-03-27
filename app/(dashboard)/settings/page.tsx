"use client";

import React from "react";
import {
  User,
  Mail,
  Bell,
  Shield,
  Smartphone,
  Globe,
  LogOut,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  return (
    // <div className="space-y-8 max-w-4xl">
    //   <div>
    //     <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
    //     <p className="text-slate-400">Manage your account preferences and integrations.</p>
    //   </div>

    //   <div className="space-y-6">
    //     {/* Profile Section */}
    //     <div className="glass p-8 rounded-[32px]">
    //       <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
    //         <User className="w-5 h-5 text-accent-cyan" /> Profile Information
    //       </h3>
    //       <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
    //         <div className="relative group">
    //           <div className="w-24 h-24 rounded-3xl bg-gradient-primary p-[2px]">
    //             <div className="w-full h-full rounded-[22px] bg-[#0A0E1A] flex items-center justify-center overflow-hidden">
    //                <User className="w-12 h-12 text-slate-700" />
    //             </div>
    //           </div>
    //           <button className="absolute -bottom-2 -right-2 bg-white text-black p-2 rounded-xl shadow-lg hover:scale-110 transition-transform">
    //             <Sparkles className="w-4 h-4" />
    //           </button>
    //         </div>
    //         <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
    //           <div className="space-y-2">
    //             <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
    //             <input type="text" defaultValue="Ahmed Arslan" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-cyan/50" />
    //           </div>
    //           <div className="space-y-2">
    //             <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
    //             <input type="email" defaultValue="ahmed@sutorium.ai" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-cyan/50" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Notifications */}
    //     <div className="glass p-8 rounded-[32px]">
    //       <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
    //         <Bell className="w-5 h-5 text-accent-purple" /> Notifications
    //       </h3>
    //       <div className="space-y-4">
    //         {[
    //           { title: 'New Audience Signal', desc: 'Get notified when a high-priority signal is detected.', enabled: true },
    //           { title: 'Competitor Alert', desc: 'Weekly summary of competitor audience trends.', enabled: true },
    //           { title: 'Quota Warning', desc: 'Alert when you reach 80% of your monthly quota.', enabled: false },
    //         ].map((item, i) => (
    //           <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors">
    //             <div>
    //               <p className="text-sm font-bold text-white">{item.title}</p>
    //               <p className="text-xs text-slate-500">{item.desc}</p>
    //             </div>
    //             <button className={cn(
    //               "w-12 h-6 rounded-full transition-all relative",
    //               item.enabled ? "bg-accent-cyan" : "bg-slate-800"
    //             )}>
    //               <div className={cn(
    //                 "absolute top-1 w-4 h-4 rounded-full bg-white transition-all",
    //                 item.enabled ? "right-1" : "left-1"
    //               )} />
    //             </button>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Integrations */}
    //     <div className="glass p-8 rounded-[32px]">
    //       <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
    //         <Globe className="w-5 h-5 text-accent-magenta" /> Connected Accounts
    //       </h3>
    //       <div className="space-y-4">
    //         {[
    //           { name: 'YouTube', status: 'Connected', icon: Youtube, color: 'text-red-500' },
    //           { name: 'Instagram', status: 'Connected', icon: Instagram, color: 'text-pink-500' },
    //           { name: 'TikTok', status: 'Not Connected', icon: Smartphone, color: 'text-white' },
    //         ].map((acc, i) => (
    //           <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-white/5">
    //             <div className="flex items-center gap-4">
    //               <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
    //                 <acc.icon className={cn("w-5 h-5", acc.color)} />
    //               </div>
    //               <div>
    //                 <p className="text-sm font-bold text-white">{acc.name}</p>
    //                 <p className="text-xs text-slate-500">{acc.status}</p>
    //               </div>
    //             </div>
    //             <button className={cn(
    //               "text-xs font-bold px-4 py-2 rounded-xl border transition-all",
    //               acc.status === 'Connected' ? "border-white/10 text-slate-400 hover:text-white" : "border-accent-cyan/50 text-accent-cyan hover:bg-accent-cyan/10"
    //             )}>
    //               {acc.status === 'Connected' ? 'Disconnect' : 'Connect'}
    //             </button>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <button className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl text-accent-magenta font-bold hover:bg-accent-magenta/5 transition-all">
    //       <LogOut className="w-5 h-5" /> Sign Out
    //     </button>
    //   </div>
    // </div>

    <></>
  );
}
