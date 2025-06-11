import { useDeleteNote } from '@/hooks/useDeleteNote.ts';
import { DeleteConfirmationDialog } from "@/components/dialogs/DeleteConfirmationDialog.tsx";

type NoteDeleteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  noteId: string;
  notebookId: string;
};

export const NoteDeleteDialog = ({
                                   open,
                                   onOpenChange,
                                   noteId,
                                   notebookId,
                                 }: NoteDeleteDialogProps) => {
  const deleteNote = useDeleteNote({notebookId});

  const handleDelete = () => {
    deleteNote.mutate(noteId);
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
