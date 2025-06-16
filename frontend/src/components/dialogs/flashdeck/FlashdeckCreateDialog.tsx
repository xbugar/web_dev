import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useCreateFlashdeck } from '@/hooks/flashdeck/useCreateFlashdeck';
import { FlashdeckModifiableProps, FlashdeckDialogProps } from '@/types/flashdeck';
import { FlashdeckForm } from '@/components/forms/FlashdeckForm';
import { toast } from 'sonner';

export const FlashdeckCreateDialog = ({
  flashdeckCardProps,
  open,
  onOpenChange,
}: FlashdeckDialogProps) => {
  const createFlashdeck = useCreateFlashdeck();

  const handleCreate = (modifiableData: FlashdeckModifiableProps) => {
    createFlashdeck.mutate(
      { data: modifiableData },
      {
        onSuccess: () => {
          onOpenChange(false);
          toast.success('Flashdeck created successfully!');
        },
        onError: err => {
          toast.error('Failed to create flashdeck. Please try again.');
          console.error('Error while creating flashdeck:', err);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new flashdeck</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <FlashdeckForm
          flashdeckCardProps={flashdeckCardProps}
          submitText={'Create'}
          isSubmitting={createFlashdeck.isPending}
          onSubmit={handleCreate}
        />
      </DialogContent>
    </Dialog>
  );
};
