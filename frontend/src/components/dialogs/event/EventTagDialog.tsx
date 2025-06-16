import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CreateTag } from '@/types/tagType';
import { Tag } from '@/components/cards/Tag';
import { TagForm } from '@/components/forms/TagForm';
import { useState } from 'react';
import { useAllTags } from '@/hooks/tag/useAllTags';
import { AccentColor } from '@/components/cards/cardColors';
import { DeleteConfirmationDialog } from '@/components/dialogs/generic/DeleteConfirmationDialog';
import { useCreateTagEvent } from '@/hooks/event/useCreateTagEvent';
import { useDeleteTagFromEvent } from '@/hooks/event/useDeleteTagFromEvent';
import { useGetEventById } from '@/hooks/event/useGetEventById';
import { EventDialogProps, Event } from '@/types/event';
import { toast } from 'sonner';

export function EventTagDialog({ eventCardProps, open, onOpenChange }: EventDialogProps) {
  const createTag = useCreateTagEvent();
  const deleteTag = useDeleteTagFromEvent();
  const allTags = useAllTags();
  const eventPromise = useGetEventById(eventCardProps.id);
  const eventData: Event = eventPromise.data as Event;

  const [openDeleteTag, setOpenDeleteTag] = useState(false);
  const [deleteTagId, setDeleteTagId] = useState<string>('');

  const handleCreateAndAssignTag = (data: CreateTag) => {
    if (data.name === '') {
      return;
    }

    createTag.mutate(
      { eventId: eventCardProps.id, data },
      {
        onError: err => {
          toast.error('Failed to create tag. Please try again.');
          console.error('Error while creating a tag:', err);
        },
      },
    );
  };

  const handleDelete = () => {
    deleteTag.mutate({ eventId: eventCardProps.id, tagId: deleteTagId });
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
