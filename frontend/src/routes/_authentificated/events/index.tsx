import { createFileRoute } from '@tanstack/react-router'
import { Plus } from "lucide-react";
import { Events } from "@/components/calendar/Events.tsx";
import { Button } from "@/components/ui/button.tsx";
import { EventCreateDialog } from "@/components/dialogs/EventCreateDialog.tsx";
import { useState } from "react";
import { add } from "date-fns";
import { useRangeEvents } from "@/hooks/useRangeEvents.ts";

export const Route = createFileRoute('/_authentificated/events/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [range] = useState(() => {
    return [
      (new Date()).toISOString(), add(new Date(), { years: 1 }).toISOString()];
  });

  const [today, yearFromNow] = range;
  const { data: events } = useRangeEvents(today, yearFromNow);

  const [open, setOpen] = useState(false);

  const day = new Date();
  day.setMinutes(0);

  return (
    <div>
      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        <h2>Upcoming events</h2>
        <Button variant="section" onClick={() => setOpen(true)}>
          <Plus />
        </Button>
      </div>
      <EventCreateDialog open={open} onOpenChange={setOpen} day={day} />
      <Events events={events} eventDesktop={true} />
    </div>
  )
}
