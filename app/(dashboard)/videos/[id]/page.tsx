"use client";

import React, { useMemo, useState } from "react";
import { useGetVideoInsights } from "@/tanstack/queries/videos.queries";
import { Skeleton } from "@/components/ui/skeleton";
import { Header } from "@/components/dashboard/Header";
import { OverviewCards } from "@/components/dashboard/OverviewCards";
import { Tabs } from "@/components/dashboard/Tabs";
import { TabContent } from "@/components/dashboard/TabContent";
import { SuggestedReplyModal } from "@/components/dashboard/SuggestedReplyModal";
import { OpportunityDetailModal } from "@/components/dashboard/OpportunityDetailModal";
import { useParams } from "next/navigation";

interface VideoAnalysisPageProps {
  params: { id: string };
}

export default function VideoDetailPage({
  params,
}: Readonly<VideoAnalysisPageProps>) {
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState<"signals" | "opportunities">(
    "signals",
  );
  const [selectedSignal, setSelectedSignal] = useState<any>(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);

  const { data, isPending } = useGetVideoInsights((id as string) || "");
  const videoInsights = data?.data.data;

  const signals = useMemo(() => {
    if (!videoInsights?.audienceSignals?.length) return [];
    return videoInsights.audienceSignals;
  }, [videoInsights?.audienceSignals]);

  const opportunities = useMemo(() => {
    if (!videoInsights?.videoOpportunities?.length) return [];
    return videoInsights.videoOpportunities;
  }, [videoInsights]);

  const opportunityScore = useMemo(() => {
    if (!opportunities.length) return "—";
    return Math.round(
      opportunities.reduce(
        (sum: number, o: any) => sum + o.confidence * 100,
        0,
      ) / opportunities.length,
    ).toString();
  }, [opportunities]);

  if (isPending) {
    return <Skeleton className="w-full h-[600px]" />;
  }

  if (!videoInsights) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <Header videoTitle={videoInsights.title} />

      {/* Video Overview Cards */}
      <OverviewCards
        videoInsights={videoInsights}
        signals={signals}
        opportunityScore={opportunityScore}
      />

      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab Content */}
      <TabContent
        activeTab={activeTab}
        signals={signals}
        opportunities={opportunities}
        setSelectedSignal={setSelectedSignal}
        setSelectedOpportunity={setSelectedOpportunity}
      />

      {/* Modals */}
      {selectedSignal && (
        <SuggestedReplyModal
          signal={selectedSignal}
          onClose={() => setSelectedSignal(null)}
        />
      )}

      {selectedOpportunity && (
        <OpportunityDetailModal
          opportunity={selectedOpportunity}
          onClose={() => setSelectedOpportunity(null)}
        />
      )}
    </div>
  );
}
