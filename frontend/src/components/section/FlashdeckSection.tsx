import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FlashdeckSectionProps } from '@/types/flashdeck';
import { FlashdeckCreateDialog } from '../dialogs/flashdeck/FlashdeckCreateDialog';

export function FlashdeckSection({ isPreview }: FlashdeckSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        <h2>{isPreview ? 'Flashdeck Preview' : 'Flashdecks'}</h2>

        {!isPreview && (
          <Button variant="section" onClick={() => setOpen(true)}>
            <Plus />
          </Button>
        )}
      </div>

      {!isPreview && (
        <FlashdeckCreateDialog
          open={open}
          onOpenChange={setOpen}
          flashdeckCardProps={{
            id: '',
            title: '',
            description: '',
            color: 'red',
            flashCardsCount: 0,
            lastUpdated: new Date().toString(),
          }}
        />
      )}
    </>
  );
}
