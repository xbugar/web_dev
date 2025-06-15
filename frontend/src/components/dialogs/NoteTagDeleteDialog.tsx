import { useDeleteTagFromNote } from "@/hooks/useDeleteTagFromNote.ts";
import { DeleteConfirmationDialog } from "@/components/dialogs/DeleteConfirmationDialog.tsx";

type TagDeleteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  noteId: string;
  notebookId: string;
  tagId: string;
};

export const NoteTagDeleteDialog = ({
                                   open,
                                   onOpenChange,
                                   noteId,
                                  notebookId,
                                  tagId,
                                 }: TagDeleteDialogProps) => {
  const deleteTag = useDeleteTagFromNote({ notebookId });

  const handleDelete = () => {
    deleteTag.mutate({noteId, tagId});
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
