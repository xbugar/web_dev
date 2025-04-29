import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authentificated/home')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>AUTH HOME</div>;
}
