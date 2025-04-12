import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/notebooks/$notebookId/$noteId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { notebookId, noteId } = useParams({ strict: false })

  return <div>Hello "/notebooks/{notebookId}/{noteId}"!</div>
}
