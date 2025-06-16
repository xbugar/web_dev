import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Ellipsis, Pencil, Trash2, Copy, Tag } from 'lucide-react';
import { useState } from 'react';
import { NotebookEditDialog } from '@/components/dialogs/notebook/NotebookEditDialog';
import { NotebookDeleteDialog } from '@/components/dialogs/notebook/NotebookDeleteDialog';
import { NotebookTagDialog } from '@/components/dialogs/notebook/NotebookTagDialog';
import { NotebookCardProps } from '@/types/notebook';
import { toast } from 'sonner';

export function NotebookDropdown({ ...notebookCardProps }: NotebookCardProps) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEditTags, setOpenEditTags] = useState(false);

  const copyLink = () => {
    const link = `${window.location.origin}/notebooks/${notebookCardProps.id}`;
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
            <Pencil /> Edit notebook
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

      <NotebookEditDialog
        notebookCardProps={{ ...notebookCardProps }}
        open={openEdit}
        onOpenChange={setOpenEdit}
      />
      <NotebookDeleteDialog
        notebookCardProps={{ ...notebookCardProps }}
        open={openDelete}
        onOpenChange={setOpenDelete}
      />
      <NotebookTagDialog
        notebookCardProps={{ ...notebookCardProps }}
        open={openEditTags}
        onOpenChange={setOpenEditTags}
      />
    </>
  );
}
