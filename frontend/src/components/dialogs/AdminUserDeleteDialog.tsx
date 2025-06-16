import {DeleteConfirmationDialog} from "@/components/dialogs/DeleteConfirmationDialog.tsx";
import {useAdminDeleteUser} from "@/hooks/useAdminDeleteUser.ts";

type AdminUserDeleteDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    userId: string;
};

export const AdminUserDeleteDialog = ({
                                     open,
                                     onOpenChange,
                                     userId,
                                 }: AdminUserDeleteDialogProps) => {
    const deleteUser = useAdminDeleteUser({userId});

    const handleDelete = () => {
        deleteUser.mutate(userId);
    };

    return (
        <DeleteConfirmationDialog
            open={open}
            onOpenChange={onOpenChange}
            onDelete={handleDelete}
            isPending={deleteUser.isPending}
        />
    );
};