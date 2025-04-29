import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authentificated/calendar')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>AUTH CALENDAR</div>;
}
