import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu.tsx';
import { Ellipsis, Pencil, Trash2, Copy, Tag } from 'lucide-react';
import { useState } from 'react';
import { EventCardProps } from '@/types/event';
import { EventTagDialog } from '@/components/dialogs/event/EventTagDialog';
import { EventEditDialog } from '@/components/dialogs/event/EventEditDialog';
import { EventDeleteDialog } from '@/components/dialogs/event/EventDeleteDialog';
import { toast } from 'sonner';

export function EventDropdown({ ...eventCardProps }: EventCardProps) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEditTags, setOpenEditTags] = useState(false);

  const copyLink = () => {
    const link = `${window.location.origin}/events/${eventCardProps.id}`;
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
            <Pencil /> Edit event
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

      <EventEditDialog
        eventCardProps={{ ...eventCardProps }}
        open={openEdit}
        onOpenChange={setOpenEdit}
      />

      <EventDeleteDialog
        eventCardProps={{ ...eventCardProps }}
        open={openDelete}
        onOpenChange={setOpenDelete}
      ></EventDeleteDialog>

      <EventTagDialog
        eventCardProps={{ ...eventCardProps }}
        open={openEditTags}
        onOpenChange={setOpenEditTags}
      />
    </>
  );
}
