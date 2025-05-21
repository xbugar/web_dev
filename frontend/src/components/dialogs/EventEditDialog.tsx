import { CreateEvent, EventType } from "@/types/EventType.ts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx';
import { EventForm } from "@/components/forms/EventForm.tsx";
import { useEditEvent } from "@/hooks/useEditEvent.ts";

type EventEditDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  eventId: string;
  initialData: EventType;
};


export const EventEditDialog = ({
  open,
  onOpenChange,
  eventId,
  initialData,
}: EventEditDialogProps) => {
  const createEvent = useEditEvent();

  const handleEdit = (data: CreateEvent) => {
    createEvent.mutate(
      { eventId, data },
      {
        onSuccess: () => onOpenChange(false),
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