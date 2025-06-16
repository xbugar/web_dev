import { useDeleteFlashcard } from '@/hooks/flashcard/useDeleteFlashcard';
import { DeleteConfirmationDialog } from '@/components/dialogs/generic/DeleteConfirmationDialog';
import { FlashcardDialogProps } from '@/types/flashcard';
import { toast } from 'sonner';

export const FlashcardDeleteDialog = ({ flashcardCardProps, open, onOpenChange }: FlashcardDialogProps) => {
  const deleteFlashcard = useDeleteFlashcard({ flashdeckId: flashcardCardProps.flashdeck.id });

  const handleDelete = () => {
    deleteFlashcard.mutate(flashcardCardProps.id, {
      onSuccess: () => {
        toast.success('Flashcard deleted successfully!');
      },
      onError: err => {
        toast.error('Failed to delete flashcard. Please try again.');
        console.error('Error while deleting flashcard:', err);
      },
    });
  };

  return (
    <DeleteConfirmationDialog
      open={open}
      onOpenChange={onOpenChange}
      onDelete={handleDelete}
      isPending={deleteFlashcard.isPending}
    />
  );
};
