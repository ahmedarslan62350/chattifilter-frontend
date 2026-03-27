import { apiClient } from "@/lib/axiosClient";

const client = apiClient();

export const videoService = {
  getMyAllVideos: () => client.get("/videos", { withCredentials: true }),
  getVideoInsights: (videoId?: string) =>
    client.get("/videos/insights", {
      params: { videoId },
      withCredentials: true,
    }),
  getVideoAnalytics: () =>
    client.get("/videos/analytics", { withCredentials: true }),
};
