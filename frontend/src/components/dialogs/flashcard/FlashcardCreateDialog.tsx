import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog.tsx';
import { useCreateFlashcard } from '@/hooks/flashcard/useCreateFlashcard';
import { FlashcardForm } from '@/components/forms/FlashcardForm';
import { FlashcardDialogProps, FlashcardModifiableProps } from '@/types/flashcard';
import { toast } from 'sonner';

export const FlashcardCreateDialog = ({
  flashcardCardProps,
  open,
  onOpenChange,
}: FlashcardDialogProps) => {
  const createFlashcard = useCreateFlashcard();

  const handleCreate = (modifiableData: FlashcardModifiableProps) => {
    createFlashcard.mutate(
      { flashdeckId: flashcardCardProps.flashdeck.id, data: modifiableData },
      {
        onSuccess: () => {
          onOpenChange(false);
          toast.success('Flashcard created successfully!');
        },
        onError: err => {
          toast.error('Failed to create flashcard. Please try again.');
          console.error('Error while creating flashcard:', err);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new flashcard</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <FlashcardForm
          flashcardCardProps={flashcardCardProps}
          submitText={'Create'}
          isSubmitting={createFlashcard.isPending}
          onSubmit={handleCreate}
        />
      </DialogContent>
    </Dialog>
  );
};
