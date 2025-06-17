import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog.tsx';
import { useCreateNote } from '@/hooks/note/useCreateNote';
import { NoteForm } from '@/components/forms/NoteForm';
import { NoteDialogProps, NoteModifiableProps } from '@/types/note';
import { toast } from 'sonner';

export const NoteCreateDialog = ({ noteCardProps, open, onOpenChange }: NoteDialogProps) => {
  const createNote = useCreateNote();

  const handleCreate = (modifiableData: NoteModifiableProps) => {
    createNote.mutate(
      { notebookId: noteCardProps.notebook.id, data: modifiableData },
      {
        onSuccess: () => {
          onOpenChange(false);
          toast.success('Note created successfully!');
        },
        onError: err => {
          toast.error('Failed to create note. Please try again.');
          console.error('Error while creating note:', err);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new note</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <NoteForm
          noteCardProps={noteCardProps}
          submitText={'Create'}
          isSubmitting={createNote.isPending}
          onSubmit={handleCreate}
        />
      </DialogContent>
    </Dialog>
  );
};
