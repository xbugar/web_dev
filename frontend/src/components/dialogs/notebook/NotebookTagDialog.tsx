import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CreateTag } from '@/types/tag';
import { AccentColor } from '@/components/cards/cardColors.ts';
import { Tag } from '@/components/cards/Tag.tsx';
import { TagForm } from '@/components/forms/TagForm.tsx';
import { useState } from 'react';
import { useAllTags } from '@/hooks/tag/useAllTags';
import { useCreateTagNotebook } from '@/hooks/notebook/useCreateTagNotebook';
import { useNotebook } from '@/hooks/notebook/useNotebook';
import { Notebook, NotebookDialogProps } from '@/types/notebook';
import { useDeleteTagFromNotebook } from '@/hooks/notebook/useDeleteTagFromNotebook';
import { DeleteConfirmationDialog } from '@/components/dialogs/generic/DeleteConfirmationDialog';
import { toast } from 'sonner';
import { EmptyState } from '@/components/cards/EmptyState';

export function NotebookTagDialog({ notebookCardProps, open, onOpenChange }: NotebookDialogProps) {
  const createTag = useCreateTagNotebook(notebookCardProps.id);
  const deleteTag = useDeleteTagFromNotebook({ notebookId: notebookCardProps.id });
  const notebookPromise = useNotebook(notebookCardProps.id);
  const allTags = useAllTags();
  const notebookData: Notebook = notebookPromise.data as Notebook;

  const [openDeleteTag, setOpenDeleteTag] = useState(false);
  const [deleteTagId, setDeleteTagId] = useState<string>('');

  const handleCreateAndAssignTag = (data: CreateTag) => {
    if (data.name === '') {
      return;
    }

    createTag.mutate(
      { notebookId: notebookCardProps.id, data },
      {
        onError: err => {
          toast.error('Failed to create tag. Please try again.');
          console.error('Error while creating a tag:', err);
        },
      },
    );
  };

  const handleDelete = () => {
    deleteTag.mutate({ notebookId: notebookCardProps.id, tagId: deleteTagId });
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit tags</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div>
            {notebookData && notebookData.tags && notebookData.tags.length > 0 ? (
              <div className="hide-scrollbar mb-4 max-h-24 overflow-y-auto">
                <div className="flex flex-wrap justify-center gap-2">
                  {notebookData.tags.map((tag, index) => (
                    <div key={index} className="relative">
                      <div
                        onClick={() => {
                          setOpenDeleteTag(true);
                          setDeleteTagId(tag.id);
                        }}
                      >
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
              </div>
            ) : (
              <EmptyState title={'No tags'} message={'Start by creating your first tag.'} />
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

      <DeleteConfirmationDialog
        open={openDeleteTag}
        onOpenChange={setOpenDeleteTag}
        onDelete={handleDelete}
        isPending={deleteTag.isPending}
      />
    </>
  );
}
