// 'use client';

// import React from 'react';
// import { 
//   CreditCard, 
//   CheckCircle2, 
//   Zap, 
//   AlertCircle, 
//   ArrowUpRight,
//   Sparkles,
//   Shield,
//   Clock
// } from 'lucide-react';
// import { motion } from 'motion/react';
// import { cn } from '@/lib/utils';

// const plans = [
//   { 
//     title: 'Starter', 
//     price: '$29', 
//     quota: '100 comments/mo', 
//     features: ['Basic Analysis', 'Email Support', '1 Competitor Tracked'],
//     current: false
//   },
//   { 
//     title: 'Creator Pro', 
//     price: '$79', 
//     quota: '1,000 comments/mo', 
//     features: ['Deep AI Analysis', 'Priority Support', '5 Competitors Tracked', 'Video Opportunities'],
//     current: true,
//     popular: true
//   },
//   { 
//     title: 'Agency', 
//     price: '$249', 
//     quota: '10,000 comments/mo', 
//     features: ['Custom AI Models', 'Dedicated Manager', 'Unlimited Competitors', 'API Access'],
//     current: false
//   },
// ];

// export default function SubscriptionsPage() {
//   return (
//     <div className="space-y-8">
//       <div>
//         <h1 className="text-3xl font-bold text-white mb-2">Subscription & Quota</h1>
//         <p className="text-slate-400">Manage your plan and monitor your usage limits.</p>
//       </div>

//       {/* Current Usage */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2 glass p-8 rounded-[32px] relative overflow-hidden">
//           <div className="absolute top-0 right-0 p-8 opacity-5">
//             <Zap className="w-32 h-32 text-accent-cyan" />
//           </div>
//           <div className="relative z-10">
//             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
//               <Clock className="w-5 h-5 text-accent-cyan" /> Current Usage
//             </h3>
            
//             <div className="space-y-8">
//               <div>
//                 <div className="flex justify-between mb-2">
//                   <span className="text-sm font-medium text-slate-400">Comments Processed</span>
//                   <span className="text-sm font-bold text-white">750 / 1,000</span>
//                 </div>
//                 <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden">
//                   <div className="bg-gradient-primary h-full w-3/4 shadow-[0_0_15px_rgba(0,242,255,0.5)]" />
//                 </div>
//                 <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest font-bold">75% of monthly quota used</p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
//                   <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Next Billing Date</p>
//                   <p className="text-lg font-bold text-white">April 12, 2026</p>
//                 </div>
//                 <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
//                   <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Active Competitors</p>
//                   <p className="text-lg font-bold text-white">4 / 5</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="glass p-8 rounded-[32px] border-accent-purple/30 bg-accent-purple/5">
//           <h3 className="text-xl font-bold text-white mb-6">Active Plan</h3>
//           <div className="flex items-center gap-4 mb-8">
//             <div className="w-14 h-14 rounded-2xl bg-accent-purple/20 flex items-center justify-center">
//               <Sparkles className="w-8 h-8 text-accent-purple" />
//             </div>
//             <div>
//               <p className="text-lg font-bold text-white">Creator Pro</p>
//               <p className="text-sm text-slate-400">$79 / month</p>
//             </div>
//           </div>
//           <div className="space-y-4 mb-8">
//             {['Deep AI Analysis', '5 Competitors', 'Video Opportunities'].map((f, i) => (
//               <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
//                 <CheckCircle2 className="w-4 h-4 text-accent-cyan" /> {f}
//               </div>
//             ))}
//           </div>
//           <button className="w-full bg-white/5 border border-white/10 text-white py-3 rounded-xl text-sm font-bold hover:bg-white/10 transition-all">
//             Manage Billing
//           </button>
//         </div>
//       </div>

//       {/* Plans Comparison */}
//       <div className="pt-12">
//         <h2 className="text-2xl font-bold text-white text-center mb-12">Upgrade your intelligence</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {plans.map((plan, i) => (
//             <motion.div 
//               key={i}
//               whileHover={{ y: -10 }}
//               className={cn(
//                 "glass p-8 rounded-[40px] flex flex-col relative overflow-hidden",
//                 plan.current ? "border-accent-cyan/50 ring-1 ring-accent-cyan/20" : "border-white/5",
//                 plan.popular && "shadow-[0_0_40px_rgba(168,85,247,0.1)]"
//               )}
//             >
//               {plan.popular && (
//                 <div className="absolute top-6 right-[-35px] rotate-45 bg-accent-cyan text-black text-[10px] font-bold px-10 py-1 uppercase tracking-widest">
//                   Popular
//                 </div>
//               )}
              
//               <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
//               <div className="flex items-baseline gap-1 mb-6">
//                 <span className="text-4xl font-bold text-white">{plan.price}</span>
//                 <span className="text-slate-500 text-sm">/mo</span>
//               </div>
              
//               <div className="bg-white/5 rounded-2xl p-4 mb-8">
//                 <p className="text-xs font-bold text-accent-cyan uppercase tracking-widest mb-1">Quota</p>
//                 <p className="text-sm text-white font-medium">{plan.quota}</p>
//               </div>

//               <div className="space-y-4 mb-10 flex-1">
//                 {plan.features.map((feature, j) => (
//                   <div key={j} className="flex items-center gap-3 text-sm text-slate-400">
//                     <CheckCircle2 className="w-4 h-4 text-slate-600" />
//                     {feature}
//                   </div>
//                 ))}
//               </div>

//               <button className={cn(
//                 "w-full py-4 rounded-2xl text-sm font-bold transition-all",
//                 plan.current 
//                   ? "bg-white/5 text-slate-400 cursor-default" 
//                   : "bg-gradient-primary text-white hover:scale-105 shadow-lg"
//               )}>
//                 {plan.current ? 'Current Plan' : 'Upgrade Now'}
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Quota Alerts */}
//       <div className="glass p-6 rounded-3xl border-l-4 border-l-accent-magenta flex items-center gap-4">
//         <div className="w-10 h-10 rounded-xl bg-accent-magenta/20 flex items-center justify-center shrink-0">
//           <AlertCircle className="w-5 h-5 text-accent-magenta" />
//         </div>
//         <div>
//           <h4 className="text-sm font-bold text-white">Running low on quota?</h4>
//           <p className="text-xs text-slate-400">You have used 75% of your monthly comment processing quota. Upgrade to Agency for unlimited processing.</p>
//         </div>
//         <button className="ml-auto text-xs font-bold text-accent-magenta hover:underline">
//           Upgrade Quota
//         </button>
//       </div>
//     </div>
//   );
// }
