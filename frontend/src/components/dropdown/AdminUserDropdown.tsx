import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,

} from '@/components/ui/dropdown-menu.tsx';
import { Ellipsis, Trash2 } from 'lucide-react';
import { useState } from 'react';

import {AdminUserDeleteDialog} from "@/components/dialogs/admin/AdminUserDeleteDialog.tsx";


export interface DropdownProps {
    userId: string;
}

export function AdminUserDropdown({ userId }: DropdownProps) {
    const [openDelete, setOpenDelete] = useState(false);


    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="hover:bg-muted rounded-[10%] p-0">
                        <Ellipsis className="h-5 w-5 text-black dark:text-white" />
                    </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="bg-white-secondary dark:bg-black-secondary m-2 text-xs">

                    <DropdownMenuItem onClick={() => setOpenDelete(true)} variant="destructive">
                        <Trash2 /> Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <AdminUserDeleteDialog
                open={openDelete}
                onOpenChange={setOpenDelete}
                userId={userId}
            ></AdminUserDeleteDialog>

        </>
    );
}