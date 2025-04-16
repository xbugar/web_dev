import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authentificated/flashcards')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authentificated/flashcards"!</div>
}
