import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu.tsx';
import { Ellipsis, Pencil, Trash2, Copy } from 'lucide-react';
import { useState } from 'react';
import { FlashcardEditDialog } from '@/components/dialogs/flashcard/FlashcardEditDialog';
import { FlashcardCardProps } from '@/types/flashcard';
import { FlashcardDeleteDialog } from '@/components/dialogs/flashcard/FlashcardDeleteDialog';
import { toast } from 'sonner';

export function FlashcardDropdown({ ...flashcardCardProps }: FlashcardCardProps) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const copyLink = () => {
    const link = `${window.location.origin}/flashdecks/${flashcardCardProps.flashdeck.id}/flashcard/${flashcardCardProps.id}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        toast.success('Link copied to clipboard!');
        console.log('Link copied:', link);
      })
      .catch(err => {
        toast.error('Failed to copy link. Please try again.');
        console.error('Failed to copy link:', err);
      });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="hover:bg-muted rounded-[10%] p-0">
            <Ellipsis className="h-5 w-5 text-black dark:text-white" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white-secondary dark:bg-black-secondary m-2 text-xs">
          <DropdownMenuItem onClick={() => setOpenEdit(true)}>
            <Pencil /> Edit flashcard
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => copyLink()}>
            <Copy /> Copy link
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setOpenDelete(true)} variant="destructive">
            <Trash2 /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <FlashcardEditDialog
        flashcardCardProps={{ ...flashcardCardProps }}
        open={openEdit}
        onOpenChange={setOpenEdit}
      />

      <FlashcardDeleteDialog
        flashcardCardProps={{ ...flashcardCardProps }}
        open={openDelete}
        onOpenChange={setOpenDelete}
      />
    </>
  );
}
