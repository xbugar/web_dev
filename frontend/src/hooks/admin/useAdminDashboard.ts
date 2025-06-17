import { useQuery } from "@tanstack/react-query";
import { getAdminDashboard } from "@/services/adminService.ts";


export const useAdminDashboard = () => {
  return useQuery({
    queryKey: ['adminDashboard'],
    queryFn: () => getAdminDashboard(),
  });
};