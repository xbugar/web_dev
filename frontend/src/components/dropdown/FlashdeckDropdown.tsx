import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Ellipsis, Pencil, Trash2, Copy, Tag } from 'lucide-react';
import { useState } from 'react';
import { FlashdeckEditDialog } from '@/components/dialogs/flashdeck/FlashdeckEditDialog';
import { FlashdeckDeleteDialog } from '@/components/dialogs/flashdeck/FlashdeckDeleteDialog';
import { FlashdeckTagDialog } from '@/components/dialogs/flashdeck/FlashdeckTagDialog';
import { FlashdeckCardProps } from '@/types/flashdeck';
import { toast } from 'sonner';

export function FlashdeckDropdown({ ...flashdeckCardProps }: FlashdeckCardProps) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEditTags, setOpenEditTags] = useState(false);

  const copyLink = () => {
    const link = `${window.location.origin}/flashdeck/${flashdeckCardProps.id}`;
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
            <Pencil /> Edit flashdeck
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setOpenEditTags(true)}>
            <Tag /> Edit tags
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

      <FlashdeckEditDialog
        flashdeckCardProps={{ ...flashdeckCardProps }}
        open={openEdit}
        onOpenChange={setOpenEdit}
      />
      <FlashdeckDeleteDialog
        flashdeckCardProps={{ ...flashdeckCardProps }}
        open={openDelete}
        onOpenChange={setOpenDelete}
      />
      <FlashdeckTagDialog
        flashdeckCardProps={{ ...flashdeckCardProps }}
        open={openEditTags}
        onOpenChange={setOpenEditTags}
      />
    </>
  );
}
