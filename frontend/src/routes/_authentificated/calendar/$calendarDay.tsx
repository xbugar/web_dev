import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authentificated/calendar/$calendarDay')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  const calendarDay = Route.useParams().calendarDay;
  return <div>You selected: {calendarDay}</div>
}
