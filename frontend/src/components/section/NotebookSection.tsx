import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { NotebookCreateDialog } from '@/components/dialogs/notebook/NotebookCreateDialog';
import { Plus } from 'lucide-react';
import { NotebookSectionProps } from '@/types/notebook';

export function NotebookSection({ isPreview }: NotebookSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        <h2>{isPreview ? 'Notebook Preview' : 'Notebooks'}</h2>

        {!isPreview && (
          <Button variant="section" onClick={() => setOpen(true)}>
            <Plus />
          </Button>
        )}
      </div>

      {!isPreview && (
        <NotebookCreateDialog
          open={open}
          onOpenChange={setOpen}
          notebookCardProps={{
            id: '',
            title: '',
            description: '',
            iconName: 'Cpu',
            color: 'red',
            noteCount: 0,
            lastUpdated: new Date().toString(),
          }}
        />
      )}
    </>
  );
}
