import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CreateTag } from '@/types/tagType';
import { AccentColor } from '@/components/cards/cardColors.ts';
import { Tag } from '@/components/cards/Tag.tsx';
import { TagForm } from '@/components/forms/TagForm.tsx';
import { useState } from 'react';
import { useAllTags } from '@/hooks/tag/useAllTags';
import { useCreateTagFlashdeck } from '@/hooks/flashdeck/useCreateTagFlashdeck';
import { useFlashdeck } from '@/hooks/flashdeck/useFlashdeck';
import { Flashdeck, FlashdeckDialogProps } from '@/types/flashdeck';
import { useDeleteTagFromFlashdeck } from '@/hooks/flashdeck/useDeleteTagFromFlashdeck';
import { DeleteConfirmationDialog } from '@/components/dialogs/generic/DeleteConfirmationDialog';
import { toast } from 'sonner';

export function FlashdeckTagDialog({
  flashdeckCardProps,
  open,
  onOpenChange,
}: FlashdeckDialogProps) {
  const createTag = useCreateTagFlashdeck(flashdeckCardProps.id);
  const deleteTag = useDeleteTagFromFlashdeck({ flashdeckId: flashdeckCardProps.id });
  const flashdeckPromise = useFlashdeck(flashdeckCardProps.id);
  const allTags = useAllTags();
  const flashdeckData: Flashdeck = flashdeckPromise.data as Flashdeck;

  const [openDeleteTag, setOpenDeleteTag] = useState(false);
  const [deleteTagId, setDeleteTagId] = useState<string>('');

  const handleCreateAndAssignTag = (data: CreateTag) => {
    if (data.name === '') {
      return;
    }

    createTag.mutate(
      { flashdeckId: flashdeckCardProps.id, data },
      {
        onError: err => {
          toast.error('Failed to create tag. Please try again.');
          console.error('Error while creating a tag:', err);
        },
      },
    );
  };

  const handleDelete = () => {
    deleteTag.mutate({ flashdeckId: flashdeckCardProps.id, tagId: deleteTagId });
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
            {flashdeckData && flashdeckData.tags && flashdeckData.tags.length > 0 ? (
              <div className="hide-scrollbar mb-4 max-h-24 overflow-y-auto">
                <div className="flex flex-wrap justify-center gap-2">
                  {flashdeckData.tags.map((tag, index) => (
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
              <p className="text-muted-foreground mb-4 text-center text-sm italic">No tags</p>
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
