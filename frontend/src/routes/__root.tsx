import { Header } from '@/components/header/Header'
import Navigation from '@/components/Navigation'
import { ThemeToggle } from '@/components/theme-toggle'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'


export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      {/* <div className="p-2 flex gap-2 font-sans">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/notebooks" className="[&.active]:font-bold">
          Notebooks
        </Link>
      </div> */}
      {/* <hr /> */}
      <Outlet />
      <ThemeToggle />
      <Navigation />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})