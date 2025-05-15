import { createFileRoute } from '@tanstack/react-router';
import { CalendarSmall } from "@/components/calendar/CalendarSmall.tsx";


export const Route = createFileRoute('/_authentificated/home')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <CalendarSmall />
  )
}
