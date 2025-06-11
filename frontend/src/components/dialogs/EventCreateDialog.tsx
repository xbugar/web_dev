import { useCreateEvent } from "@/hooks/useCreateEvent.ts";
import { CreateEvent } from "@/types/EventType.ts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog.tsx';
import { EventForm } from "@/components/forms/EventForm.tsx";

type EventCreateDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  day: Date;
};


export const EventCreateDialog = ({ open, onOpenChange, day}: EventCreateDialogProps) => {
  const createEvent = useCreateEvent();

  const handleCreate = (data: CreateEvent) => {
    createEvent.mutate(
      { data },
      {
        onSuccess: () => onOpenChange(false),
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
}