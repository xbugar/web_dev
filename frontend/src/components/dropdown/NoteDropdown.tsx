import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu.tsx';
import { Ellipsis, Pencil, Trash2, Copy, Tag } from 'lucide-react';
import { useState } from 'react';
import { NoteEditDialog } from '@/components/dialogs/note/NoteEditDialog';
import { NoteCardProps } from '@/types/note';
import { NoteDeleteDialog } from '@/components/dialogs/note/NoteDeleteDialog';
import { NoteTagDialog } from '@/components/dialogs/note/NoteTagDialog.tsx';
import { toast } from 'sonner';

export function NoteDropdown({ ...noteCardProps }: NoteCardProps) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEditTags, setOpenEditTags] = useState(false);

  const copyLink = () => {
    const link = `${window.location.origin}/notebooks/${noteCardProps.notebook.id}/note/${noteCardProps.id}`;
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
            <Ellipsis className="h-5 w-5 text-black dark:text-white cursor-pointer" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white-secondary dark:bg-black-secondary m-2 text-xs">
          <DropdownMenuItem onClick={() => setOpenEdit(true)}>
            <Pencil /> Edit note
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

      <NoteEditDialog
        noteCardProps={{ ...noteCardProps }}
        open={openEdit}
        onOpenChange={setOpenEdit}
      />

      <NoteDeleteDialog
        noteCardProps={{ ...noteCardProps }}
        open={openDelete}
        onOpenChange={setOpenDelete}
      />

      <NoteTagDialog
        noteCardProps={{ ...noteCardProps }}
        open={openEditTags}
        onOpenChange={setOpenEditTags}
      />
    </>
  );
}
