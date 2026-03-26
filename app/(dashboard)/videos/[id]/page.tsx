'use client';

import React from 'react';
import { 
  ChevronLeft, 
  Youtube, 
  MessageSquare, 
  Sparkles, 
  Zap, 
  ArrowUpRight, 
  Filter,
  CheckCircle2,
  AlertCircle,
  ThumbsUp,
  Reply,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

export default function VideoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const [activeTab, setActiveTab] = React.useState('signals');
  const [selectedSignal, setSelectedSignal] = React.useState<any>(null);
  const [selectedOpportunity, setSelectedOpportunity] = React.useState<any>(null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/videos" className="p-2 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Youtube className="w-4 h-4 text-red-500" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">YouTube Video Analysis</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Mastering Next.js 15 App Router</h1>
        </div>
        <div className="ml-auto flex items-center gap-3">
           <span className="bg-emerald-400/10 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded border border-emerald-400/20 uppercase tracking-wider">
            Processed
          </span>
          <button className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-white/10 transition-all">
            Refresh Analysis
          </button>
        </div>
      </div>

      {/* Video Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Comments', value: '1,240', icon: MessageSquare },
          { label: 'Valuable Signals', value: '42', icon: Sparkles },
          { label: 'Sentiment Score', value: '88%', icon: ThumbsUp },
          { label: 'Opportunity Score', value: '92', icon: Zap },
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-3xl">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">{stat.label}</p>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              <stat.icon className="w-5 h-5 text-accent-cyan" />
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 bg-white/5 p-1 rounded-2xl w-fit">
        {[
          { id: 'signals', label: 'Audience Signals', icon: Sparkles },
          { id: 'opportunities', label: 'Video Opportunities', icon: Lightbulb },
          { id: 'comments', label: 'All Comments', icon: MessageSquare },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all",
              activeTab === tab.id ? "bg-white text-black shadow-lg" : "text-slate-400 hover:text-white"
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'signals' && (
          <div className="grid grid-cols-1 gap-6">
            {[
              { 
                type: 'Trust Criticism', 
                comment: "why do they keep shaheen in the team — pak has zaman khan, abbas afridi, akif javed, ali raza, a lot of pacers", 
                freq: 'High (5)', 
                score: 82, 
                action: 'Clarify in Next Video', 
                reply: 'Bilkul sahi keh rahe ho — Shaheen ka pace aur form dono gir gaye hain, aur alternatives maujood hain. Agli video mein is par detail mein baat karenge.',
                reason: 'Viewers repeatedly question Shaheen\'s selection, aligning with the creator\'s analysis. A clear, evidence-based stance in the next video would strengthen trust and engagement.'
              },
              { 
                type: 'Question', 
                comment: "How do you handle middleware in the new App Router structure?", 
                freq: 'High', 
                score: 94, 
                action: 'Create Tutorial', 
                reply: 'Great question! Middleware is now handled at the root level. I\'ll be releasing a dedicated deep-dive on this next week to show you the exact patterns.',
                reason: 'High demand for technical implementation details regarding Next.js 15 middleware patterns.'
              },
              { 
                type: 'Feature Request', 
                comment: "Can you show how to integrate with Stripe using Server Actions?", 
                freq: 'Medium', 
                score: 88, 
                action: 'New Video Idea', 
                reply: 'On it! Adding this to the roadmap. Stripe + Server Actions is a powerful combo that many are asking for.',
                reason: 'Viewers are looking for end-to-end payment integration examples using modern Next.js features.'
              },
            ].map((signal, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-3xl border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent-purple/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold px-2 py-1 rounded bg-white/5 text-slate-300 uppercase tracking-widest">{signal.type}</span>
                        <span className="text-xs font-medium text-slate-500">Frequency: <span className="text-white">{signal.freq}</span></span>
                      </div>
                      <div className="flex items-center gap-2">
                         <span className="text-sm font-bold text-accent-cyan">{signal.score} Demand Score</span>
                         <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-accent-cyan" style={{ width: `${signal.score}%` }} />
                         </div>
                      </div>
                    </div>
                    <p className="text-lg font-medium text-white mb-4 italic">&quot;{signal.comment}&quot;</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2 text-xs font-bold text-accent-purple uppercase tracking-wider">
                        <Zap className="w-4 h-4" /> Recommended Action: {signal.action}
                      </div>
                      <button 
                        onClick={() => setSelectedSignal(signal)}
                        className="ml-auto flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
                      >
                        <Reply className="w-4 h-4" /> View Suggested Reply
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'opportunities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                id: '1',
                rank: 1,
                idea: 'Next.js 15 + Stripe Integration', 
                opportunityType: 'Technical Tutorial',
                demandStrength: 0.98, 
                clarityScore: 0.92,
                confidence: 0.98, 
                whyNow: 'Next.js 15 is trending and Stripe integration is a top-tier pain point for developers building SaaS products.',
                audienceNeed: 'Developers need a clear, end-to-end guide on using Stripe with the new Server Actions and App Router patterns.',
                evidenceExcerpts: [
                  '142 comments asking for Stripe examples',
                  'High click-through rate on previous payment-related mentions',
                  'Competitors are seeing 2x engagement on similar topics'
                ],
                titleDirections: [
                  'Next.js 15 Stripe Guide: The Only Tutorial You Need',
                  'Building a SaaS with Next.js 15 and Stripe Server Actions',
                  'Stop Struggling with Stripe in Next.js 15'
                ]
              },
              { 
                id: '2',
                rank: 2,
                idea: 'Advanced Animation Patterns', 
                opportunityType: 'Design Deep-Dive',
                demandStrength: 0.85, 
                clarityScore: 0.88,
                confidence: 0.85, 
                whyNow: 'Motion (formerly Framer Motion) just released major updates for React 19 compatibility.',
                audienceNeed: 'Design-minded developers want to create high-end, smooth interfaces without performance bottlenecks.',
                evidenceExcerpts: [
                  'Trending topic in design community',
                  'Frequent questions about layout transitions',
                  'High retention on previous animation segments'
                ],
                titleDirections: [
                  'Mastering Motion in React 19',
                  '5 Advanced Animation Patterns for Modern UIs',
                  'The Secret to Smooth Next.js Transitions'
                ]
              },
              { 
                id: '3',
                rank: 3,
                idea: 'Server Actions vs API Routes', 
                opportunityType: 'Conceptual Comparison',
                demandStrength: 0.92, 
                clarityScore: 0.95,
                confidence: 0.92, 
                whyNow: 'Ongoing confusion in the community about when to use which pattern in Next.js 15.',
                audienceNeed: 'Clear decision framework for choosing between Server Actions and traditional API routes.',
                evidenceExcerpts: [
                  'Common confusion point in comments',
                  'High search volume for "Server Actions vs API Routes"',
                  'Reddit threads showing significant debate'
                ],
                titleDirections: [
                  'Server Actions vs API Routes: Which One Should You Use?',
                  'The Definitive Guide to Data Fetching in Next.js 15',
                  'Stop Using API Routes (Unless You Need To)'
                ]
              },
            ].map((opp, i) => (
              <div key={i} className="glass p-8 rounded-[32px] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Lightbulb className="w-24 h-24 text-accent-cyan" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-accent-cyan/20 text-accent-cyan text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Ranked #0{opp.rank}</span>
                    <span className="text-xs font-medium text-slate-500">Confidence: {Math.round(opp.confidence * 100)}%</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{opp.idea}</h3>
                  <p className="text-sm text-slate-400 mb-6 line-clamp-2">{opp.audienceNeed}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Demand Strength: <span className="text-accent-magenta">{opp.demandStrength > 0.9 ? 'Extreme' : 'High'}</span>
                    </div>
                    <button 
                      onClick={() => setSelectedOpportunity(opp)}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'comments' && (
          <div className="glass rounded-[32px] overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-[10px] uppercase tracking-widest font-bold text-slate-500">
                  <th className="px-8 py-4">User</th>
                  <th className="px-8 py-4">Comment</th>
                  <th className="px-8 py-4">Sentiment</th>
                  <th className="px-8 py-4">Likes</th>
                  <th className="px-8 py-4">Signals</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-800" />
                        <span className="text-sm font-medium text-white">User_{i}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-sm text-slate-400 max-w-md truncate">This is an amazing tutorial, really helped me understand the new router!</td>
                    <td className="px-8 py-5">
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Positive</span>
                    </td>
                    <td className="px-8 py-5 text-sm text-slate-500">24</td>
                    <td className="px-8 py-5">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                        <div className="w-2 h-2 rounded-full bg-accent-purple" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {/* Suggested Reply Modal */}
      {selectedSignal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedSignal(null)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="glass w-full max-w-lg rounded-[32px] p-8 relative z-10 border border-white/10"
          >
            <button 
              onClick={() => setSelectedSignal(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-slate-400 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/20 flex items-center justify-center">
                <Reply className="w-5 h-5 text-accent-cyan" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Suggested Reply</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">AI-Generated Response</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Based on Signal</p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-sm text-slate-300 italic">&quot;{selectedSignal.comment}&quot;</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Recommended Response</p>
                <div className="p-6 rounded-2xl bg-accent-cyan/5 border border-accent-cyan/20">
                  <p className="text-white font-medium leading-relaxed">{selectedSignal.reply}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Why this works</p>
                <p className="text-sm text-slate-400 leading-relaxed">{selectedSignal.reason}</p>
              </div>

              <div className="flex gap-3 pt-2">
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(selectedSignal.reply);
                    // Add toast notification logic here if available
                  }}
                  className="flex-1 bg-white text-black py-3 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all"
                >
                  Copy to Clipboard
                </button>
                <button 
                  onClick={() => setSelectedSignal(null)}
                  className="flex-1 bg-white/5 border border-white/10 text-white py-3 rounded-xl text-sm font-bold hover:bg-white/10 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      {/* Opportunity Detail Modal */}
      {selectedOpportunity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedOpportunity(null)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="glass w-full max-w-2xl rounded-[32px] p-8 relative z-10 border border-white/10 max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={() => setSelectedOpportunity(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-slate-400 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-accent-magenta/20 flex items-center justify-center">
                <Zap className="w-7 h-7 text-accent-magenta" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-accent-magenta/20 text-accent-magenta text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">Ranked #0{selectedOpportunity.rank}</span>
                  <span className="text-xs font-medium text-slate-500">Opportunity ID: {selectedOpportunity.id}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{selectedOpportunity.idea}</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Demand Strength', value: `${Math.round(selectedOpportunity.demandStrength * 100)}%`, color: 'text-accent-magenta' },
                { label: 'Clarity Score', value: `${Math.round(selectedOpportunity.clarityScore * 100)}%`, color: 'text-accent-cyan' },
                { label: 'Confidence', value: `${Math.round(selectedOpportunity.confidence * 100)}%`, color: 'text-accent-purple' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className={cn("text-xl font-bold", stat.color)}>{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Audience Need</p>
                  <p className="text-slate-300 leading-relaxed">{selectedOpportunity.audienceNeed}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Why Now?</p>
                  <p className="text-slate-300 leading-relaxed">{selectedOpportunity.whyNow}</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Evidence Excerpts</p>
                <div className="space-y-3">
                  {selectedOpportunity.evidenceExcerpts.map((excerpt: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-400">{excerpt}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Title Directions</p>
                <div className="grid grid-cols-1 gap-3">
                  {selectedOpportunity.titleDirections.map((title: string, i: number) => (
                    <div key={i} className="p-4 rounded-2xl bg-accent-cyan/5 border border-accent-cyan/20 group hover:bg-accent-cyan/10 transition-all cursor-pointer">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-white font-medium">{title}</p>
                        <ArrowUpRight className="w-4 h-4 text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="flex-1 bg-accent-magenta text-white py-4 rounded-2xl text-sm font-bold hover:bg-accent-magenta/90 transition-all shadow-lg shadow-accent-magenta/20">
                  Add to Content Roadmap
                </button>
                <button 
                  onClick={() => setSelectedOpportunity(null)}
                  className="px-8 bg-white/5 border border-white/10 text-white py-4 rounded-2xl text-sm font-bold hover:bg-white/10 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
