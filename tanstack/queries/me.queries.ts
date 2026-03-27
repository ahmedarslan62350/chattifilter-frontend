import { useQuery } from '@tanstack/react-query';
import { meService } from '@/api/me.apis';

export const useGetMe = () => {
  return useQuery({
    queryKey: ['me', 'profile'],
    queryFn: () => meService.getMe(),
  });
};
