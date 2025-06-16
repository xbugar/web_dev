import { useDeleteTagFromNote } from '@/hooks/note/useDeleteTagFromNote';
import { DeleteConfirmationDialog } from '@/components/dialogs/generic/DeleteConfirmationDialog';
import { NoteTagDeleteDialogProps } from '@/types/note';

export const NoteTagDeleteDialog = ({
  noteCardProps,
  open,
  onOpenChange,
  tagId,
}: NoteTagDeleteDialogProps) => {
  const deleteTag = useDeleteTagFromNote({ notebookId: noteCardProps.notebook.id });

  const handleDelete = () => {
    deleteTag.mutate({ noteId: noteCardProps.id, tagId });
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
