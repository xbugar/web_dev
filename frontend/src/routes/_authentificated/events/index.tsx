import { createFileRoute } from '@tanstack/react-router';
import { Plus } from 'lucide-react';
import { Events } from '@/components/calendar/Events.tsx';
import { Button } from '@/components/ui/button.tsx';
import { EventCreateDialog } from '@/components/dialogs/event/EventCreateDialog.tsx';
import { useState } from 'react';
import { add } from "date-fns";
import { useRangeEvents } from "@/hooks/useRangeEvents.ts";
import { ContainerLoading } from "@/components/loading/ContainerLoading.tsx";

export const Route = createFileRoute('/_authentificated/events/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [open, setOpen] = useState(false);
  const [range] = useState(() => {
    return [new Date().toISOString(), add(new Date(), { years: 1 }).toISOString()];
  });

  const [today, yearFromNow] = range;
  const { data: events, isLoading } = useRangeEvents(today, yearFromNow);

  const day = new Date();
  day.setMinutes(0);

  if (isLoading) {
    return <ContainerLoading/>
  }

  return (
    <div>
      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        <h2>Current events</h2>
        <Button variant="section" onClick={() => setOpen(true)}>
          <Plus />
        </Button>
      </div>
      <EventCreateDialog open={open} onOpenChange={setOpen} day={day} />
      <Events events={events?.sort((a, b) => new Date(a.timeFrom).getTime() - new Date(b.timeFrom).getTime())} eventDesktop={true} />
    </div>
  );
}
