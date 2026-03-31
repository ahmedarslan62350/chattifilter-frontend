import { Reply, Sparkles, Zap } from "lucide-react";
import {motion} from 'motion/react'

export function SignalsTab({
  signals,
  setSelectedSignal,
}: Readonly<{
  signals: any[];
  setSelectedSignal: (s: any) => void;
}>) {
  if (!signals.length)
    return <p className="text-slate-500 text-sm">No signals found.</p>;

  return (
    <div className="grid grid-cols-1 gap-6">
      {signals.map((signal, i) => (
        <motion.div
          key={signal.id ?? i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all"
        >
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-accent-purple" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold px-2 py-1 rounded bg-white/5 text-slate-300 uppercase tracking-widest">
                    {signal.type}
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
              <p className="text-sm text-white mb-6 line-clamp-2 italic">
                &quot;{signal.commentExcerpt}&quot;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <Zap className="w-4 h-4" /> Recommended Action:{" "}
                  <span className="text-white">
                    {signal.creatorAction}
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
  );
}