import { createFileRoute } from '@tanstack/react-router'
import { CalendarMain } from "@/components/calendar/CalendarMain.tsx";

export const Route = createFileRoute('/_authentificated/calendar/$calendarDay')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  const calendarDay = Route.useParams().calendarDay;

  return (
    <div>
      <CalendarMain selectedDay={calendarDay} />
      <div>You selected: {calendarDay}</div>
    </div>
  )
}
