'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  BarChart3, 
  MessageSquare, 
  Zap, 
  Shield, 
  ChevronRight,
  Play,
  CheckCircle2
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Mesh Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-cyan/10 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-purple/10 blur-[120px] rounded-full animate-pulse-slow" />
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
          <span className="font-bold text-2xl tracking-tight text-white">Sutorium</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="/dashboard" className="hover:text-white transition-colors">Demo</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Login</Link>
          <Link 
            href="/signup" 
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-8 max-w-7xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent-cyan text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="w-3 h-3" />
            AI-Powered Audience Intelligence
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
            Turn your comments into <br />
            <span className="text-gradient">Actionable Insights</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Sutorium uses advanced AI to analyze thousands of comments, detecting audience signals, content opportunities, and high-value feedback in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/dashboard" 
              className="bg-gradient-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_40px_rgba(168,85,247,0.3)]"
            >
              Explore Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="glass px-10 py-4 rounded-full text-lg font-bold text-white hover:bg-white/10 transition-all flex items-center gap-2">
              <Play className="w-5 h-5 fill-white" /> Watch Video
            </button>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] to-transparent z-10 h-64 bottom-0" />
          <div className="glass-dark rounded-3xl p-4 border border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-[#0A0E1A] rounded-2xl overflow-hidden border border-white/5">
               <img 
                 src="https://picsum.photos/seed/dashboard/1200/800" 
                 alt="Dashboard Preview" 
                 className="w-full h-auto opacity-80"
               />
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-10 -left-10 glass p-6 rounded-2xl hidden lg:block animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-accent-cyan" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Comments Analyzed</p>
                <p className="text-2xl font-bold text-white">124,502</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 glass p-6 rounded-2xl hidden lg:block animate-bounce-slow" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent-purple/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent-purple" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Insights Found</p>
                <p className="text-2xl font-bold text-white">842</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Designed for Modern Creators</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Stop drowning in notifications. Let Sutorium find the signals that matter for your growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Real-time Analysis",
              desc: "Instant processing of comments across YouTube, TikTok, and Instagram.",
              icon: Zap,
              color: "text-accent-cyan"
            },
            {
              title: "Valuable Signal Detection",
              desc: "Our AI identifies questions, complaints, and feature requests automatically.",
              icon: Sparkles,
              color: "text-accent-purple"
            },
            {
              title: "Competitor Intelligence",
              desc: "Analyze what your competitors' audiences are asking for and fill the gap.",
              icon: BarChart3,
              color: "text-accent-magenta"
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto glass-dark rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden border border-white/10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-cyan/10 via-accent-purple/10 to-transparent -z-10" />
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to understand your <br /> audience like never before?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Join 2,000+ creators who are using Sutorium to drive their content strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/signup" 
              className="bg-white text-black px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.2)]"
            >
              Get Started Free
            </Link>
            <Link 
              href="/dashboard" 
              className="text-white font-bold flex items-center gap-2 hover:gap-4 transition-all"
            >
              Explore the dashboard <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Sutorium</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              AI-driven audience intelligence for the next generation of content creators.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© 2026 Sutorium AI Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
