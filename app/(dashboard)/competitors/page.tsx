// 'use client';

// import React from 'react';
// import { 
//   Users, 
//   TrendingUp, 
//   Video, 
//   MessageSquare, 
//   ArrowUpRight, 
//   MoreVertical,
//   Search,
//   Filter,
//   BarChart2
// } from 'lucide-react';
// import Link from 'next/link';
// import { motion } from 'motion/react';

// const competitors = [
//   { id: 'c1', name: 'DesignCourse', videos: 142, totalComments: '1.2M', valuableComments: '4.2K', engagement: '8.4%', trend: '+12%' },
//   { id: 'c2', name: 'Fireship', videos: 890, totalComments: '12.5M', valuableComments: '42K', engagement: '12.1%', trend: '+5%' },
//   { id: 'c3', name: 'Web Dev Simplified', videos: 450, totalComments: '4.8M', valuableComments: '18K', engagement: '9.2%', trend: '+8%' },
//   { id: 'c4', name: 'The Net Ninja', videos: 1200, totalComments: '8.2M', valuableComments: '24K', engagement: '7.8%', trend: '-2%' },
// ];

// export default function CompetitorsPage() {
//   return (
//     <div className="space-y-8">
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-3xl font-bold text-white mb-2">Competitor Analysis</h1>
//           <p className="text-slate-400">Track and analyze audience signals from other creators in your niche.</p>
//         </div>
//         <button className="bg-gradient-primary text-white px-6 py-2 rounded-xl text-sm font-bold hover:scale-105 transition-transform shadow-lg">
//           + Add Competitor
//         </button>
//       </div>

//       {/* Overview Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {[
//           { label: 'Tracked Competitors', value: '12', icon: Users },
//           { label: 'Total Competitor Comments', value: '24.5M', icon: MessageSquare },
//           { label: 'Market Opportunity Score', value: '94/100', icon: TrendingUp },
//         ].map((stat, i) => (
//           <div key={i} className="glass p-6 rounded-3xl">
//             <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">{stat.label}</p>
//             <div className="flex items-center justify-between">
//               <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
//               <stat.icon className="w-5 h-5 text-accent-purple" />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Competitors List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {competitors.map((comp, i) => (
//           <motion.div 
//             key={comp.id}
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: i * 0.1 }}
//             className="glass p-8 rounded-[32px] group hover:border-white/20 transition-all"
//           >
//             <div className="flex items-start justify-between mb-8">
//               <div className="flex items-center gap-4">
//                 <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center overflow-hidden border border-white/10">
//                    <img src={`https://i.pravatar.cc/150?u=${comp.id}`} alt={comp.name} />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">{comp.name}</h3>
//                   <p className="text-sm text-slate-500">Tech & Design Education</p>
//                 </div>
//               </div>
//               <div className="flex flex-col items-end">
//                 <span className={`text-sm font-bold ${comp.trend.startsWith('+') ? 'text-emerald-400' : 'text-accent-magenta'}`}>
//                   {comp.trend}
//                 </span>
//                 <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">30d Trend</span>
//               </div>
//             </div>

//             <div className="grid grid-cols-3 gap-4 mb-8">
//               <div className="bg-white/5 p-3 rounded-2xl text-center">
//                 <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Videos</p>
//                 <p className="text-sm font-bold text-white">{comp.videos}</p>
//               </div>
//               <div className="bg-white/5 p-3 rounded-2xl text-center">
//                 <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Signals</p>
//                 <p className="text-sm font-bold text-accent-cyan">{comp.valuableComments}</p>
//               </div>
//               <div className="bg-white/5 p-3 rounded-2xl text-center">
//                 <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Eng.</p>
//                 <p className="text-sm font-bold text-white">{comp.engagement}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <Link 
//                 href={`/competitor/${comp.id}/videos`} 
//                 className="flex-1 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl text-sm font-bold text-center transition-all flex items-center justify-center gap-2"
//               >
//                 <Video className="w-4 h-4" /> View Videos
//               </Link>
//               <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all">
//                 <BarChart2 className="w-5 h-5" />
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
