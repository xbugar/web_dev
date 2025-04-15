import { Header } from '@/components/header/Header'
import Navigation from '@/components/navigation/Navigation'
import { ThemeToggle } from '@/components/theme-toggle'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'


export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <ThemeToggle />
      <Outlet />
      <Navigation />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})