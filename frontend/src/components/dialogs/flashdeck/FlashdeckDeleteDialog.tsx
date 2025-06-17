import { useDeleteFlashdeck } from '@/hooks/flashdeck/useDeleteFlashdeck';
import { DeleteConfirmationDialog } from '@/components/dialogs/generic/DeleteConfirmationDialog';
import { FlashdeckDialogProps } from '@/types/flashdeck';
import { toast } from 'sonner';

export const FlashdeckDeleteDialog = ({
  flashdeckCardProps,
  open,
  onOpenChange,
}: FlashdeckDialogProps) => {
  const deleteFlashdeck = useDeleteFlashdeck();

  const handleDelete = () => {
    deleteFlashdeck.mutate(flashdeckCardProps.id, {
      onSuccess: () => {
        toast.success('Flashdeck deleted successfully!');
      },
      onError: err => {
        toast.error('Failed to delete flashdeck. Please try again.');
        console.error('Error while deleting flashdeck:', err);
      },
    });
  };

  return (
    <DeleteConfirmationDialog
      open={open}
      onOpenChange={onOpenChange}
      onDelete={handleDelete}
      isPending={deleteFlashdeck.isPending}
      navigateTo={'/flashdecks'}
    />
  );
};
