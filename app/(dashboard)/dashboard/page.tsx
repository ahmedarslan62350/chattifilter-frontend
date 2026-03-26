'use client';

import React from 'react';
import { 
  TrendingUp, 
  MessageSquare, 
  Video as VideoIcon, 
  Sparkles, 
  ArrowUpRight, 
  ArrowDownRight,
  AlertCircle,
  ChevronRight,
  Youtube,
  Instagram,
  Play
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { motion } from 'motion/react';
import Link from 'next/link';

const data = [
  { name: 'Mon', comments: 4000, signals: 240 },
  { name: 'Tue', comments: 3000, signals: 139 },
  { name: 'Wed', comments: 2000, signals: 980 },
  { name: 'Thu', comments: 2780, signals: 390 },
  { name: 'Fri', comments: 1890, signals: 480 },
  { name: 'Sat', comments: 2390, signals: 380 },
  { name: 'Sun', comments: 3490, signals: 430 },
];

const sentimentData = [
  { name: 'Positive', value: 65, color: '#00F2FF' },
  { name: 'Neutral', value: 25, color: '#A855F7' },
  { name: 'Negative', value: 10, color: '#EC4899' },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Ahmed</h1>
          <p className="text-slate-400">Here's what happened with your audience today.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0E1A] bg-slate-800 overflow-hidden">
                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
              </div>
            ))}
          </div>
          <span className="text-xs font-medium text-slate-500">+12 new signals</span>
        </div>
      </div>

      {/* High Priority Alerts */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-6 rounded-3xl border-l-4 border-l-accent-cyan relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Sparkles className="w-32 h-32 text-accent-cyan" />
        </div>
        <div className="flex items-start gap-4 relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-accent-cyan/20 flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6 text-accent-cyan" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-white">Critical Audience Signal</h3>
              <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest">High Priority</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-3xl">
              Multiple users are asking for a deep dive into "Advanced Mesh Gradients" in your latest video. 
              This topic has a <span className="text-white font-bold">94% demand score</span> and is trending among your core audience.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all">
                Generate Script Outline
              </button>
              <button className="text-sm font-bold text-slate-400 hover:text-white transition-all">
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Comments', value: '42,892', trend: '+12.5%', icon: MessageSquare, color: 'text-accent-cyan' },
          { label: 'Valuable Signals', value: '1,204', trend: '+8.2%', icon: Sparkles, color: 'text-accent-purple' },
          { label: 'Pending Videos', value: '14', trend: '-2', icon: VideoIcon, color: 'text-accent-magenta' },
          { label: 'Growth Score', value: '84/100', trend: '+5.4%', icon: TrendingUp, color: 'text-emerald-400' },
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-3xl group hover:border-white/20 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-bold flex items-center gap-1 ${stat.trend.startsWith('+') ? 'text-emerald-400' : 'text-slate-500'}`}>
                {stat.trend.startsWith('+') ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.trend}
              </span>
            </div>
            <p className="text-sm text-slate-500 font-medium mb-1">{stat.label}</p>
            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass p-8 rounded-[32px]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-white">Engagement Trends</h3>
              <p className="text-sm text-slate-500">Comments vs AI Signals over time</p>
            </div>
            <select className="bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-xs font-medium focus:outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorComments" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00F2FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00F2FF" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSignals" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#A855F7" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#A855F7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0A0E1A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="comments" stroke="#00F2FF" strokeWidth={3} fillOpacity={1} fill="url(#colorComments)" />
                <Area type="monotone" dataKey="signals" stroke="#A855F7" strokeWidth={3} fillOpacity={1} fill="url(#colorSignals)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass p-8 rounded-[32px]">
          <h3 className="text-xl font-bold text-white mb-2">Audience Sentiment</h3>
          <p className="text-sm text-slate-500 mb-8">Overall emotional tone of comments</p>
          
          <div className="h-[200px] w-full mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sentimentData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" hide />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={32}>
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            {sentimentData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-slate-400 font-medium">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Videos Table Preview */}
      <div className="glass rounded-[32px] overflow-hidden">
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">Recent Videos</h3>
          <Link href="/videos" className="text-sm font-bold text-accent-cyan hover:underline flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-[10px] uppercase tracking-widest font-bold text-slate-500">
                <th className="px-8 py-4">Video Title</th>
                <th className="px-8 py-4">Platform</th>
                <th className="px-8 py-4">Comments</th>
                <th className="px-8 py-4">Signals</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { title: 'Mastering Next.js 15 App Router', platform: 'Youtube', comments: '1,240', signals: '42', status: 'Processed' },
                { title: 'Tailwind CSS v4 Deep Dive', platform: 'Youtube', comments: '842', signals: '18', status: 'Processing' },
                { title: '10 Tips for Better UI Design', platform: 'Instagram', comments: '3,102', signals: '124', status: 'Processed' },
              ].map((video, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-8 rounded-lg bg-slate-800 overflow-hidden relative">
                         <img src={`https://picsum.photos/seed/${i}/100/60`} alt="Thumb" className="w-full h-full object-cover opacity-60" />
                         <Play className="absolute inset-0 m-auto w-3 h-3 text-white fill-white" />
                      </div>
                      <span className="text-sm font-semibold text-white truncate max-w-[200px]">{video.title}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      {video.platform === 'Youtube' ? <Youtube className="w-4 h-4 text-red-500" /> : <Instagram className="w-4 h-4 text-pink-500" />}
                      <span className="text-xs text-slate-400 font-medium">{video.platform}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm text-slate-300">{video.comments}</td>
                  <td className="px-8 py-5">
                    <span className="text-sm font-bold text-accent-cyan">{video.signals}</span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${video.status === 'Processed' ? 'bg-emerald-400' : 'bg-accent-purple animate-pulse'}`} />
                      <span className="text-xs font-medium text-slate-400">{video.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <Link href={`/videos/${i}`} className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all inline-block">
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
