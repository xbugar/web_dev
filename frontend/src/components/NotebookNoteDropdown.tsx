import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Ellipsis, Pencil, Trash2, Copy, Tag, Star } from "lucide-react";

type DropdownType = 'note' | 'notebook';
interface NotebookNoteDropdownProps {
  type: DropdownType;
}

export function NotebookNoteDropdown({ type }: NotebookNoteDropdownProps) {


  return (
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
          <DropdownMenuItem> <Pencil /> Edit notebook </DropdownMenuItem>
        )}
        {type === "note" && (
          <DropdownMenuItem> <Pencil /> Rename </DropdownMenuItem>
        )}
        <DropdownMenuItem> <Tag /> Edit tags </DropdownMenuItem>
        <DropdownMenuItem> <Copy /> Copy link</DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive"> <Trash2 /> Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}