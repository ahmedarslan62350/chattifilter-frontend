import { cn } from "@/lib/utils";
import { Lightbulb, Sparkles } from "lucide-react";

export function Tabs({
  activeTab,
  setActiveTab,
}: Readonly<{
  activeTab: "signals" | "opportunities";
  setActiveTab: (tab: "signals" | "opportunities") => void;
}>) {
  const tabs = [
    { id: "signals", label: "Audience Signals", icon: Sparkles },
    { id: "opportunities", label: "Video Opportunities", icon: Lightbulb },
  ];

  return (
    <div className="flex items-center gap-1 bg-white/5 p-1 rounded-2xl w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id as any)}
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
  );
}