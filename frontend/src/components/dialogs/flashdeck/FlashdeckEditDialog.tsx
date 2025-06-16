import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { FlashdeckDialogProps, FlashdeckModifiableProps } from '@/types/flashdeck';
import { FlashdeckForm } from '@/components/forms/FlashdeckForm';
import { useEditFlashdeck } from '@/hooks/flashdeck/useEditFlashdeck';
import { toast } from 'sonner';

export const FlashdeckEditDialog = ({
  flashdeckCardProps,
  open,
  onOpenChange,
}: FlashdeckDialogProps) => {
  const editFlashdeck = useEditFlashdeck();

  const handleEdit = (modifiableData: FlashdeckModifiableProps) => {
    editFlashdeck.mutate(
      { flashdeckId: flashdeckCardProps.id, data: modifiableData },
      {
        onSuccess: () => {
          onOpenChange(false);
          toast.success('Flashdeck updated successfully!');
        },
        onError: err => {
          toast.error('Failed to update flashdeck. Please try again.');
          console.error('Error while updating flashdeck:', err);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit flashdeck</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <FlashdeckForm
          flashdeckCardProps={flashdeckCardProps}
          submitText={'Edit'}
          isSubmitting={editFlashdeck.isPending}
          onSubmit={handleEdit}
        />
      </DialogContent>
    </Dialog>
  );
};
