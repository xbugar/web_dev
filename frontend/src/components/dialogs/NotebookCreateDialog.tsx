import {
  Dialog,
  DialogContent, DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.tsx"

import { useCreateNotebook} from "@/hooks/useCreateNotebook.ts"
import { CreateNotebook } from "@/types/Notebook.ts";
import { NotebookNoteForm } from "@/components/dialogs/NotebookNoteForm.tsx";

type NotebookCreateDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: string;
}

export const NotebookCreateDialog = ({ open, onOpenChange, userId} : NotebookCreateDialogProps ) => {
  const createNotebook = useCreateNotebook();

  const handleCreate = (data: CreateNotebook) => {
    createNotebook.mutate(
      { userId, data },
      {
        onSuccess: () =>
          onOpenChange(false),
      }
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new notebook</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <NotebookNoteForm
          type="notebook"
          onSubmit={handleCreate}
          isSubmitting={createNotebook.isPending}
          submitText={"Create"}/>
      </DialogContent>
    </Dialog>
  )
}

