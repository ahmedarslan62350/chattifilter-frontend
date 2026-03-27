import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/api/auth.apis";
import { RegisterRequest, VerifyRequest, LoginRequest } from "@/types/api";

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (data: RegisterRequest) => authService.register(data),
    onSuccess: (response) => {
      console.log("Registration successful", response);
    },
  });
};

export const useVerifyMutation = () => {
  return useMutation({
    mutationFn: (data: VerifyRequest) => authService.verify(data),
    onSuccess: () => {
      // Redirect or show success message after token verification
    },
  });
};

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginRequest) => authService.login(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me", "profile"] });
    },
  });
};
