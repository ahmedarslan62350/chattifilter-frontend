import { authService } from "@/api/auth.apis";
import { useQuery } from "@tanstack/react-query";

export const useRefreshSession = () => {
  return useQuery({
    queryKey: ["auth", "session-refresh"],
    queryFn: () => authService.refresh(),
    refetchInterval: 10 * 60 * 1000,
    refetchIntervalInBackground: true,
    staleTime: 9 * 60 * 1000,
    refetchOnReconnect: true,
  });
};
