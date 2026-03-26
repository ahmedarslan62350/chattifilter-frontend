'use client';

import React from 'react';
import { 
  Search, 
  Filter, 
  Youtube, 
  Instagram, 
  Play, 
  ArrowUpRight, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Download
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const videos = [
  { id: '1', title: 'Mastering Next.js 15 App Router', platform: 'Youtube', totalComments: 1240, valuableComments: 42, status: 'Processed', lastProcessed: '2 hours ago', level: 'Deep' },
  { id: '2', title: 'Tailwind CSS v4 Deep Dive', platform: 'Youtube', totalComments: 842, valuableComments: 18, status: 'Processing', lastProcessed: 'Just now', level: 'Standard' },
  { id: '3', title: '10 Tips for Better UI Design', platform: 'Instagram', totalComments: 3102, valuableComments: 124, status: 'Processed', lastProcessed: '1 day ago', level: 'Deep' },
  { id: '4', title: 'Framer Motion for Beginners', platform: 'Youtube', totalComments: 560, valuableComments: 12, status: 'Queued', lastProcessed: '-', level: 'N/A' },
  { id: '5', title: 'Building a SaaS with AI', platform: 'Youtube', totalComments: 2450, valuableComments: 89, status: 'Processed', lastProcessed: '3 days ago', level: 'Deep' },
  { id: '6', title: 'My Daily Routine as a Dev', platform: 'Instagram', totalComments: 120, valuableComments: 5, status: 'Processed', lastProcessed: '5 days ago', level: 'Standard' },
];

export default function VideoListPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Your Videos</h1>
          <p className="text-slate-400">Manage and analyze your content performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="glass px-4 py-2 rounded-xl text-sm font-bold text-white flex items-center gap-2 hover:bg-white/10 transition-all">
            <Download className="w-4 h-4" /> Export Data
          </button>
          <button className="bg-gradient-primary text-white px-6 py-2 rounded-xl text-sm font-bold hover:scale-105 transition-transform shadow-lg">
            + Add New Video
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="glass p-4 rounded-2xl flex flex-wrap items-center gap-4">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input 
            type="text" 
            placeholder="Filter by title..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent-cyan/50"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs font-bold text-slate-400 focus:outline-none hover:border-white/20 transition-all">
            <option>All Platforms</option>
            <option>Youtube</option>
            <option>Instagram</option>
          </select>
          <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs font-bold text-slate-400 focus:outline-none hover:border-white/20 transition-all">
            <option>All Status</option>
            <option>Processed</option>
            <option>Processing</option>
            <option>Queued</option>
          </select>
          <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Video Table */}
      <div className="glass rounded-[32px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-[10px] uppercase tracking-widest font-bold text-slate-500">
                <th className="px-8 py-4">Video</th>
                <th className="px-8 py-4">Platform</th>
                <th className="px-8 py-4 text-center">Total Comments</th>
                <th className="px-8 py-4 text-center">Valuable Signals</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">AI Level</th>
                <th className="px-8 py-4">Last Processed</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {videos.map((video, i) => (
                <motion.tr 
                  key={video.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-white/5 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <Link href={`/videos/${video.id}`} className="flex items-center gap-3">
                      <div className="w-16 h-10 rounded-lg bg-slate-800 overflow-hidden relative shrink-0">
                         <img src={`https://picsum.photos/seed/vid-${video.id}/120/80`} alt="Thumb" className="w-full h-full object-cover opacity-60" />
                         <Play className="absolute inset-0 m-auto w-4 h-4 text-white fill-white" />
                      </div>
                      <span className="text-sm font-semibold text-white group-hover:text-accent-cyan transition-colors line-clamp-1">{video.title}</span>
                    </Link>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      {video.platform === 'Youtube' ? <Youtube className="w-4 h-4 text-red-500" /> : <Instagram className="w-4 h-4 text-pink-500" />}
                      <span className="text-xs text-slate-400 font-medium">{video.platform}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-center text-sm text-slate-300 font-mono">{video.totalComments.toLocaleString()}</td>
                  <td className="px-8 py-5 text-center">
                    <span className="text-sm font-bold text-accent-cyan">{video.valuableComments}</span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        video.status === 'Processed' ? 'bg-emerald-400' : 
                        video.status === 'Processing' ? 'bg-accent-purple animate-pulse' : 'bg-slate-600'
                      }`} />
                      <span className="text-xs font-medium text-slate-400">{video.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "text-[10px] font-bold px-2 py-1 rounded-md border uppercase tracking-wider",
                      video.level === 'Deep' ? "bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan" :
                      video.level === 'Standard' ? "bg-accent-purple/10 border-accent-purple/30 text-accent-purple" :
                      "bg-white/5 border-white/10 text-slate-500"
                    )}>
                      {video.level}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-xs text-slate-500">{video.lastProcessed}</td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <Link href={`/videos/${video.id}`} className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                      <button className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-6 border-t border-white/5 flex items-center justify-between">
          <p className="text-xs text-slate-500">Showing 1-6 of 24 videos</p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-white/10 text-slate-500 hover:text-white disabled:opacity-50" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((p) => (
                <button key={p} className={cn(
                  "w-8 h-8 rounded-lg text-xs font-bold transition-all",
                  p === 1 ? "bg-gradient-primary text-white" : "text-slate-500 hover:bg-white/5"
                )}>
                  {p}
                </button>
              ))}
            </div>
            <button className="p-2 rounded-lg border border-white/10 text-slate-500 hover:text-white">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
