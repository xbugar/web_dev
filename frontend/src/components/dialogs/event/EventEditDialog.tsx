import { EventModifiableProps, Event } from "@/types/event";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx';
import { EventForm } from "@/components/forms/EventForm";
import { useEditEvent } from "@/hooks/event/useEditEvent";
import { toast } from "sonner";

type EventEditDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  eventId: string;
  initialData: Event;
};


export const EventEditDialog = ({
  open,
  onOpenChange,
  eventId,
  initialData,
}: EventEditDialogProps) => {
  const createEvent = useEditEvent();

  const handleEdit = (modifiableData: EventModifiableProps) => {
    createEvent.mutate(
      { eventId: eventId, data: modifiableData },
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
          onSubmit={handleEdit}
          isSubmitting={createEvent.isPending}
          submitText="Edit"
          initialData={initialData}
          dateFrom={new Date(initialData.timeFrom)}
          dateTo={new Date(initialData.timeTo)}
        />
      </DialogContent>
    </Dialog>
  );
}
