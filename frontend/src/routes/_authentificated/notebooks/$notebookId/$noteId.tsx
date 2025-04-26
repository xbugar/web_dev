import { NotebookCard, NotebookCardProps } from '@/components/cards/NotebookCard'
import MarkdownEditor from '@/components/editor/MarkdownEditor'
import { Section } from '@/components/section/Section'
import { createFileRoute } from '@tanstack/react-router'
import { Pencil } from 'lucide-react'
import { useParams } from "@tanstack/react-router";
import { useNoteMetaData } from "@/hooks/useNoteMetaData.ts";


export const Route = createFileRoute(
  '/_authentificated/notebooks/$notebookId/$noteId',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const { noteId } = useParams({ strict: false });
  const { data: noteData } = useNoteMetaData(noteId);
  return (
    <>
      <Section title={noteData?.title ?? "Note"} Icon={Pencil}/>

      <MarkdownEditor />
    </>
  )
}
