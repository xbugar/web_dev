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

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-0 rounded-[10%] hover:bg-muted">
            <Ellipsis className="text-black dark:text-white w-5 h-5" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="text-xs m-2">
          <DropdownMenuItem>
            {' '}
            <Star className="text-text-lm-secondary dark:text-text-dm-secondary" /> Add to
            favourites{' '}
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          {type === 'notebook' && (
            <DropdownMenuItem onClick={() => setOpenEdit(true)}>
              {' '}
              <Pencil /> Edit notebook{' '}
            </DropdownMenuItem>
          )}
          {type === 'note' && (
            <DropdownMenuItem onClick={() => setOpenEdit(true)}>
              {' '}
              <Pencil /> Rename{' '}
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>
            {' '}
            <Tag /> Edit tags{' '}
          </DropdownMenuItem>
          <DropdownMenuItem>
            {' '}
            <Copy /> Copy link
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setOpenDelete(true)} variant="destructive">
            {' '}
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
          initialData={data}
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
    </>
  );
}
