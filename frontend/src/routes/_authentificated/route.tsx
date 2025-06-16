import { Header } from '@/components/header/Header';
import { Navigation } from '@/components/navigation/Navigation';
import { useAuthStore } from '@/lib/authStore';
import { createFileRoute, Outlet, redirect, useMatchRoute } from '@tanstack/react-router';
import { Sidebar } from '@/components/desktop/Sidebar.tsx';
import { useIsDesktop } from '@/hooks/isDesktop.ts';

export const Route = createFileRoute('/_authentificated')({
  loader: () => {
    const { auth } = useAuthStore.getState();
    if (!auth.isAuth) {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const matchRoute = useMatchRoute();
  const paramsNote = matchRoute({ to: '/notebooks/$notebookId/$noteId' });
  const paramsEvent = matchRoute({ to: '/events/$eventId' });

  const isDesktop = useIsDesktop();

  if (isDesktop) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-grow">
          <section className="px-6">
            <Outlet />
          </section>
        </main>
      </div>
    );
  }

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
