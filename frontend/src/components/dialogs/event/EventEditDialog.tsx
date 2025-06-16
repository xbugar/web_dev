import { EventDialogProps, EventModifiableProps } from '@/types/event';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.tsx';
import { EventForm } from '@/components/forms/EventForm.tsx';
import { useEditEvent } from '@/hooks/event/useEditEvent';
import { toast } from 'sonner';

export const EventEditDialog = ({ eventCardProps, open, onOpenChange }: EventDialogProps) => {
  const createEvent = useEditEvent();

  const handleEdit = (modifiableData: EventModifiableProps) => {
    createEvent.mutate(
      { eventId: eventCardProps.id, data: modifiableData },
      {
        onSuccess: () => {
          onOpenChange(false);
          toast.success('Event updated successfully!');
        },
        onError: err => {
          toast.error('Failed to update event. Please try again.');
          console.error('Error while updating event:', err);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit event</DialogTitle>
        </DialogHeader>
        <EventForm
          eventCardProps={eventCardProps}
          submitText={'Edit'}
          isSubmitting={createEvent.isPending}
          onSubmit={handleEdit}
        />
      </DialogContent>
    </Dialog>
  );
};
