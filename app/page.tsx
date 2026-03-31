"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  BarChart3,
  Zap,
  ChevronRight,
  Play,
} from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* =============================
          NAVBAR
      ============================= */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background font-bold">
              S
            </div>
            <span className="text-lg font-semibold tracking-tight">Sutorium</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="#features" className="hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/dashboard" className="hover:text-foreground transition-colors">
              Demo
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-sm text-muted-foreground hover:text-foreground">
              Login
            </Link>

            <Link
              href="/auth/signup"
              className="rounded-xl bg-foreground px-5 py-2 text-sm font-semibold text-background transition-all hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* =============================
          HERO SECTION
      ============================= */}
      <section className="section-lg py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="stack-lg"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-1 text-xs font-semibold text-muted-foreground w-fit mx-auto">
              <Sparkles className="h-3.5 w-3.5" />
              AI-powered audience intelligence
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-[1.1]">
              Turn your audience comments into real insights
            </h1>

            {/* Description */}
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Sutorium analyzes thousands of comments and detects signals like
              questions, complaints, content ideas, and audience intent — in seconds.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-8 py-3 font-semibold text-background transition-all hover:opacity-90"
              >
                Explore Demo <ArrowRight className="h-4 w-4" />
              </Link>

              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-8 py-3 font-semibold text-foreground hover:bg-muted/40 transition-all">
                <Play className="h-4 w-4" /> Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Preview card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20"
          >
            <div className="card-clean p-4">
              <div className="rounded-xl border border-border overflow-hidden">
                <Image
                  src="/dashboard.png"
                  alt="Dashboard preview"
                  className="w-full h-auto"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =============================
          FEATURES
      ============================= */}
      <section id="features" className="section-md border-t border-border py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 stack-md">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Designed for modern creators
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stop reading thousands of comments manually. Let AI detect the insights
              that actually matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time comment analysis",
                desc: "Instantly detect valuable comments across YouTube, TikTok, and Instagram.",
                icon: Zap,
              },
              {
                title: "Audience signal detection",
                desc: "Automatically find questions, complaints, feature requests, and trends.",
                icon: Sparkles,
              },
              {
                title: "Competitor audience insights",
                desc: "Analyze what people are asking your competitors and find opportunities.",
                icon: BarChart3,
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="card-clean p-8 stack-sm transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>

                <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================
          CTA SECTION
      ============================= */}
      <section className="section-lg border-t border-border py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="card-clean p-12 md:p-16 stack-lg">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Start understanding your audience today
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Stop guessing what your audience wants. Let AI show you the real signals
              behind your content performance.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                href="/auth/signup"
                className="rounded-xl bg-foreground px-10 py-4 font-semibold text-background hover:opacity-90 transition-all"
              >
                Get Started Free
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 text-foreground font-semibold hover:gap-3 transition-all"
              >
                Explore demo <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =============================
          FOOTER
      ============================= */}
      <footer className="border-t border-border py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          <div className="stack-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background font-bold">
                S
              </div>
              <span className="font-semibold">Sutorium</span>
            </div>

            <p className="text-muted-foreground mt-2">
              AI-powered audience intelligence for modern creators.
            </p>
          </div>

          <div className="stack-sm flex flex-col">
            <p className="font-semibold">Product</p>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Features</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Pricing</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">API</Link>
          </div>

          <div className="stack-sm flex flex-col">
            <p className="font-semibold">Company</p>
            <Link href="#" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Blog</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link>
          </div>

          <div className="stack-sm flex flex-col">
            <p className="font-semibold">Legal</p>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Terms</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">Cookies</Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-border text-sm text-muted-foreground flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Sutorium. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">Twitter</Link>
            <Link href="#" className="hover:text-foreground">LinkedIn</Link>
            <Link href="#" className="hover:text-foreground">GitHub</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}