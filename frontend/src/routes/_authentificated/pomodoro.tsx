import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authentificated/pomodoro')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>AUTH POMODORO</div>;
}
