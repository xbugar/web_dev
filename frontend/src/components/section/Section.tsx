import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { NotebookCreateDialog } from '@/components/dialogs/NotebookCreateDialog.tsx';
import { NoteCreateDialog } from '@/components/dialogs/NoteCreateDialog.tsx';
import { EventCreateDialog } from "@/components/dialogs/EventCreateDialog.tsx";


type SectionProps = {
  title: string;
  Icon?: LucideIcon;
  id?: string;
  type: 'notebook' | 'note' | 'event';
};

export function Section({ title, Icon, id, type }: SectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        <h2>{title}</h2>

        {Icon && (
          <>
            <Button variant="section" onClick={() => setOpen(true)}>
              <Icon />
            </Button>
          </>
        )}
      </div>

      {type === 'notebook' && <NotebookCreateDialog open={open} onOpenChange={setOpen} />}

      {type === 'note' && id && (
        <NoteCreateDialog open={open} onOpenChange={setOpen} notebookId={id} />
      )}

      {type === 'event' && <EventCreateDialog open={open} onOpenChange={setOpen} />}
    </>
  );
}
