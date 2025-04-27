import MarkdownEditor from '@/components/editor/MarkdownEditor'
import { Section } from '@/components/section/Section'
import { createFileRoute } from '@tanstack/react-router'
import { Pencil } from 'lucide-react'
import { useNoteMetaData } from "@/hooks/useNoteMetaData.ts";

export const Route = createFileRoute(
  '/_authentificated/notebooks/$notebookId/$noteId',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const { noteId } = Route.useParams();
  const { data: noteData, status: metadataStatus, error: metadataErr } = useNoteMetaData(noteId);
  // const { data: noteContent, status: contentStatus, error: contentErr } = useGetNoteContent(noteId);

  if (metadataStatus === "pending") {
    return <div>Loading...</div>
  }

  if (metadataStatus === "error") {
    return <div>Error: {metadataErr.message}</div>
  }
  //
  // if (contentStatus === "error") {
  //   return <div>Error: {contentErr.message}</div>
  // }

  return (
    <>
      <Section title={noteData?.title ?? "Note"} Icon={Pencil} id={noteId} type={"note"}/>

      <MarkdownEditor/>
    </>
  )
}
