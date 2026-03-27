"use client";

import React, { useMemo, useState } from "react";
import {
  MessageSquare,
  Video as VideoIcon,
  Sparkles,
  ArrowUpRight,
  AlertCircle,
  ChevronRight,
  Play,
  Baby,
  BabyIcon,
  Video,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "motion/react";
import Link from "next/link";
import { useGetVideoAnalytics } from "@/tanstack/queries/videos.queries";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type trends = "weekly" | "monthly";

export default function DashboardOverview() {
  const { data, isLoading } = useGetVideoAnalytics();
  const analytics = data?.data?.data;

  const [range, setRange] = useState<trends>("weekly");

  const trends = useMemo(() => {
    if (!analytics) return [];
    return range === "weekly"
      ? analytics.engagementWeeklyTrends
      : analytics.engagementMonthlyTrends;
  }, [analytics, range]);

  if (isLoading) {
    return <Skeleton className="h-10 w-32" />;
  }

  if (!analytics) return null;

  const cardData = [
    {
      label: "Total Comments",
      value: analytics.totalComments,
      icon: MessageSquare,
      color: "text-accent-cyan",
    },
    {
      label: "Valuable Signals",
      value: analytics.totalSignals,
      icon: Sparkles,
      color: "text-accent-purple",
    },
    {
      label: "Total Videos",
      value: analytics.totalVideos,
      icon: VideoIcon,
      color: "text-accent-magenta",
    },
    {
      label: "Processed Videos",
      value: analytics.processedVideos,
      icon: VideoIcon,
      color: "text-accent-magenta",
    },
  ];

  const criticalSignals =
    (analytics.mostCricitalSignals.map((s: any) => ({
      type: s?.type?.toUpperCase()?.split("_").join(" "),
      reason: s.reason,
    })) as Array<any>) || [];

  const recentVideos =
    (analytics.recentVideos.map((v: any) => ({
      id: v.id,
      title: v.title || "",
      platform: (v.platform === "GOOGLE" && "YOUTUBE") || "",
      comments: v.totalComments || 0,
      status: v.status,
      imageUrl: `https://img.youtube.com/vi/${v.platformVideoId}/mqdefault.jpg`,
    })) as Array<any>) || [];

  const onTrendsOptionChange = (val: trends) => {
    setRange(val);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, Ahmed
          </h1>
          <p className="text-slate-400">
            Here&apos;s what happened with your audience today.
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-6 rounded-3xl border-l-4 border-l-accent-cyan relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Sparkles className="w-32 h-32 text-accent-cyan" />
        </div>

        <div className="flex flex-col gap-5">
          {criticalSignals?.map((s, i) => (
            <div key={i} className="flex items-start gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-accent-cyan/20 flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6 text-accent-cyan" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{s.type}</h3>
                  <span className="text-xs font-bold text-accent-cyan uppercase tracking-widest">
                    High Priority
                  </span>
                </div>
                <p className="text-slate-400 mb-4 max-w-3xl">{s.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((stat, i) => (
          <div
            key={i}
            className="glass p-6 rounded-3xl group hover:border-white/20 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}
              >
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <p className="text-sm text-slate-500 font-medium mb-1">
              {stat.label}
            </p>
            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-3 glass p-8 rounded-[32px]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-white">
                Engagement Trends
              </h3>
              <p className="text-sm text-slate-500">
                Comments vs AI Signals over time
              </p>
            </div>
            <Select
              value={range}
              onValueChange={(val) => onTrendsOptionChange(val as trends)}
            >
              <SelectTrigger className="w-[140px] bg-white/5 border-white/10 rounded-xl px-3 py-1.5 text-xs font-medium focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Select Range" />
              </SelectTrigger>

              <SelectContent className="bg-[#121212] border-white/10 text-white">
                <SelectItem value="weekly" className="text-xs">
                  Last 7 Days
                </SelectItem>
                <SelectItem value="monthly" className="text-xs">
                  Last 30 Days
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trends}>
                <defs>
                  <linearGradient
                    id="colorComments"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#00F2FF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00F2FF" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorSignals" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#A855F7" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#A855F7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#ffffff05"
                  vertical={false}
                />
                <XAxis
                  dataKey="dateStr"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  tickFormatter={(value) => {
                    const d = new Date(value);
                    return d.toLocaleDateString("en-US", { weekday: "short" });
                  }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0A0E1A",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                  }}
                  itemStyle={{ fontSize: "12px" }}
                />
                <Area
                  type="monotone"
                  dataKey="comments"
                  stroke="#00F2FF"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorComments)"
                />
                <Area
                  type="monotone"
                  dataKey="signals"
                  stroke="#A855F7"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorSignals)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Videos Table Preview */}
      <div className="glass rounded-[32px] overflow-hidden">
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">Recent Videos</h3>
          <Link
            href="/videos"
            className="text-sm font-bold text-accent-cyan hover:underline flex items-center gap-1"
          >
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 text-[10px] uppercase tracking-widest font-bold text-slate-500">
                <th className="px-8 py-4">Video Title</th>
                <th className="px-8 py-4">Platform</th>
                <th className="px-8 py-4">Comments</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentVideos.map((video, i) => (
                <tr
                  key={i}
                  className="hover:bg-white/5 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-8 rounded-lg bg-slate-800 overflow-hidden relative">
                        <Image
                          src={video.imageUrl}
                          alt="Thumb"
                          className="w-full h-full object-cover opacity-60"
                          width={100}
                          height={100}
                        />
                        <Play className="absolute inset-0 m-auto w-3 h-3 text-white fill-white" />
                      </div>
                      <span className="text-sm font-semibold text-white truncate max-w-[200px]">
                        {video.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      {video.platform === "YOUTUBE" ? (
                        <Image
                          className="w-4 h-4 text-red-500"
                          src={"/youtube.svg"}
                          width={100}
                          height={100}
                          alt="Youtube_icon"
                        />
                      ) : (
                        <Video className="w-4 h-4 text-pink-500" />
                      )}
                      <span className="text-xs text-slate-400 font-medium">
                        {video.platform}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm text-slate-300">
                    {video.comments}
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${video.status === "Processed" ? "bg-emerald-400" : "bg-accent-purple animate-pulse"}`}
                      />
                      <span className="text-xs font-medium text-slate-400">
                        {video.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <Link
                      href={`/videos/${video.id}`}
                      className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-all inline-block"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
