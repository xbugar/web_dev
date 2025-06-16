//TODO move to new place
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu.tsx';

import { Ellipsis, Pencil, Trash2, Copy, Tag } from 'lucide-react';
import { useState } from 'react';
import { NotebookEditDialog } from '@/components/dialogs/NotebookEditDialog.tsx';
import { NoteEditDialog } from '@/components/dialogs/NoteEditDialog.tsx';
import { Note } from '@/types/Note.ts';
import { NotebookDeleteDialog } from '@/components/dialogs/NotebookDeleteDialog.tsx';
import { NoteDeleteDialog } from '@/components/dialogs/NoteDeleteDialog.tsx';
import { NoteTagDialog } from '@/components/dialogs/NoteTagDialog.tsx';
import { NotebookTagDialog } from '@/components/dialogs/NotebookTagDialog.tsx';
import { CreateNotebook } from '@/types/Notebook';
import { EventType } from "@/types/EventType.ts";
import { EventTagDialog } from "@/components/dialogs/EventTagDialog.tsx";
import { EventEditDialog } from "@/components/dialogs/EventEditDialog.tsx";
import { EventDeleteDialog } from "@/components/dialogs/EventDeleteDialog.tsx";
import {AdminUserDeleteDialog} from "@/components/dialogs/AdminUserDeleteDialog.tsx";

export type DropdownType = 'note' | 'notebook' | 'event' | 'admin';

export interface DropdownProps {
  notebookId: string;
  noteId: string;
  eventId: string;
  data: CreateNotebook | Note | EventType;
  type: DropdownType;
}

export function Dropdown({
  notebookId,
  noteId,
  eventId,
  data,
  type,
}: DropdownProps) {
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEditTags, setOpenEditTags] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="hover:bg-muted rounded-[10%] p-0">
            <Ellipsis className="h-5 w-5 text-black dark:text-white" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white-secondary dark:bg-black-secondary m-2 text-xs">
          {/* <DropdownMenuItem>
            <Star className="text-text-lm-secondary dark:text-text-dm-secondary" />
            Add to favourites
          </DropdownMenuItem>
          <DropdownMenuSeparator /> */}

          {type === 'notebook' && (
            <DropdownMenuItem onClick={() => setOpenEdit(true)}>
              <Pencil /> Edit notebook
            </DropdownMenuItem>
          )}
          {type === 'note' && (
            <DropdownMenuItem onClick={() => setOpenEdit(true)}>
              <Pencil /> Rename
            </DropdownMenuItem>
          )}
          {type === 'event' && (
            <DropdownMenuItem onClick={() => setOpenEdit(true)}>
              <Pencil /> Edit event
            </DropdownMenuItem>
          )}
          {type !== 'admin' && (
              <DropdownMenuItem onClick={() => setOpenEditTags(true)}>
                <Tag /> Edit tags
              </DropdownMenuItem>)}
          {type !== 'admin' && (<DropdownMenuItem
            onClick={() => {
              let link = '';
              if (type == 'event') {
                link = `${window.location.origin}/events/${eventId}`;
              } else {
                link = `${window.location.origin}/notebooks/${notebookId}`;
                if (type === 'note') {
                  link += `/note/${noteId}`;
                }
              }

              navigator.clipboard
                .writeText(link)
                .then(() => {
                  console.log('Link copied:', link);
                })
                .catch(err => {
                  console.error('Failed to copy link:', err);
                });
            }}
          >
            <Copy /> Copy link
          </DropdownMenuItem>
        )}
          {type !== 'admin' && ( <DropdownMenuSeparator />)}
          <DropdownMenuItem onClick={() => setOpenDelete(true)} variant="destructive">
            <Trash2 /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Notebook dialogs */}
      {type === 'notebook' && (
        <>
          <NotebookEditDialog
            open={openEdit}
            onOpenChange={setOpenEdit}
            notebookId={notebookId}
            initialData={data as CreateNotebook}
          />
          <NotebookDeleteDialog
            open={openDelete}
            onOpenChange={setOpenDelete}
            notebookId={notebookId}
          />
          <NotebookTagDialog
            open={openEditTags}
            onOpenChange={setOpenEditTags}
            notebookId={notebookId}
            initialData={data as CreateNotebook}
          />
        </>
      )}

      {/* Note dialogs */}
      {type === 'note' && (
        <>
          <NoteEditDialog
            open={openEdit}
            onOpenChange={setOpenEdit}
            noteId={noteId}
            notebookId={notebookId}
            initialData={data as Note}
          />
          <NoteDeleteDialog
            open={openDelete}
            onOpenChange={setOpenDelete}
            noteId={noteId}
            notebookId={notebookId}
          />
          <NoteTagDialog
            open={openEditTags}
            onOpenChange={setOpenEditTags}
            noteId={noteId}
            notebookId={notebookId}
            initialData={data as Note}
          />
        </>
      )}

      {type === 'event' && (
        <>
          <EventEditDialog open={openEdit} onOpenChange={setOpenEdit} eventId={eventId} initialData={data as EventType}/>
          <EventDeleteDialog open={openDelete} onOpenChange={setOpenDelete} eventId={eventId}></EventDeleteDialog>
          <EventTagDialog
            open={openEditTags}
            onOpenChange={setOpenEditTags}
            eventId={eventId}
          />
        </>
      )}

      {type === 'admin' && (
          <>
            <AdminUserDeleteDialog open={openDelete} onOpenChange={setOpenDelete} userId={eventId}></AdminUserDeleteDialog>
          </>
      )}
    </>
  );
}
