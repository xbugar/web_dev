import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeToggle } from '@/components/utils/ThemeToggle.tsx';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeToggle />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  ),
});
