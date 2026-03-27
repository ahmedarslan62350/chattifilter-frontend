"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { useRegisterMutation } from "@/tanstack/mutations/auth.mutations";
import { RegisterRequest } from "@/types/api";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerMutation = useRegisterMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: RegisterRequest = { name, email, password };

    registerMutation.mutate(payload, {
      onSuccess: () => {

      },
      onError: (err: any) => {
        console.error("Signup failed", err);
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0E1A] flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-cyan/10 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-purple/10 blur-[120px] rounded-full animate-pulse-slow" />

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-3xl">S</span>
            </div>
            <span className="font-bold text-3xl tracking-tight text-white">
              Sutorium
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-8 leading-tight">
            Start your journey to <br />{" "}
            <span className="text-gradient">Audience Mastery</span>
          </h1>
          <div className="space-y-6">
            {[
              "Real-time comment analysis across platforms",
              "AI-driven content opportunity detection",
              "Competitor audience intelligence",
              "Actionable growth signals",
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-accent-cyan" />
                <span className="font-medium">{f}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md glass p-10 rounded-[40px] border border-white/10 mx-auto"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-10 text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-slate-400 mb-8">Join 2,000+ creators today.</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-cyan/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-cyan/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-cyan/50 transition-all"
              />
            </div>

            {registerMutation.isError && (
              <p className="text-red-500 text-sm">
                {(registerMutation.error as any)?.message ||
                  "Something went wrong"}
              </p>
            )}

            <button
              type="submit"
              disabled={registerMutation.isPending}
              className="w-full bg-gradient-primary text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              {registerMutation.isPending ? "Creating..." : "Get Started"}
              <Sparkles className="w-4 h-4" />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-white font-bold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
