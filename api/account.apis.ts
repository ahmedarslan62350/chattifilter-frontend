import { apiClient } from "@/lib/axiosClient";

const client = apiClient();

export const accountService = {
  getAllAccounts: () => client.get("/accounts", { withCredentials: true }),
};
