import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authentificated/events/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
      <h2>My events</h2>
    </div>

  )
}
