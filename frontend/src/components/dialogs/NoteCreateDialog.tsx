import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx';

import { useCreateNote } from '@/hooks/useCreateNote.ts';
import { CreateNote } from '@/types/Note.ts';
import { NotebookNoteForm } from '@/components/forms/NotebookNoteForm';

type NoteCreateDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  notebookId: string;
};

export const NoteCreateDialog = ({ open, onOpenChange, notebookId }: NoteCreateDialogProps) => {
  const createNote = useCreateNote();

  const handleCreate = (data: CreateNote) => {
    createNote.mutate(
      { notebookId, data },
      {
        onSuccess: () => onOpenChange(false),
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
        <NotebookNoteForm
          type="note"
          onSubmit={handleCreate}
          isSubmitting={createNote.isPending}
          submitText={'Create'}
        />
      </DialogContent>
    </Dialog>
  );
};
