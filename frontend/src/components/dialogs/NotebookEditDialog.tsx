import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.tsx"

import { CreateNotebook } from "@/types/Notebook.ts";
import { NotebookForm } from "@/components/dialogs/NotebookForm.tsx";
import { useEditNotebook } from "@/hooks/useEditNotebook.ts";

type NotebookEditDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userId: string;
  initialData: CreateNotebook;
}

export const NotebookEditDialog = ({ open, onOpenChange, userId, initialData } : NotebookEditDialogProps ) => {
  const createNotebook = useEditNotebook();

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
          <DialogTitle>Edit notebook</DialogTitle>
        </DialogHeader>
        <NotebookForm
          onSubmit={handleCreate}
          isSubmitting={createNotebook.isPending}
          submitText={"Create"}
          initialData={initialData}
        />
      </DialogContent>
    </Dialog>
  )
}

