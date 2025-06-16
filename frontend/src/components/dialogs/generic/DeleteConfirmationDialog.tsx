import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Navigate } from '@tanstack/react-router';
import { useState } from 'react';
import { ButtonLoading } from "@/components/loading/ButtonLoading.tsx";

type DeleteConfirmationDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete: () => void;
  isPending: boolean;
  navigateTo?: string;
};

export const DeleteConfirmationDialog = ({
  open,
  onOpenChange,
  onDelete,
  isPending,
  navigateTo,
}: DeleteConfirmationDialogProps) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    onDelete();
    if (navigateTo) {
      setIsDeleted(true);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} disabled={isPending}>
            {isPending ? <ButtonLoading variant="submit" /> : 'Continue'}
            {isDeleted && navigateTo && <Navigate to={navigateTo} />}
          </AlertDialogAction>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
