import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/notebooks/$notebookId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { notebookId } = useParams({ strict: false })
  return <div>Hello "/notebooks/{notebookId}"!</div>
}