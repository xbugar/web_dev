import {
  Dialog,
  DialogContent, DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.tsx"

import { CreateNotebook } from "@/types/Notebook.ts";
import { NotebookNoteForm } from "@/components/dialogs/NotebookNoteForm.tsx";
import { useEditNotebook } from "@/hooks/useEditNotebook.ts";

type NotebookEditDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  notebookId: string;
  initialData: CreateNotebook;
}

export const NotebookEditDialog = ({ open, onOpenChange, notebookId, initialData } : NotebookEditDialogProps ) => {
  const editNotebook = useEditNotebook();

  const handleEdit = (data: CreateNotebook) => {
    editNotebook.mutate(
      { notebookId, data },
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
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <NotebookNoteForm
          type="notebook"
          onSubmit={handleEdit}
          isSubmitting={editNotebook.isPending}
          submitText={"Edit"}
          initialData={initialData}
        />
      </DialogContent>
    </Dialog>
  )
}

