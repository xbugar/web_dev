import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { FlashcardCreateDialog } from '@/components/dialogs/flashcard/FlashcardCreateDialog';
import { Plus } from 'lucide-react';
import { FlashcardSectionProps } from '@/types/flashcard';

export function FlashcardSection({ flashdeck }: FlashcardSectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        <h2>Flashcards</h2>

        <Button variant="section" onClick={() => setOpen(true)}>
          <Plus />
        </Button>
      </div>

      <FlashcardCreateDialog
        open={open}
        onOpenChange={setOpen}
        flashcardCardProps={{
          id: '',
          question: '',
          answer: '',
          flashdeck: flashdeck,
          lastUpdated: new Date().toString(),
        }}
      />
    </>
  );
}
