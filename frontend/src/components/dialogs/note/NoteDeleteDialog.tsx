import { useDeleteNote } from '@/hooks/note/useDeleteNote';
import { DeleteConfirmationDialog } from '@/components/dialogs/generic/DeleteConfirmationDialog';
import { NoteDialogProps } from '@/types/note';
import { toast } from 'sonner';

export const NoteDeleteDialog = ({ noteCardProps, open, onOpenChange }: NoteDialogProps) => {
  const deleteNote = useDeleteNote({ notebookId: noteCardProps.notebook.id });

  const handleDelete = () => {
    deleteNote.mutate(noteCardProps.id, {
      onSuccess: () => {
        toast.success('Note deleted successfully!');
      },
      onError: err => {
        toast.error('Failed to delete note. Please try again.');
        console.error('Error while deleting note:', err);
      },
    });
  };

  return (
    <DeleteConfirmationDialog
      open={open}
      onOpenChange={onOpenChange}
      onDelete={handleDelete}
      isPending={deleteNote.isPending}
    />
  );
};
