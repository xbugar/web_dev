import MarkdownEditor from '@/components/editor/MarkdownEditor'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authentificated/notebooks/$notebookId/$noteId',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    <div>Hello "/_authentificated/notebooks/$notebookId/$noteId"!</div>
    <MarkdownEditor />
    </>
  ) 
}
