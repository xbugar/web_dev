import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authentificated/notebooks/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authentificated/notebooks/"!</div>
}
