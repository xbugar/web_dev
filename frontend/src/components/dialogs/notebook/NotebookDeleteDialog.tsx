import { useDeleteNotebook } from '@/hooks/notebook/useDeleteNotebook';
import { DeleteConfirmationDialog } from '@/components/dialogs/generic/DeleteConfirmationDialog';
import { NotebookDialogProps } from '@/types/notebook';
import { toast } from 'sonner';

export const NotebookDeleteDialog = ({
  notebookCardProps,
  open,
  onOpenChange,
}: NotebookDialogProps) => {
  const deleteNotebook = useDeleteNotebook();

  const handleDelete = () => {
    deleteNotebook.mutate(notebookCardProps.id, {
      onSuccess: () => {
        toast.success('Notebook deleted successfully!');
      },
      onError: err => {
        toast.error('Failed to delete notebook. Please try again.');
        console.error('Error while deleting notebook:', err);
      },
    });
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
