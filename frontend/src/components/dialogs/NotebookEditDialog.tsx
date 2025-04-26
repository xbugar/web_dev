import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.tsx"

import { CreateNotebook } from "@/types/Notebook.ts";
import { NotebookNoteForm } from "@/components/dialogs/NotebookNoteForm.tsx";
import { useEditNotebook } from "@/hooks/useEditNotebook.ts";

type NotebookEditDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: string;
  initialData: CreateNotebook;
}

export const NotebookEditDialog = ({ open, onOpenChange, userId, initialData } : NotebookEditDialogProps ) => {
  const editNotebook = useEditNotebook();

  const handleEdit = (data: CreateNotebook) => {
    editNotebook.mutate(
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
          <DialogTitle>Edit notebook</DialogTitle>
        </DialogHeader>
        <NotebookNoteForm
          type="notebook"
          onSubmit={handleEdit}
          isSubmitting={editNotebook.isPending}
          submitText={"Create"}
          initialData={initialData}
        />
      </DialogContent>
    </Dialog>
  )
}

