import { OpportunitiesTab } from "./OpportunitiesTab";
import { SignalsTab } from "./SignalsTab";

export function TabContent({
  activeTab,
  signals,
  opportunities,
  setSelectedSignal,
  setSelectedOpportunity,
}: Readonly<{
  activeTab: "signals" | "opportunities";
  signals: any[];
  opportunities: any[];
  setSelectedSignal: (s: any) => void;
  setSelectedOpportunity: (o: any) => void;
}>) {
  return (
    <div className="min-h-[400px]">
      {activeTab === "signals" && (
        <SignalsTab signals={signals} setSelectedSignal={setSelectedSignal} />
      )}
      {activeTab === "opportunities" && (
        <OpportunitiesTab
          opportunities={opportunities}
          setSelectedOpportunity={setSelectedOpportunity}
        />
      )}
    </div>
  );
}