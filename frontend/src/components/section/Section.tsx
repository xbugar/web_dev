import {
  LucideIcon
} from "lucide-react"
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import { NotebookCreateDialog } from "@/components/dialogs/NotebookCreateDialog.tsx";
import { NoteCreateDialog } from "@/components/dialogs/NoteCreateDialog.tsx";

type SectionProps = {
  title: string
  Icon: LucideIcon
  id: string
  type: "notebook" | "note"
}

export function Section({ title, Icon, id, type }: SectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='py-2 mt-2 flex flex-row justify-between items-center font-bold text-2xl font-serif'>
        <h2>{title}</h2>
        <Button variant="outline" onClick={() => setOpen(true)} >
          <Icon />
        </Button>
      </div>

      { type === "notebook" && (
        <NotebookCreateDialog
          open={open}
          onOpenChange={setOpen}
          userId={id}
        />
      )}

      { type === "note" && (
        <NoteCreateDialog
          open={open}
          onOpenChange={setOpen}
          notebookId={id}
        />
      )}

    </>
  )
}
