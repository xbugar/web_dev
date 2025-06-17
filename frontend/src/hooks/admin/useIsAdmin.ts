import {useQuery} from "@tanstack/react-query";
import {getIsAdmin} from "@/services/adminService.ts";


export const useIsAdmin = () => {
    return useQuery({
        queryKey: ['IsAdmin'],
        queryFn: () => getIsAdmin(),
    });
};