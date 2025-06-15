import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Toaster } from "sonner";
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster
        position="top-center"
        toastOptions={{
          classNames: {
            toast: 'w-fit px-4 py-2 rounded bg-black text-white text-sm',
          },
        }}
      />      {/* <TanStackRouterDevtools /> */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  ),
});
