import {api} from "@/services/index.ts";
import {AdminDashboardUser} from "@/types/AdminDashboard.ts";

export const getAdminDashboard = async (): Promise<AdminDashboardUser[]> => {
    return api.get(`/admin/users`).then(response => response.data as AdminDashboardUser[]);
};

export const getIsAdmin = async (): Promise<boolean> => {
    return api.get(`/admin`).then(response => response.data.isAdmin as boolean);
};


export const deleteUser = async (userId: string,): Promise<void> => {
    return api.delete(`/admin/${userId}`);
}