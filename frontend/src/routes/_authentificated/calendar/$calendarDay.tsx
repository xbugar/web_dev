import { createFileRoute } from '@tanstack/react-router'
import { CalendarMain } from "@/components/calendar/CalendarMain.tsx";
import { Section } from "@/components/section/Section.tsx";
import { Plus } from "lucide-react";
import { useAllEvents } from "@/hooks/useAllEvents.ts";
import { Events } from "@/components/calendar/Events.tsx";

export const Route = createFileRoute('/_authentificated/calendar/$calendarDay')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  const calendarDay = Route.useParams().calendarDay;
  const { data: events } = useAllEvents();

  return (
    <div>
      <CalendarMain selectedDay={calendarDay} />
      <Section title={'Events'} Icon={Plus} type="event" />
      <Events selectedDay={new Date(calendarDay)} events={events} />
    </div>
  )
}
