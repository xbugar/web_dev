import { NoteCard } from '@/components/cards/NoteCard';
import { createFileRoute } from '@tanstack/react-router';
import { NotebookCard } from '@/components/cards/NotebookCard';
import { useNotebook } from '@/hooks/notebook/useNotebook';
import { useNotesByNotebook } from '@/hooks/notebook/useNotesByNotebook';
import { ContainerLoading } from '@/components/loading/ContainerLoading';
import { NoteSection } from '@/components/section/NoteSection';
import { NotebookSection } from '@/components/section/NotebookSection';

export const Route = createFileRoute('/_authentificated/notebooks/$notebookId/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { notebookId } = Route.useParams();

  const {
    data: currentNotebook,
    isPending: isPendingNotebook,
    isError: isErrorNotebook,
    error: errorNotebook,
  } = useNotebook(notebookId);

  const {
    data: notes,
    isPending: isPendingNote,
    isError: isErrorNote,
    error: errorNote,
  } = useNotesByNotebook(notebookId);

  if (isPendingNotebook || isPendingNote) {
    return <ContainerLoading />;
  }

  if (isErrorNotebook) {
    return <div>Error: {errorNotebook.message}</div>;
  }

  if (isErrorNote) {
    return <div>Error: {errorNote.message}</div>;
  }

  return (
    <div className="lg:h-[calc(100vh-1rem)] lg:overflow-hidden">
      <NotebookSection isPreview={true} />
      {currentNotebook && (
        <NotebookCard
          key={currentNotebook.id}
          id={currentNotebook.id}
          title={currentNotebook.title}
          description={currentNotebook.description}
          iconName={currentNotebook.iconName}
          color={currentNotebook.color}
          noteCount={currentNotebook.noteCount}
          tags={currentNotebook.tags}
          lastUpdated={currentNotebook.updatedAt}
          isLinked={true}
        />
      )}

      <NoteSection
        notebook={{
          id: currentNotebook.id,
          title: currentNotebook.title,
          color: currentNotebook.color,
        }}
        noteTitle=""
      />
      <div
        className="flex flex-col gap-4 lg:h-[calc(100vh-15.5rem)] lg:overflow-y-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {notes.length != 0 ? (
          notes.map(({ id, title, tags, updatedAt }) => (
            <NoteCard
              key={id}
              id={id}
              title={title}
              tags={tags}
              notebook={{
                id: currentNotebook.id,
                title: currentNotebook.title,
                color: currentNotebook.color,
              }}
              lastUpdated={updatedAt}
            />
          ))
        ) : (
          <div className="flex w-full items-center justify-center">
            <p className="text-muted-foreground mb-4 text-lg italic">No notes...</p>
          </div>
        )}
      </div>
    </div>
  );
}
