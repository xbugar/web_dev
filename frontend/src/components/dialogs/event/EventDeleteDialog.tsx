import { DeleteConfirmationDialog } from '@/components/dialogs/generic/DeleteConfirmationDialog';
import { useDeleteEvent } from '@/hooks/event/useDeleteEvent';

type EventDeleteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  eventId: string;
};

export const EventDeleteDialog = ({ open, onOpenChange, eventId }: EventDeleteDialogProps) => {
  const deleteEvent = useDeleteEvent({ eventId });

  const handleDelete = () => {
    deleteEvent.mutate({ eventId });
  };

  return (
    <DeleteConfirmationDialog
      open={open}
      onOpenChange={onOpenChange}
      onDelete={handleDelete}
      isPending={deleteEvent.isPending}
      navigateTo={'/events'}
    />
  );
};
