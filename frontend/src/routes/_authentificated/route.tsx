import { Header } from '@/components/header/Header';
import { Navigation } from '@/components/navigation/Navigation';
import { createFileRoute, Outlet, useMatchRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authentificated')({
  component: RouteComponent,
});

function RouteComponent() {
  const matchRoute = useMatchRoute();
  const paramsNote = matchRoute({ to: '/notebooks/$notebookId/$noteId' });
  const paramsEvent = matchRoute({ to: '/events/$eventId' });

  return (
    <>
      <Header />
      <section className="mb-20 px-4">
        <Outlet />
      </section>
      {!paramsNote && !paramsEvent && <Navigation />}
    </>
  );
}
