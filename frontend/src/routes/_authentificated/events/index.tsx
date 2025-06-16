import { createFileRoute } from '@tanstack/react-router';
import { useAllEvents } from '@/hooks/event/useAllEvents';
import { Events } from '@/components/calendar/Events.tsx';
//import { EventSection } from '@/components/section/EventSection';
import { EventCreateDialog } from '@/components/dialogs/event/EventCreateDialog';

import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { Plus } from 'lucide-react';

export const Route = createFileRoute('/_authentificated/events/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: events } = useAllEvents();
  const [open, setOpen] = useState(false);

  const day = new Date();
  day.setMinutes(0);

  return (
    <div>
      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        <h2>Events</h2>
        <Button variant="section" onClick={() => setOpen(true)}>
          <Plus />
        </Button>
      </div>
      <EventCreateDialog open={open} onOpenChange={setOpen} day={day} />
      <Events events={events} eventDesktop={true} />
    </div>
  );
}
