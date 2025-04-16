import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authentificated/pomodoro')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authentificated/pomodoro"!</div>
}
