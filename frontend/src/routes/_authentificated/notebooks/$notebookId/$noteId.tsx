import { createFileRoute } from '@tanstack/react-router';
import { useNoteMetaData } from '@/hooks/note/useNoteMetaData';
import Editor from '@/components/editor/Editor';
import { ContainerLoading } from '@/components/loading/ContainerLoading';
import { NoteSection } from '@/components/section/NoteSection';
import { useNotebook } from '@/hooks/notebook/useNotebook';
import { Separator } from '@/components/ui/separator';

export const Route = createFileRoute('/_authentificated/notebooks/$notebookId/$noteId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { noteId } = Route.useParams();

  const {
    data: currentNote,
    isPending: isPendingNote,
    isError: isErrorNote,
    error: errorNote,
  } = useNoteMetaData(noteId);

  const {
    data: currentNotebook,
    isPending: isPendingNotebook,
    isError: isErrorNotebook,
    error: errorNotebook,
  } = useNotebook(currentNote?.notebook?.id ?? '');

  if (isErrorNote) {
    return <div>Error: {errorNote.message}</div>;
  }

  if (isErrorNotebook) {
    return <div>Error: {errorNotebook.message}</div>;
  }

  if (isPendingNotebook || isPendingNote) {
    return <ContainerLoading />;
  }

  return (
    <div className="lg:h-[calc(100vh-1rem)] lg:overflow-hidden">
      <NoteSection
        notebook={{
          id: currentNotebook.id,
          title: currentNotebook.title,
          color: currentNotebook.color,
        }}
        noteTitle={currentNote.title}
      />
      <Separator className="my-3" />
      <div className="card">
        <Editor noteId={currentNote.id} notebookId={currentNote.notebook.id} />
      </div>
    </div>
  );
}
