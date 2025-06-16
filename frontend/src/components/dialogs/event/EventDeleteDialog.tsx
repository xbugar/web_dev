import { DeleteConfirmationDialog } from '@/components/dialogs/generic/DeleteConfirmationDialog';
import { useDeleteEvent } from '@/hooks/event/useDeleteEvent';
import { EventDialogProps } from '@/types/event';
import { toast } from 'sonner';

export const EventDeleteDialog = ({ eventCardProps, open, onOpenChange }: EventDialogProps) => {
  const deleteEvent = useDeleteEvent({ eventId: eventCardProps.id });

  const handleDelete = () => {
    deleteEvent.mutate(
      { eventId: eventCardProps.id },
      {
        onSuccess: () => {
          toast.success('Event deleted successfully!');
        },
        onError: err => {
          toast.error('Failed to delete event. Please try again.');
          console.error('Error while deleting event:', err);
        },
      },
    );
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
