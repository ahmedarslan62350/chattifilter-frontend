import { LoginRequest, RegisterRequest, VerifyRequest } from "@/types/api";
import { apiClient } from "../lib/axiosClient";

const client = apiClient();

export const authService = {
  register: (data: RegisterRequest) => client.post("/auth/register", data),
  verify: (data: VerifyRequest) => client.post("/auth/verify", data),
  login: (data: LoginRequest) => client.post("/auth/login", data),
  logout: () => client.get("/auth/logout", { withCredentials: true }),
  refresh: () => client.get("/auth/refresh", { withCredentials: true }),
  resend: () => client.get("/auth/resend", { withCredentials: true }),
};
