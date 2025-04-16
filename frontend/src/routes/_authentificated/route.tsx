import { Header } from '@/components/header/Header'
import { Navigation } from '@/components/navigation/Navigation'
import { ThemeToggle } from '@/components/theme-toggle'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_authentificated')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='w-screen px-4 py-2'>
      <Header />
      <ThemeToggle />
      <Outlet />
      <Navigation />
    </div>
  )
}
