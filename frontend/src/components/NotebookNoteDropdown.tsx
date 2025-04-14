import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Ellipsis, Pencil, Trash2, Copy, Tag, Star } from "lucide-react";

export function NotebookNoteDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <button className="p-2 rounded-[10%] hover:bg-muted">
        <Ellipsis className="text-black dark:text-white" />
      </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white dark:bg-black">
        <DropdownMenuItem> <Star /> Add to favourites </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuItem> <Pencil /> Rename </DropdownMenuItem>
        <DropdownMenuItem> <Tag /> Edit tags </DropdownMenuItem>
        <DropdownMenuItem> <Copy /> Copy link</DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive"> <Trash2 /> Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}