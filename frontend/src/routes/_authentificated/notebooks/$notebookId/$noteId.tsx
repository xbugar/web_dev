import { NotebookCard, NotebookCardProps } from '@/components/cards/NotebookCard'
import MarkdownEditor from '@/components/editor/MarkdownEditor'
import { Section } from '@/components/section/Section'
import { createFileRoute } from '@tanstack/react-router'
import { ClipboardList, Pencil } from 'lucide-react'

export const Route = createFileRoute(
  '/_authentificated/notebooks/$notebookId/$noteId',
)({
  component: RouteComponent,
})

function RouteComponent() {

  const notebook: NotebookCardProps = {
    to: "/notebooks/$notebookId",
    title: "TODO",
    description: "Personal tasks and project planning",
    Icon: ClipboardList,
    color: "purple",
    noteCount: 15,
    tags: [
      { name: "planning", color: "purple" },
      { name: "planning", color: "pink" },
      { name: "planning", color: "purple" },
      { name: "planning", color: "pink" },
      { name: "planning", color: "pink" },
      { name: "planning", color: "pink" },
      { name: "planning", color: "pink" },
      { name: "planning", color: "pink" },
      { name: "planning", color: "pink" }
    ],
    lastUpdated: "4 days"
  }
  
  return (
    <>
      <Section title={"Note preview"} Icon={Pencil}/>
      <NotebookCard
        to={"/notebooks/$notebookId"}
        title={notebook.title}
        description={notebook.description}
        Icon={notebook.Icon}
        color={notebook.color}
        noteCount={notebook.noteCount}
        tags={notebook.tags}
        lastUpdated={notebook.lastUpdated}
      />
      
      <MarkdownEditor />
    </>
  )
}
