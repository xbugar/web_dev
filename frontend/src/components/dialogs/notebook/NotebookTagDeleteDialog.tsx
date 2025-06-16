import { useDeleteTagFromNotebook } from '@/hooks/notebook/useDeleteTagFromNotebook';
import { DeleteConfirmationDialog } from '@/components/dialogs/generic/DeleteConfirmationDialog';
import { NotebookTagDeleteDialogProps } from '@/types/notebook';

export const NotebookTagDeleteDialog = ({
  notebookCardProps,
  open,
  onOpenChange,
  tagId,
}: NotebookTagDeleteDialogProps) => {
  const deleteTag = useDeleteTagFromNotebook({ notebookId: notebookCardProps.id });

  const handleDelete = () => {
    deleteTag.mutate({ notebookId: notebookCardProps.id, tagId });
  };

  return (
    <DeleteConfirmationDialog
      open={open}
      onOpenChange={onOpenChange}
      onDelete={handleDelete}
      isPending={deleteTag.isPending}
    />
  );
};
