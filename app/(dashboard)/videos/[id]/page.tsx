"use client";

import React from "react";
import {
  ChevronLeft,
  MessageSquare,
  Sparkles,
  Zap,
  ArrowUpRight,
  CheckCircle2,
  Reply,
  Lightbulb,
  Video,
  X,
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useGetVideoInsights } from "@/tanstack/queries/videos.queries";
import { Skeleton } from "@/components/ui/skeleton";

type SignalType = "trust_criticism" | "question" | "feature_request" | string;

function formatSignalType(type: SignalType): string {
  return type
    .split("_")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function VideoDetailPage({
  params,
}: {
  readonly params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const [activeTab, setActiveTab] = React.useState("signals");
  const [selectedSignal, setSelectedSignal] = React.useState<any>(null);
  const [selectedOpportunity, setSelectedOpportunity] =
    React.useState<any>(null);

  const { data, isPending } = useGetVideoInsights(id);
  const videoInsights = data?.data.data;

  if (isPending) {
    return <Skeleton className="w-full h-[600px]" />;
  }

  if (!videoInsights) {
    return null;
  }

  const signals = videoInsights.audienceSignals ?? [];
  const opportunities = videoInsights.videoOpportunities ?? [];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/videos"
          className="p-2 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Video className="w-4 h-4 text-red-500" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              YouTube Video Analysis
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white">
            {videoInsights.title ?? "Video Analysis"}
          </h1>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <span className="bg-emerald-400/10 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded border border-emerald-400/20 uppercase tracking-wider">
            Processed
          </span>
        </div>
      </div>

      {/* Video Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            label: "Total Comments",
            value: videoInsights.totalComments?.toLocaleString() ?? "—",
            icon: MessageSquare,
          },
          {
            label: "Valuable Signals",
            value: signals.length.toString(),
            icon: Sparkles,
          },
          {
            label: "Opportunity Score",
            value:
              opportunities.length > 0
                ? Math.round(
                    opportunities.reduce(
                      (sum: number, o: any) => sum + o.confidence * 100,
                      0,
                    ) / opportunities.length,
                  ).toString()
                : "—",
            icon: Zap,
          },
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-3xl">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">
              {stat.label}
            </p>
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
          { id: "signals", label: "Audience Signals", icon: Sparkles },
          {
            id: "opportunities",
            label: "Video Opportunities",
            icon: Lightbulb,
          },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all",
              activeTab === tab.id
                ? "bg-white text-black shadow-lg"
                : "text-slate-400 hover:text-white",
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === "signals" && (
          <div className="grid grid-cols-1 gap-6">
            {signals.length === 0 && (
              <p className="text-slate-500 text-sm">No signals found.</p>
            )}
            {signals.map((signal: any, i: number) => (
              <motion.div
                key={signal.id ?? i}
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
                        <span className="text-xs font-bold px-2 py-1 rounded bg-white/5 text-slate-300 uppercase tracking-widest">
                          {formatSignalType(signal.type)}
                        </span>
                        <span className="text-xs font-medium text-slate-500">
                          Frequency:{" "}
                          <span className="text-white">{signal.frequency}</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-accent-cyan">
                          {Math.round(signal.score * 100)} Demand Score
                        </span>
                        <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent-cyan"
                            style={{ width: `${signal.score * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-lg font-medium text-white mb-4 italic">
                      &quot;{signal.commentExcerpt}&quot;
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2 text-xs font-bold text-accent-purple uppercase tracking-wider">
                        <Zap className="w-4 h-4" /> Recommended Action:{" "}
                        <span className="text-accent-cyan">
                          {formatSignalType(signal.creatorAction)}
                        </span>
                      </div>
                      {signal.suggestedReply && (
                        <button
                          onClick={() => setSelectedSignal(signal)}
                          className="ml-auto flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
                        >
                          <Reply className="w-4 h-4" /> View Suggested Reply
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "opportunities" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.length === 0 && (
              <p className="text-slate-500 text-sm">No opportunities found.</p>
            )}
            {opportunities.map((opp: any, i: number) => (
              <div
                key={opp.id ?? i}
                className="glass p-8 rounded-[32px] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Lightbulb className="w-24 h-24 text-accent-cyan" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-accent-cyan/20 text-accent-cyan text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
                      Ranked #{String(opp.rank).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      Confidence: {Math.round(opp.confidence * 100)}%
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {opp.idea}
                  </h3>
                  <p className="text-sm text-slate-400 mb-6 line-clamp-2">
                    {opp.audienceNeed}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Demand Strength:{" "}
                      <span className="text-accent-magenta">
                        {opp.demandStrength > 0.9 ? "Extreme" : "High"}
                      </span>
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
                <h3 className="text-lg font-bold text-white">
                  Suggested Reply
                </h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">
                  AI-Generated Response
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Based on Signal
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-sm text-slate-300 italic">
                    &quot;{selectedSignal.commentExcerpt}&quot;
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Recommended Response
                </p>
                <div className="p-6 rounded-2xl bg-accent-cyan/5 border border-accent-cyan/20">
                  <p className="text-white font-medium leading-relaxed">
                    {selectedSignal.suggestedReply}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Why this works
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {selectedSignal.reason}
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      selectedSignal.suggestedReply,
                    );
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
                  <span className="bg-accent-magenta/20 text-accent-magenta text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">
                    Ranked #{String(selectedOpportunity.rank).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    Opportunity ID: {selectedOpportunity.id}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {selectedOpportunity.idea}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  label: "Demand Strength",
                  value: `${Math.round(selectedOpportunity.demandStrength * 100)}%`,
                  color: "text-accent-magenta",
                },
                {
                  label: "Clarity Score",
                  value: `${Math.round(selectedOpportunity.clarityScore * 100)}%`,
                  color: "text-accent-cyan",
                },
                {
                  label: "Confidence",
                  value: `${Math.round(selectedOpportunity.confidence * 100)}%`,
                  color: "text-accent-purple",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 rounded-2xl p-4 border border-white/5"
                >
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                    {stat.label}
                  </p>
                  <p className={cn("text-xl font-bold", stat.color)}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                    Audience Need
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedOpportunity.audienceNeed}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                    Why Now?
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedOpportunity.whyNow}
                  </p>
                </div>
              </div>

              {selectedOpportunity.evidenceExcerpts?.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                    Evidence Excerpts
                  </p>
                  <div className="space-y-3">
                    {selectedOpportunity.evidenceExcerpts.map(
                      (excerpt: string, i: number) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <p className="text-sm text-slate-400">{excerpt}</p>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}

              {selectedOpportunity.titleDirections?.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                    Title Directions
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedOpportunity.titleDirections.map(
                      (title: string, i: number) => (
                        <div
                          key={i}
                          className="p-4 rounded-2xl bg-accent-cyan/5 border border-accent-cyan/20 group hover:bg-accent-cyan/10 transition-all cursor-pointer"
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-white font-medium">
                              {title}
                            </p>
                            <ArrowUpRight className="w-4 h-4 text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}

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
