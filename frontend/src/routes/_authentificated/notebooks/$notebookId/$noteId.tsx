import { Section } from '@/components/section/Section'
import { createFileRoute } from '@tanstack/react-router'
import { Pencil } from 'lucide-react'
import { useNoteMetaData } from "@/hooks/useNoteMetaData.ts";
import Editor from "@/components/Editor.tsx";

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

  if (metadataStatus === "pending") {
    return <div>Loading...</div>
  }

  if (metadataStatus === "error") {
    return <div>Error: {metadataErr.message}</div>
  }

  return (
    <>
      <Section title={noteData?.title ?? "Note"} id={noteId} type={"note"}/>
      <div className="card">
        <Editor noteId={noteId} notebookId={noteData?.notebook.id}/>
      </div>
    </>
  )
}
