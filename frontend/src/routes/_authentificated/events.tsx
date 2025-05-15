import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authentificated/events')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authentificated/events"!</div>
}
