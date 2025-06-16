import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { FlashcardDialogProps, FlashcardModifiableProps } from '@/types/flashcard';
import { FlashcardForm } from '@/components/forms/FlashcardForm';
import { useEditFlashcard } from '@/hooks/flashcard/useEditFlashcard';
import { toast } from 'sonner';

export const FlashcardEditDialog = ({
  flashcardCardProps,
  open,
  onOpenChange,
}: FlashcardDialogProps) => {
  const editFlashcard = useEditFlashcard({ flashdeckId: flashcardCardProps.flashdeck.id });

  const handleEdit = (modifiableData: FlashcardModifiableProps) => {
    editFlashcard.mutate(
      { flashcardId: flashcardCardProps.id, data: modifiableData },
      {
        onSuccess: () => {
          onOpenChange(false);
          toast.success('Flashcard updated successfully!');
        },
        onError: err => {
          toast.error('Failed to update flashcard. Please try again.');
          console.error('Error while updating flashcard:', err);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit flashcard</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <FlashcardForm
          flashcardCardProps={flashcardCardProps}
          submitText={'Edit'}
          isSubmitting={editFlashcard.isPending}
          onSubmit={handleEdit}
        />
      </DialogContent>
    </Dialog>
  );
};
