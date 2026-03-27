import { useQuery } from "@tanstack/react-query";
import { videoService } from "@/api/videos.apis";

export const useGetMyVideos = () => {
  return useQuery({
    queryKey: ["videos", "all"],
    queryFn: () => videoService.getMyAllVideos(),
  });
};

export const useGetVideoInsights = (videoId?: string) => {
  return useQuery({
    queryKey: ["videos", "insights", videoId],
    queryFn: () => videoService.getVideoInsights(videoId),
    enabled: !!videoId,
  });
};

export const useGetVideoAnalytics = () => {
  return useQuery({
    queryKey: ["videos", "analytics"],
    queryFn: () => videoService.getVideoAnalytics(),
  });
};
