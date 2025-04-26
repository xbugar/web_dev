import {
  LucideIcon
} from "lucide-react"
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import { NotebookCreateDialog } from "@/components/dialogs/NotebookCreateDialog.tsx";

type SectionProps = {
  title: string
  Icon: LucideIcon
  userId: string
}

export function Section({ title, Icon, userId }: SectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='py-2 mt-2 flex flex-row justify-between items-center font-bold text-2xl font-serif'>
        <h2>{title}</h2>
        <Button variant="outline" onClick={() => setOpen(true)} >
          <Icon />
        </Button>
      </div>

      <NotebookCreateDialog
        open={open}
        onOpenChange={setOpen}
        userId={userId}
      />
    </>
  )
}
