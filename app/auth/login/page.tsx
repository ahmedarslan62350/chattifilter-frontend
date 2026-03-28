"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useLoginMutation } from "@/tanstack/mutations/auth.mutations";
import { LoginRequest } from "@/types/api";
import { toast } from "sonner";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isReadOnly, setIsReadOnly] = useState(true);

  const loginMutation = useLoginMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: LoginRequest = {
      email,
      password,
    };

    loginMutation.mutate(payload, {
      onSuccess: ({ data }) => {
        toast.success(data.message || "Login successful");
      },
      onError: (err: any) => {
        toast.error(err?.error || "Invalid credentials");
      },
    });
  };

  // YouTube OAuth redirect
  const handleYoutubeLogin = () => {
    const baseURL =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000";

    const redirectUrl = `${baseURL}/auth/youtube?isReadOnly=${isReadOnly}`;
    window.location.href = redirectUrl;
  };

  return (
    <div className="min-h-screen bg-[#0A0E1A] flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-cyan/10 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-purple/10 blur-[120px] rounded-full animate-pulse-slow" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md glass p-10 rounded-[40px] border border-white/10 relative z-10"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-10 text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-2xl">S</span>
          </div>
          <span className="font-bold text-2xl tracking-tight text-white">
            Sutorium
          </span>
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
        <p className="text-slate-400 mb-8">
          Enter your credentials to access your dashboard.
        </p>

        {/* Normal login form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
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

          <button
            type="submit"
            disabled={loginMutation.isPending}
            className="w-full bg-gradient-primary text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            {loginMutation.isPending ? "Signing in..." : "Sign In"}
            <Sparkles className="w-4 h-4" />
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-[1px] bg-white/10" />
          <span className="text-xs text-slate-500 font-bold uppercase">
            or continue with
          </span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </div>

        {/* Readonly checkbox */}
        <div className="flex items-center gap-3 mb-5">
          <input
            type="checkbox"
            checked={isReadOnly}
            onChange={(e) => setIsReadOnly(e.target.checked)}
            className="w-4 h-4 accent-cyan"
          />
          <span className="text-sm text-slate-400">
            Connect YouTube in read-only mode
          </span>
        </div>

        {/* YouTube OAuth Button */}
        <button
          onClick={handleYoutubeLogin}
          className="w-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all py-4 rounded-2xl flex items-center justify-center gap-3 font-semibold text-white"
        >
          <Image src="/youtube.svg" alt="YouTube" className="w-5 h-5" width={20} height={20}/>
          Continue with YouTube
        </button>

        <p className="mt-8 text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="text-white font-bold hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}