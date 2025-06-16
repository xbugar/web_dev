import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { NoteCreateDialog } from '@/components/dialogs/note/NoteCreateDialog';
import { Plus } from 'lucide-react';
import { NoteSectionProps } from '@/types/note';
import { AccentColor, iconColor } from '@/components/cards/cardColors';
import { cn } from '@/lib/utils';

export function NoteSection({ notebook, noteTitle }: NoteSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        {noteTitle == '' ? (
          <>
            <h2>Notes</h2>
            <Button variant="section" onClick={() => setOpen(true)}>
              <Plus />
            </Button>
          </>
        ) : (
          <div className="flex gap-4">
            <div
              className={cn('h-12 w-12 rounded-full', iconColor[notebook.color as AccentColor])}
            ></div>
            <div className="flex flex-col">
              <p className="text-sm">{notebook.title + ' > '}</p>
              <h2>{noteTitle}</h2>
            </div>
          </div>
        )}
      </div>

      {noteTitle == '' && (
        <NoteCreateDialog
          open={open}
          onOpenChange={setOpen}
          noteCardProps={{
            id: '',
            title: '',
            notebook: notebook,
            content: '',
            lastUpdated: new Date().toString(),
          }}
        />
      )}
    </>
  );
}
