import { Header } from '@/components/header/Header';
import { Navigation } from '@/components/navigation/Navigation';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_authentificated')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <section className="px-4 mb-20">
        <Outlet />
      </section>
      <Navigation />
    </>
  );
}
