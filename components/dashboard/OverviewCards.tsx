import { MessageSquare, Sparkles, Zap } from "lucide-react";

export function OverviewCards({
  videoInsights,
  signals,
  opportunityScore,
}: Readonly<{
  videoInsights: any;
  signals: any[];
  opportunityScore: string;
}>) {
  const stats = [
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
      value: opportunityScore,
      icon: Zap,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="glass p-6 rounded-xl">
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
  );
}