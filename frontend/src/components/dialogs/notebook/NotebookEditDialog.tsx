import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { NotebookDialogProps, NotebookModifiableProps } from '@/types/notebook';
import { NotebookForm } from '@/components/forms/NotebookForm';
import { useEditNotebook } from '@/hooks/notebook/useEditNotebook';
import { toast } from 'sonner';

export const NotebookEditDialog = ({
  notebookCardProps,
  open,
  onOpenChange,
}: NotebookDialogProps) => {
  const editNotebook = useEditNotebook();

  const handleEdit = (modifiableData: NotebookModifiableProps) => {
    editNotebook.mutate(
      { notebookId: notebookCardProps.id, data: modifiableData },
      {
        onSuccess: () => {
          onOpenChange(false);
          toast.success('Notebook updated successfully!');
        },
        onError: err => {
          toast.error('Failed to update notebook. Please try again.');
          console.error('Error while updating notebook:', err);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit notebook</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <NotebookForm
          notebookCardProps={notebookCardProps}
          submitText={'Edit'}
          isSubmitting={editNotebook.isPending}
          onSubmit={handleEdit}
        />
      </DialogContent>
    </Dialog>
  );
};
