import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Ellipsis, Pencil, Trash2, Copy, Tag, Star } from "lucide-react";
import { useState } from "react";
import { NotebookEditDialog } from "@/components/dialogs/NotebookEditDialog.tsx";
import { CreateNotebook } from "@/types/Notebook.ts";
import { NoteEditDialog } from "@/components/dialogs/NoteEditDialog.tsx";

type DropdownType = 'note' | 'notebook';
interface NotebookNoteDropdownProps {
  id: string;
  data: CreateNotebook | Note;
  type: DropdownType;
}


export function NotebookNoteDropdown({ id, data, type }: NotebookNoteDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <button className="p-0 rounded-[10%] hover:bg-muted">
          <Ellipsis className="text-black dark:text-white w-5 h-5" />
        </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="text-xs m-2">
          <DropdownMenuItem> <Star className="text-text-lm-secondary dark:text-text-dm-secondary"/> Add to favourites </DropdownMenuItem>
          <DropdownMenuSeparator />

          {type === "notebook" && (
            <DropdownMenuItem onClick={() => setOpen(true)}> <Pencil /> Edit notebook </DropdownMenuItem>
          )}
          {type === "note" && (
            <DropdownMenuItem onClick={() => setOpen(true)}> <Pencil /> Rename </DropdownMenuItem>
          )}
          <DropdownMenuItem> <Tag /> Edit tags </DropdownMenuItem>
          <DropdownMenuItem> <Copy /> Copy link</DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive"> <Trash2 /> Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {type === "notebook" && (
        <NotebookEditDialog
          open={open}
          onOpenChange={setOpen}
          notebookId={id}
          initialData={data} />
      )}
      {type === "note" && (
        <NoteEditDialog
        open={open}
        onOpenChange={setOpen}
        noteId={id}
        initialData={data}/>
      )}
    </>
  )
}