// 'use client';

// import React from 'react';
// import { 
//   ChevronLeft, 
//   Video, 
//   Search, 
//   Filter, 
//   ArrowUpRight, 
//   Play,
//   TrendingUp,
//   MessageSquare,
//   Sparkles
// } from 'lucide-react';
// import Link from 'next/link';
// import { motion } from 'motion/react';

// const competitorVideos = [
//   { id: 'cv1', title: 'Why I stopped using React', platform: 'Youtube', comments: '12.4K', signals: '842', status: 'Analyzed', date: '2 days ago' },
//   { id: 'cv2', title: 'The future of Web Development', platform: 'Youtube', comments: '8.2K', signals: '412', status: 'Analyzed', date: '5 days ago' },
//   { id: 'cv3', title: 'My $50k/mo Tech Stack', platform: 'Youtube', comments: '5.6K', signals: '210', status: 'Analyzed', date: '1 week ago' },
//   { id: 'cv4', title: 'Stop making these UI mistakes', platform: 'Youtube', comments: '15.1K', signals: '1.2K', status: 'Analyzed', date: '2 weeks ago' },
// ];

// export default function CompetitorVideosPage({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = React.use(params);
//   return (
//     <div className="space-y-8">
//       <div className="flex items-center gap-4">
//         <Link href="/competitors" className="p-2 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all">
//           <ChevronLeft className="w-6 h-6" />
//         </Link>
//         <div>
//           <h1 className="text-2xl font-bold text-white">DesignCourse Videos</h1>
//           <p className="text-slate-400 text-sm">Analyzing audience signals from competitor content.</p>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {[
//           { label: 'Market Gap Score', value: '82/100', icon: TrendingUp },
//           { label: 'Unanswered Questions', value: '1,240', icon: MessageSquare },
//           { label: 'High Demand Topics', value: '14', icon: Sparkles },
//         ].map((stat, i) => (
//           <div key={i} className="glass p-6 rounded-3xl">
//             <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">{stat.label}</p>
//             <div className="flex items-center justify-between">
//               <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
//               <stat.icon className="w-5 h-5 text-accent-magenta" />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Video Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {competitorVideos.map((video, i) => (
//           <motion.div 
//             key={video.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1 }}
//             className="glass rounded-[32px] overflow-hidden group hover:border-white/20 transition-all"
//           >
//             <div className="aspect-video bg-slate-800 relative overflow-hidden">
//                <img src={`https://picsum.photos/seed/comp-${video.id}/400/225`} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500" />
//                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                   <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
//                     <Play className="w-6 h-6 text-white fill-white" />
//                   </div>
//                </div>
//                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white">
//                   12:45
//                </div>
//             </div>
//             <div className="p-6">
//               <h3 className="text-lg font-bold text-white mb-4 line-clamp-2 group-hover:text-accent-cyan transition-colors">{video.title}</h3>
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-4">
//                   <div className="text-center">
//                     <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Comments</p>
//                     <p className="text-sm font-bold text-white">{video.comments}</p>
//                   </div>
//                   <div className="text-center">
//                     <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Signals</p>
//                     <p className="text-sm font-bold text-accent-magenta">{video.signals}</p>
//                   </div>
//                 </div>
//                 <span className="text-xs text-slate-500 font-medium">{video.date}</span>
//               </div>
//               <Link 
//                 href={`/competitor/${id}/videos/${video.id}`}
//                 className="w-full bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl text-sm font-bold text-center transition-all flex items-center justify-center gap-2"
//               >
//                 Analyze Signals <ArrowUpRight className="w-4 h-4" />
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
