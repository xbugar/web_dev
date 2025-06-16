import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useCreateNotebook } from '@/hooks/notebook/useCreateNotebook';
import { NotebookModifiableProps, NotebookDialogProps } from '@/types/notebook';
import { NotebookForm } from '@/components/forms/NotebookForm';
import { toast } from 'sonner';

export const NotebookCreateDialog = ({
  notebookCardProps,
  open,
  onOpenChange,
}: NotebookDialogProps) => {
  const createNotebook = useCreateNotebook();

  const handleCreate = (modifiableData: NotebookModifiableProps) => {
    createNotebook.mutate(
      { data: modifiableData },
      {
        onSuccess: () => {
          onOpenChange(false);
          toast.success('Notebook created successfully!');
        },
        onError: err => {
          toast.error('Failed to create notebook. Please try again.');
          console.error('Error while creating notebook:', err);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new notebook</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <NotebookForm
          notebookCardProps={notebookCardProps}
          submitText={'Create'}
          isSubmitting={createNotebook.isPending}
          onSubmit={handleCreate}
        />
      </DialogContent>
    </Dialog>
  );
};
