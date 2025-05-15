import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useDeleteTagFromNotebook } from "@/hooks/useDeleteTagFromNotebook.ts";

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
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete and remove your data from our
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            {deleteTag.isPending ? 'Deleting...' : 'Continue'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
