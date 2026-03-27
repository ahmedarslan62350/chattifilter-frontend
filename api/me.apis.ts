import { apiClient } from "@/lib/axiosClient";
import { UpdateMeRequest } from "@/types/api";

const client = apiClient();

export const meService = {
  getMe: () => client.get("/me", { withCredentials: true }),
  updateMe: (data: UpdateMeRequest) => client.put("/me", data, { withCredentials: true }),
};
