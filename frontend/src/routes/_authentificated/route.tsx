import { Header } from '@/components/header/Header';
import { Navigation } from '@/components/navigation/Navigation';
import { useAuthStore } from '@/lib/authStore';
import { createFileRoute, Outlet, redirect, useMatchRoute } from '@tanstack/react-router';

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
  const params = matchRoute({ to: '/notebooks/$notebookId/$noteId' });
  console.log(params);
  return (
    <>
      <Header />
      <section className="mb-20 px-4">
        <Outlet />
      </section>
      {!params && <Navigation />}
    </>
  );
}
