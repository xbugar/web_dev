import { useDeleteNotebook } from '@/hooks/useDeleteNotebook.ts';
import { DeleteConfirmationDialog } from "@/components/dialogs/DeleteConfirmationDialog.tsx";

type NotebookDeleteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  notebookId: string;
};

export const NotebookDeleteDialog = ({
                                       open,
                                       onOpenChange,
                                       notebookId,
                                     }: NotebookDeleteDialogProps) => {
  const deleteNotebook = useDeleteNotebook();

  const handleDelete = () => {
    deleteNotebook.mutate(notebookId);
  };

  return (
    <DeleteConfirmationDialog
      open={open}
      onOpenChange={onOpenChange}
      onDelete={handleDelete}
      isPending={deleteNotebook.isPending}
      navigateTo={'/notebooks'}
    />
  );
};
