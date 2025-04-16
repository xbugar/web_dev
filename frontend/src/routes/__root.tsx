import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeToggle } from '@/components/theme-toggle'


export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeToggle />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})