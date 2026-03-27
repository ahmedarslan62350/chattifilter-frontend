// 'use client';

// import React from 'react';
// import { 
//   ChevronLeft, 
//   Youtube, 
//   Sparkles, 
//   Zap, 
//   ArrowUpRight, 
//   Lightbulb,
//   MessageSquare,
//   TrendingUp,
//   AlertCircle
// } from 'lucide-react';
// import Link from 'next/link';
// import { motion } from 'motion/react';

// export default function CompetitorVideoDetailPage({ params }: { params: Promise<{ id: string, videoId: string }> }) {
//   const { id, videoId } = React.use(params);
//   return (
//     <div className="space-y-8">
//       <div className="flex items-center gap-4">
//         <Link href={`/competitor/${id}/videos`} className="p-2 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all">
//           <ChevronLeft className="w-6 h-6" />
//         </Link>
//         <div>
//           <div className="flex items-center gap-2 mb-1">
//             <Youtube className="w-4 h-4 text-red-500" />
//             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Competitor Analysis</span>
//           </div>
//           <h1 className="text-2xl font-bold text-white">Why I stopped using React</h1>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Column: Signals */}
//         <div className="lg:col-span-2 space-y-6">
//           <div className="glass p-8 rounded-[32px]">
//             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
//               <Sparkles className="w-5 h-5 text-accent-magenta" /> Top Audience Signals
//             </h3>
//             <div className="space-y-6">
//               {[
//                 { type: 'Market Gap', signal: "Users are complaining about React's complexity for small projects.", demand: 'Extreme', score: 96 },
//                 { type: 'Alternative Interest', signal: "High interest in Svelte and SolidJS mentioned in 400+ comments.", demand: 'High', score: 88 },
//                 { type: 'Pain Point', signal: "Frustration with useEffect and state management boilerplate.", demand: 'High', score: 92 },
//               ].map((s, i) => (
//                 <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
//                   <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
//                     <TrendingUp className="w-16 h-16 text-accent-magenta" />
//                   </div>
//                   <div className="flex items-center justify-between mb-4">
//                     <span className="text-xs font-bold text-accent-magenta uppercase tracking-widest">{s.type}</span>
//                     <span className="text-sm font-bold text-white">{s.score} Score</span>
//                   </div>
//                   <p className="text-lg font-medium text-white mb-2">{s.signal}</p>
//                   <p className="text-sm text-slate-500">Demand Strength: <span className="text-accent-cyan font-bold">{s.demand}</span></p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="glass p-8 rounded-[32px]">
//             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
//               <MessageSquare className="w-5 h-5 text-accent-cyan" /> Representative Comments
//             </h3>
//             <div className="space-y-4">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="p-4 border-b border-white/5 last:border-0">
//                   <p className="text-sm text-slate-300 italic mb-2">&quot;I totally agree with this. React is becoming way too bloated for simple landing pages. I&apos;ve been looking for something lighter but don&apos;t know where to start.&quot;</p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs text-slate-500 font-medium">User_{i} • 242 likes</span>
//                     <span className="text-[10px] font-bold text-accent-magenta uppercase tracking-widest">High Value</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Opportunities */}
//         <div className="space-y-6">
//           <div className="glass p-8 rounded-[32px] border-accent-cyan/30 bg-accent-cyan/5">
//             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
//               <Zap className="w-5 h-5 text-accent-cyan" /> Your Opportunity
//             </h3>
//             <div className="p-6 bg-white/5 rounded-2xl mb-6">
//               <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Recommended Video Topic</p>
//               <h4 className="text-lg font-bold text-white mb-4">&quot;React vs. The World: Why you might NOT need it in 2026&quot;</h4>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-2 text-sm text-slate-300">
//                   <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> High conversion potential
//                 </div>
//                 <div className="flex items-center gap-2 text-sm text-slate-300">
//                   <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" /> Low competition on this specific angle
//                 </div>
//               </div>
//             </div>
//             <button className="w-full bg-gradient-primary text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform">
//               Generate Content Brief
//             </button>
//           </div>

//           <div className="glass p-8 rounded-[32px]">
//             <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Market Sentiment</h3>
//             <div className="space-y-6">
//               <div>
//                 <div className="flex justify-between mb-2">
//                   <span className="text-xs font-medium text-slate-400">Frustration with React</span>
//                   <span className="text-xs font-bold text-white">72%</span>
//                 </div>
//                 <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
//                   <div className="bg-accent-magenta h-full w-[72%]" />
//                 </div>
//               </div>
//               <div>
//                 <div className="flex justify-between mb-2">
//                   <span className="text-xs font-medium text-slate-400">Interest in Alternatives</span>
//                   <span className="text-xs font-bold text-white">88%</span>
//                 </div>
//                 <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
//                   <div className="bg-accent-cyan h-full w-[88%]" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="glass p-6 rounded-3xl border-l-4 border-l-accent-purple">
//             <div className="flex items-start gap-3">
//               <AlertCircle className="w-5 h-5 text-accent-purple shrink-0 mt-0.5" />
//               <p className="text-xs text-slate-400 leading-relaxed">
//                 <span className="text-white font-bold">Insight:</span> This competitor's audience is specifically looking for "migration guides" which they haven't provided yet.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
