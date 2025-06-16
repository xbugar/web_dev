import { useCreateEvent } from '@/hooks/event/useCreateEvent';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.tsx';
import { EventForm } from '@/components/forms/EventForm.tsx';
import { EventModifiableProps } from '@/types/event';
import { toast } from 'sonner';

type EventCreateDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  day: Date;
};

export const EventCreateDialog = ({ open, onOpenChange, day }: EventCreateDialogProps) => {
  const createEvent = useCreateEvent();

  const handleCreate = (modifiableData: EventModifiableProps) => {
    createEvent.mutate(
      { data: modifiableData },
      {
        onSuccess: () => {
          onOpenChange(false);
          toast.success('Event created successfully!');
        },
        onError: err => {
          toast.error('Failed to create event. Please try again.');
          console.error('Error while creating event:', err);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new event</DialogTitle>
        </DialogHeader>
        <EventForm
          onSubmit={handleCreate}
          isSubmitting={createEvent.isPending}
          submitText="Create"
          dateFrom={day}
          dateTo={day}
        />
      </DialogContent>
    </Dialog>
  );
};
