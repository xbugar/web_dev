import { Header } from '@/components/header/Header';
import { Navigation } from '@/components/navigation/Navigation';
import { createFileRoute, Outlet, useMatchRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authentificated')({
  component: RouteComponent,
});

function RouteComponent() {
  const matchRoute = useMatchRoute();
  const params = matchRoute({ to: '/notebooks/$notebookId/$noteId' });
  console.log(params);
  return (
    <>
      <Header />
      <section className="px-4 mb-20">
        <Outlet />
      </section>
      {!params && <Navigation />}
    </>
  );
}
