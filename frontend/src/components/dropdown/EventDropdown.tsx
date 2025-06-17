import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu.tsx';
import { Ellipsis, Pencil, Trash2, Copy, Tag } from 'lucide-react';
import { useState } from 'react';
import { Event } from '@/types/event';
import { EventTagDialog } from '@/components/dialogs/event/EventTagDialog.tsx';
import { EventEditDialog } from '@/components/dialogs/event/EventEditDialog.tsx';
import { EventDeleteDialog } from '@/components/dialogs/event/EventDeleteDialog.tsx';
import { toast } from 'sonner';

export interface DropdownProps {
  eventId: string;
  data: Event;
}

export function EventDropdown({ eventId, data }: DropdownProps) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEditTags, setOpenEditTags] = useState(false);

  const copyLink = () => {
    const link = `${window.location.origin}/events/${eventId}`;
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
          <button className="hover:bg-muted rounded-[10%] p-0" data-testid="menu-button">
            <Ellipsis className="h-5 w-5 text-black dark:text-white cursor-pointer" />
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
        open={openEdit}
        onOpenChange={setOpenEdit}
        eventId={eventId}
        initialData={data as Event}
      />
      <EventDeleteDialog
        open={openDelete}
        onOpenChange={setOpenDelete}
        eventId={eventId}
      ></EventDeleteDialog>
      <EventTagDialog open={openEditTags} onOpenChange={setOpenEditTags} eventId={eventId} />
    </>
  );
}
