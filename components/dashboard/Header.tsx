import { ChevronLeft, Video } from "lucide-react";
import Link from "next/link";

export function Header({ videoTitle }: { readonly videoTitle?: string }) {
  return (
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
          {videoTitle ?? "Video Analysis"}
        </h1>
      </div>
      <div className="ml-auto flex items-center gap-3">
        <span className="bg-emerald-400/10 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded border border-emerald-400/20 uppercase tracking-wider">
          Processed
        </span>
      </div>
    </div>
  );
}