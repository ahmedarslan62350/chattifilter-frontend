import { useQuery } from '@tanstack/react-query';
import { authService } from '@/api/auth.apis';

export const useLogout = () => {
  return useQuery({
    queryKey: ['auth', 'logout'],
    queryFn: () => authService.logout(),
    enabled: false,
  });
};

export const useRefreshSession = () => {
  return useQuery({
    queryKey: ['auth', 'refresh'],
    queryFn: () => authService.refresh(),
    staleTime: 1000 * 60 * 15,
  });
};
