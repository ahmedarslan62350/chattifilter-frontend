import { Reply, X } from "lucide-react";
import { motion } from "motion/react";

export function SuggestedReplyModal({
  signal,
  onClose,
}: Readonly<{
  signal: any;
  onClose: () => void;
}>) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="glass w-full max-w-lg rounded-xl p-8 relative z-10 border border-white/10"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-slate-400 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-accent-cyan/20 flex items-center justify-center">
            <Reply className="w-5 h-5 text-accent-cyan" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Suggested Reply</h3>
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
                &quot;{signal.commentExcerpt}&quot;
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
              Recommended Response
            </p>
            <div className="p-6 rounded-2xl bg-accent-cyan/5 border border-accent-cyan/20">
              <p className="text-white font-medium leading-relaxed">
                {signal.suggestedReply}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
              Why this works
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              {signal.reason}
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() =>
                navigator.clipboard.writeText(signal.suggestedReply)
              }
              className="flex-1 bg-white text-black py-3 rounded-md text-sm font-bold hover:bg-slate-200 transition-all"
            >
              Copy to Clipboard
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-white/5 border border-white/10 text-white py-3 rounded-md text-sm font-bold hover:bg-white/10 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
