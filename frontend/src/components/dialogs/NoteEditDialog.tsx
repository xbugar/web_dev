import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx';

import { CreateNote, Note } from '@/types/Note.ts';
import { NotebookNoteForm } from '@/components/forms/NotebookNoteForm';
import { useEditNote } from '@/hooks/useEditNote.ts';

type NoteEditDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  noteId: string;
  notebookId: string;
  initialData: Note;
};

export const NoteEditDialog = ({
  open,
  onOpenChange,
  noteId,
  notebookId,
  initialData,
}: NoteEditDialogProps) => {
  const editNote = useEditNote({ notebookId });

  const handleEdit = (data: CreateNote) => {
    editNote.mutate(
      { noteId, data },
      {
        onSuccess: () => onOpenChange(false),
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
        <NotebookNoteForm
          type="note"
          onSubmit={handleEdit}
          isSubmitting={editNote.isPending}
          submitText={'Edit'}
          initialData={initialData}
        />
      </DialogContent>
    </Dialog>
  );
};
