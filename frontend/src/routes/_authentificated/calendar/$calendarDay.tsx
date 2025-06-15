import { createFileRoute, Link } from '@tanstack/react-router'
import { CalendarMain } from "@/components/calendar/CalendarMain.tsx";
import { CalendarArrowUp, Plus } from "lucide-react";
import { useAllEvents } from "@/hooks/useAllEvents.ts";
import { Events } from "@/components/calendar/Events.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import { EventCreateDialog } from "@/components/dialogs/EventCreateDialog.tsx";


export const Route = createFileRoute('/_authentificated/calendar/$calendarDay')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  const calendarDay = Route.useParams().calendarDay;
  const dayToPass = calendarDay === "today" ? new Date() : new Date(calendarDay);
  const now = new Date();
  dayToPass.setHours(now.getHours());
  dayToPass.setMinutes(0);

  const { data: events } = useAllEvents();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:h-[calc(100vh-1rem)] lg:overflow-hidden">
      <CalendarMain selectedDay={calendarDay} events={events} />
      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
      <h2>Events</h2>
      <div>
        <Button variant="section">
          <Link to="/events">
            <CalendarArrowUp />
          </Link>
        </Button>
        <Button variant="section" onClick={() => setOpen(true)}>
          <Plus />
        </Button>
      </div>
    </div>
      <EventCreateDialog open={open} onOpenChange={setOpen} day={dayToPass} />
      <Events selectedDay={dayToPass} events={events} calendarDesktop={true} />
    </div>
  )
}