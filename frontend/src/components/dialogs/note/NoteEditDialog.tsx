import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { NoteDialogProps, NoteModifiableProps } from '@/types/note';
import { NoteForm } from '@/components/forms/NoteForm';
import { useEditNote } from '@/hooks/note/useEditNote';
import { toast } from 'sonner';

export const NoteEditDialog = ({ noteCardProps, open, onOpenChange }: NoteDialogProps) => {
  const editNote = useEditNote({ notebookId: noteCardProps.notebook.id });

  const handleEdit = (modifiableData: NoteModifiableProps) => {
    editNote.mutate(
      { noteId: noteCardProps.id, data: modifiableData },
      {
        onSuccess: () => {
          onOpenChange(false);
          toast.success('Note updated successfully!');
        },
        onError: err => {
          toast.error('Failed to update note. Please try again.');
          console.error('Error while updating note:', err);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit note</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <NoteForm
          noteCardProps={noteCardProps}
          submitText={'Edit'}
          isSubmitting={editNote.isPending}
          onSubmit={handleEdit}
        />
      </DialogContent>
    </Dialog>
  );
};
