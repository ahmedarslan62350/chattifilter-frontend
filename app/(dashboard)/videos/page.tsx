"use client";

import React, { useMemo, useState } from "react";
import {
  Search,
  Filter,
  Play,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Download,
  Video,
} from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useGetMyVideos } from "@/tanstack/queries/videos.queries";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

const PAGE_SIZE = 6;

export default function VideoListPage() {
  const { data, isPending } = useGetMyVideos();

  const [search, setSearch] = useState("");
  const [platformFilter, setPlatformFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [page, setPage] = useState(1);

  const videos = data?.data?.data?.videos || [];

  const mappedVideos = useMemo(() => {
    return videos.map((v: any) => ({
      id: v.id,
      title: v.title,
      totalComments: v.totalComments,
      platform: v.platform === "GOOGLE" ? "YOUTUBE" : v.platform,
      status: v.status,
      level: v.processingLevelCompletedTill,
      imageUrl: `https://img.youtube.com/vi/${v.platformVideoId}/mqdefault.jpg`,
    }));
  }, [videos]);

  const filteredVideos = useMemo(() => {
    return mappedVideos.filter((v: any) => {
      const matchSearch = v.title.toLowerCase().includes(search.toLowerCase());

      const matchPlatform =
        platformFilter === "ALL" || v.platform === platformFilter;

      const matchStatus = statusFilter === "ALL" || v.status === statusFilter;

      return matchSearch && matchPlatform && matchStatus;
    });
  }, [mappedVideos, search, platformFilter, statusFilter]);

  if (isPending) {
    return <Skeleton className="w-full h-[600px]" />;
  }

  const totalPages = Math.ceil(filteredVideos.length / PAGE_SIZE);
  const startIndex = (page - 1) * PAGE_SIZE;
  const paginatedVideos = filteredVideos.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );

  return (
    <div className="stack-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="stack-sm">
          <h1 className="text-4xl font-bold text-foreground">Your Videos</h1>
          <p className="text-muted-foreground text-lg">
            Manage and analyze your content performance.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Buttons can be added here */}
        </div>
      </div>

      {/* Filters */}
      <div className="card-clean py-4 rounded-2xl flex flex-wrap items-center gap-4">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Filter by title..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full bg-background/50 border border-border rounded-md py-2 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-accent-cyan"
          />
        </div>

        <select
          value={platformFilter}
          onChange={(e) => {
            setPlatformFilter(e.target.value);
            setPage(1);
          }}
          className="bg-background/50 border border-border rounded-md px-4 py-2 text-xs font-bold text-muted-foreground"
        >
          <option value="ALL">All Platforms</option>
          <option value="YOUTUBE">YouTube</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPage(1);
          }}
          className="bg-background/50 border border-border rounded-md px-4 py-2 text-xs font-bold text-muted-foreground"
        >
          <option value="ALL">All Status</option>
          <option value="FINISHED">Finished</option>
          <option value="PROCESSING">Processing</option>
          <option value="PENDING">Pending</option>
        </select>
      </div>

      {/* Table */}
      <div className="card-clean rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            {/* TABLE HEADER */}
            <thead>
              <tr className="bg-white/5 text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                <th className="px-8 py-4">Video</th>
                <th className="px-8 py-4">Platform</th>
                <th className="px-8 py-4 text-center">Total Comments</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody className="divide-y divide-white/5">
              {paginatedVideos.map((video: any, i: number) => (
                <motion.tr
                  key={video.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="hover:bg-white/5 transition-colors group"
                >
                  {/* VIDEO COLUMN */}
                  <td className="px-8 py-5">
                    <Link
                      href={`/videos/${video.id}`}
                      className="flex items-center gap-3"
                    >
                      <div className="w-16 h-10 rounded-lg overflow-hidden relative shrink-0">
                        <Image
                          src={video.imageUrl}
                          alt="Thumb"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover opacity-60"
                        />
                        <Play className="absolute inset-0 m-auto w-4 h-4 text-foreground fill-foreground" />
                      </div>
                      <span className="text-sm font-semibold text-foreground group-hover:text-accent-cyan transition-colors line-clamp-1">
                        {video.title}
                      </span>
                    </Link>
                  </td>

                  {/* PLATFORM COLUMN */}
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
                      <span className="text-xs text-muted-foreground font-medium">
                        {video.platform}
                      </span>
                    </div>
                  </td>

                  {/* COMMENTS COLUMN */}
                  <td className="px-8 py-5 text-center text-sm text-muted-foreground font-mono">
                    {video.totalComments.toLocaleString()}
                  </td>

                  {/* STATUS COLUMN */}
                  <td className="px-8 py-5 text-xs text-muted-foreground font-medium">
                    {video.status}
                  </td>

                  {/* ACTIONS COLUMN */}
                  <td className="px-8 py-5 text-right">
                    <Link
                      href={`/videos/${video.id}`}
                      className="p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-white/5 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            Showing {startIndex + 1}–
            {Math.min(startIndex + PAGE_SIZE, filteredVideos.length)} of{" "}
            {filteredVideos.length} videos
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="p-2 rounded-lg border border-white/10 text-muted-foreground hover:text-foreground disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={cn(
                    "w-8 h-8 rounded-lg text-xs font-bold transition-all",
                    p === page
                      ? "bg-primary text-black"
                      : "text-white border border-white/10 hover:bg-white/5",
                  )}
                >
                  {p}
                </button>
              );
            })}

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="p-2 rounded-lg border border-white/10 text-muted-foreground hover:text-foreground disabled:opacity-40"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
