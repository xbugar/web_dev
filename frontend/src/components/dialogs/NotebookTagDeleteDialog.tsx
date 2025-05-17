import { useDeleteTagFromNotebook } from "@/hooks/useDeleteTagFromNotebook.ts";
import { DeleteConfirmationDialog } from "@/components/dialogs/DeleteConfirmationDialog.tsx";

type TagDeleteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  notebookId: string;
  tagId: string;
};

export const NotebookTagDeleteDialog = ({
                                      open,
                                      onOpenChange,
                                      notebookId,
                                      tagId,
                                    }: TagDeleteDialogProps) => {
  const deleteTag = useDeleteTagFromNotebook({ notebookId });

  const handleDelete = () => {
    deleteTag.mutate({notebookId, tagId});
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
