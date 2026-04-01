import { cn } from "@/lib/utils";
import { X, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Section } from "./Section";

export function OpportunityDetailModal({
  opportunity,
  onClose,
}: Readonly<{
  opportunity: any;
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
        className="glass w-full max-w-2xl rounded-xl p-8 relative z-10 border border-white/10 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-slate-400 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 rounded-xl bg-accent-magenta/20 flex items-center justify-center">
            <Zap className="w-7 h-7 text-accent-magenta" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-accent-magenta/20 text-accent-magenta text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">
                Ranked #{String(opportunity.rank).padStart(2, "0")}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Opportunity ID: {opportunity.id}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {opportunity.idea}
            </h3>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            {
              label: "Demand Strength",
              value: `${Math.round(opportunity.demandStrength * 100)}%`,
              color: "text-accent-magenta",
            },
            {
              label: "Confidence",
              value: `${Math.round(opportunity.confidence * 100)}%`,
              color: "text-accent-cyan",
            },
            {
              label: "Related Signals",
              value: opportunity.relatedSignals || 0,
              color: "text-accent-purple",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass p-4 rounded-xl border border-white/5 flex flex-col"
            >
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                {stat.label}
              </span>
              <span className={cn("text-white font-bold text-lg", stat.color)}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          <Section title="Audience Need">{opportunity.audienceNeed}</Section>
          <Section title="Why Now">{opportunity.whyNow}</Section>
          <Section title="Evidence">
            {opportunity.evidenceExcerpts.length &&
              opportunity.evidenceExcerpts.map((e: string) => (
                <p className="glass p-4 rounded-md border border-white/5 flex flex-col mb-3" key={e}>{e}</p>
              ))}
          </Section>
          {opportunity.titleDirections?.length > 0 && (
            <Section title="Title Directions">
              <ul className="space-y-2">
                {opportunity.titleDirections.map((t: string, idx: number) => (
                  <li
                    key={idx}
                    className="text-sm text-accent-cyan hover:underline cursor-pointer"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </div>

        <div className="pt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-md font-bold hover:bg-white/10 transition-all"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
