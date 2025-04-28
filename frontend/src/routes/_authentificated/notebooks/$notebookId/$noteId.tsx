import { Section } from '@/components/section/Section'
import { createFileRoute } from '@tanstack/react-router'
import { Pencil } from 'lucide-react'
import { useNoteMetaData } from "@/hooks/useNoteMetaData.ts";
import Tiptap from "@/components/Tiptap.tsx";

export const Route = createFileRoute(
  '/_authentificated/notebooks/$notebookId/$noteId',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const { noteId } = Route.useParams();
  console.log("noteId", noteId);
  const { data: noteData, status: metadataStatus, error: metadataErr } = useNoteMetaData(noteId);
  console.log("noteData", noteData)
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
      <div className="card">
        <Tiptap />
      </div>
    </>
  )
}
