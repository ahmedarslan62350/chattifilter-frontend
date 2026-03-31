import { ArrowUpRight, Lightbulb } from "lucide-react";

export function OpportunitiesTab({
  opportunities,
  setSelectedOpportunity,
}: Readonly<{
  opportunities: any[];
  setSelectedOpportunity: (o: any) => void;
}>) {
  if (!opportunities.length)
    return <p className="text-slate-500 text-sm">No opportunities found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {opportunities.map((opp, i) => (
        <div
          key={opp.id ?? i}
          className="glass p-8 rounded-xl relative overflow-hidden group"
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
            <h3 className="text-xl font-bold text-white mb-2">{opp.idea}</h3>
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
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-white transition-all"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
