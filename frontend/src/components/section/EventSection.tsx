import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { EventCreateDialog } from '@/components/dialogs/event/EventCreateDialog';

export function EventSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        <h2>Events</h2>

        <Button variant="section" onClick={() => setOpen(true)}>
          <Plus />
        </Button>
      </div>

      <EventCreateDialog open={open} onOpenChange={setOpen} day={day} />
    </>
  );
}