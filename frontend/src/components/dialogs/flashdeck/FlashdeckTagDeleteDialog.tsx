import { useDeleteTagFromFlashdeck } from '@/hooks/flashdeck/useDeleteTagFromFlashdeck';
import { DeleteConfirmationDialog } from '@/components/dialogs/generic/DeleteConfirmationDialog';
import { FlashdeckTagDeleteDialogProps } from '@/types/flashdeck';

export const FlashdeckTagDeleteDialog = ({
  flashdeckCardProps,
  open,
  onOpenChange,
  tagId,
}: FlashdeckTagDeleteDialogProps) => {
  const deleteTag = useDeleteTagFromFlashdeck({ flashdeckId: flashdeckCardProps.id });

  const handleDelete = () => {
    deleteTag.mutate({ flashdeckId: flashdeckCardProps.id, tagId });
  };

  return (
    <DeleteConfirmationDialog
      open={open}
      onOpenChange={onOpenChange}
      onDelete={handleDelete}
      isPending={deleteTag.isPending}
    />
  );
};
