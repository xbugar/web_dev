import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useDeleteNotebook } from "@/hooks/useDeleteNotebook.ts";
import { Navigate } from "@tanstack/react-router";
import { useState } from "react";

type NotebookDeleteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  notebookId: string;
}

export const NotebookDeleteDialog = ({open, onOpenChange, notebookId} : NotebookDeleteDialogProps) => {
  const deleteNotebook = useDeleteNotebook();

  const handleDelete = () => {
    deleteNotebook.mutate(notebookId);
    setIsDeleted(true)
  }

  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            {deleteNotebook.isPending ? "Deleting..." : "Continue"}
            {isDeleted && (
              <Navigate to={"/notebooks"}/>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
