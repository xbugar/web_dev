import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { CreateTag } from "@/types/TagType.ts";
import { AccentColor } from "@/components/cards/cardColors.ts";
import { Tag } from "@/components/cards/Tag.tsx"
import { TagForm } from "@/components/forms/TagForm.tsx";
import { useState } from "react";
import { useAllTags } from "@/hooks/useAllTags.ts";
import { useCreateTagNotebook } from "@/hooks/useCreateTagNotebook.ts";
import { useNotebook } from "@/hooks/useNotebook.ts";
import { Notebook } from "@/types/Notebook.ts";
import { NotebookTagDeleteDialog } from "@/components/dialogs/NotebookTagDeleteDialog.tsx";

interface NotebookTagDialog {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  notebookId: string;
}

export function NotebookTagDialog({ open, onOpenChange, notebookId }: NotebookTagDialog) {
  const createTag = useCreateTagNotebook(notebookId);
  const notebookPromise = useNotebook(notebookId);
  const allTags = useAllTags();
  const notebookData : Notebook = notebookPromise.data as Notebook;

  const [openDeleteTag, setOpenDeleteTag] = useState(false);
  const [deleteTagId, setDeleteTagId] = useState<string>("");

  const handleCreateAndAssignTag = (data: CreateTag) => {
    if (data.name === '') {
      return;
    }

    try {
      createTag.mutate({notebookId, data});
    } catch (err) {
      console.error("Error while creating a tag:", err);
    }
  };

  return(
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit tags</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div>
            {notebookData && notebookData.tags && notebookData.tags.length > 0 ? (
              <div className="hide-scrollbar max-h-24 overflow-y-auto mb-4">
                <div className="flex flex-wrap gap-2 justify-center">
                  {notebookData.tags.map((tag, index) => (
                    <div key={index} className="relative">
                      <div onClick={() => {
                        setOpenDeleteTag(true);
                        setDeleteTagId(tag.id);
                      }}>
                        <Tag
                          name={tag.name}
                          color={tag.color as AccentColor}
                          key={index}
                          x={true}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* shadow on the left side */}
                {/* <div className="pointer-events-none absolute top-0 left-0 h-full w-3 bg-gradient-to-r from-white-secondary dark:from-black-secondary to-transparent"></div> */}
                <div
                  className="from-white-secondary dark:from-black-secondary pointer-events-none absolute top-0 right-0 h-full w-4 bg-gradient-to-l to-transparent"></div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center italic mb-4">No tags</p>
            )}
          </div>

          <TagForm
            onSubmit={handleCreateAndAssignTag}
            isSubmitting={createTag.isPending}
            submitText={'Add'}
            allTags={allTags.data ?? []}
          />

        </DialogContent>
      </Dialog>

      <NotebookTagDeleteDialog
        open={openDeleteTag}
        onOpenChange={setOpenDeleteTag}
        notebookId={notebookId}
        tagId={deleteTagId}
      />
    </>
  );
}
