import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CreateTag } from '@/types/tag';
import { Tag } from '@/components/cards/Tag.tsx';
import { TagForm } from '@/components/forms/TagForm.tsx';
import { useState } from 'react';
import { useAllTags } from '@/hooks/tag/useAllTags.ts';
import { AccentColor } from '@/components/cards/cardColors';
import { DeleteConfirmationDialog } from '@/components/dialogs/generic/DeleteConfirmationDialog.tsx';
import { useCreateTagEvent } from '@/hooks/event/useCreateTagEvent.ts';
import { useDeleteTagFromEvent } from '@/hooks/event/useDeleteTagFromEvent.ts';
import { useGetEventById } from '@/hooks/event/useGetEventById.ts';
import { Event } from '@/types/event';

interface EventTagDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  eventId: string;
}

export function EventTagDialog({ open, onOpenChange, eventId }: EventTagDialogProps) {
  const createTag = useCreateTagEvent();
  const deleteTag = useDeleteTagFromEvent();
  const allTags = useAllTags();
  const eventPromise = useGetEventById(eventId);
  const eventData: Event = eventPromise.data as Event;

  const [openDeleteTag, setOpenDeleteTag] = useState(false);
  const [deleteTagId, setDeleteTagId] = useState<string>('');

  const handleCreateAndAssignTag = (data: CreateTag) => {
    if (data.name === '') {
      return;
    }

    try {
      createTag.mutate({ eventId, data });
    } catch (err) {
      console.error('Error while creating a tag:', err);
    }
  };

  const handleDelete = () => {
    deleteTag.mutate({ eventId, tagId: deleteTagId });
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
            {eventData && eventData.tags && eventData.tags.length > 0 ? (
              <div className="hide-scrollbar mb-4 max-h-24 overflow-y-auto">
                <div className="flex flex-wrap justify-center gap-2">
                  {eventData.tags.map((tag, index) => (
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
                {/* shadow on the left side */}
                {/* <div className="pointer-events-none absolute top-0 left-0 h-full w-3 bg-gradient-to-r from-white-secondary dark:from-black-secondary to-transparent"></div> */}
                <div className="from-white-secondary dark:from-black-secondary pointer-events-none absolute top-0 right-0 h-full w-4 bg-gradient-to-l to-transparent"></div>
              </div>
            ) : (
              <p className="text-muted-foreground mb-4 text-sm italic">No tags</p>
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
