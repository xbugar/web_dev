import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu.tsx';

import { Ellipsis, Pencil, Trash2, Copy, Tag, Star } from 'lucide-react';
import { useState } from 'react';
import { NotebookEditDialog } from '@/components/dialogs/NotebookEditDialog.tsx';
import { CreateNotebook } from '@/types/Notebook.ts';
import { NoteEditDialog } from '@/components/dialogs/NoteEditDialog.tsx';
import { Note } from '@/types/Note.ts';
import { NotebookDeleteDialog } from '@/components/dialogs/NotebookDeleteDialog.tsx';
import { NoteDeleteDialog } from '@/components/dialogs/NoteDeleteDialog.tsx';
import { NoteTagDialog } from "@/components/dialogs/NoteTagDialog.tsx";
import { NotebookTagDialog } from "@/components/dialogs/NotebookTagDialog.tsx";

type DropdownType = 'note' | 'notebook';
interface NotebookNoteDropdownProps {
  notebookId: string;
  noteId: string;
  data: CreateNotebook | Note;
  type: DropdownType;
}

export function NotebookNoteDropdown({
                                       notebookId,
                                       noteId,
                                       data,
                                       type,
                                     }: NotebookNoteDropdownProps) {
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

        <DropdownMenuContent className="m-2 text-xs">
          <DropdownMenuItem>
            <Star className="text-text-lm-secondary dark:text-text-dm-secondary" />
            Add to favourites
          </DropdownMenuItem>
          <DropdownMenuSeparator />

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
          <DropdownMenuItem onClick={() => setOpenEditTags(true)}>
            <Tag /> Edit tags
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Copy /> Copy link
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setOpenDelete(true)} variant="destructive">
            <Trash2 /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Edit dialogs */}
      {type === 'notebook' && (
        <NotebookEditDialog
          open={openEdit}
          onOpenChange={setOpenEdit}
          notebookId={notebookId}
          initialData={data}
        />
      )}
      {type === 'note' && (
        <NoteEditDialog
          open={openEdit}
          onOpenChange={setOpenEdit}
          noteId={noteId}
          notebookId={notebookId}
          initialData={data as Note}
        />
      )}

      {/* Delete dialogs */}
      {type === 'notebook' && (
        <NotebookDeleteDialog
          open={openDelete}
          onOpenChange={setOpenDelete}
          notebookId={notebookId}
        />
      )}
      {type === 'note' && (
        <NoteDeleteDialog
          open={openDelete}
          onOpenChange={setOpenDelete}
          noteId={noteId}
          notebookId={notebookId}
        />
      )}

      {/* Tag Dialog */}
      {type === 'notebook' && (
        <NotebookTagDialog
          open={openEditTags}
          onOpenChange={setOpenEditTags}
          notebookId={notebookId}
        />
      )}
      {type === 'note' && (
        <NoteTagDialog
          open={openEditTags}
          onOpenChange={setOpenEditTags}
          noteId={noteId}
          notebookId={notebookId}
        />
      )}
    </>
  );
}
