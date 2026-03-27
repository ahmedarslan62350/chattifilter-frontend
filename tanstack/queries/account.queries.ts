import { useQuery } from "@tanstack/react-query";
import { accountService } from "@/api/account.apis";

export const useGetAllAccounts = () => {
  return useQuery({
    queryKey: ["accounts", "all"],
    queryFn: () => accountService.getAllAccounts(),
  });
};
