import { useMutation, useQueryClient } from "@tanstack/react-query";
import { meService } from "@/api/me.apis";
import { UpdateMeRequest } from "@/types/api";

export const useUpdateMeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateMeRequest) => meService.updateMe(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me", "profile"] });
    },
  });
};
