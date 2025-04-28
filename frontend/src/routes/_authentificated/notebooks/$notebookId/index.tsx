import { NoteCard } from '@/components/cards/NoteCard';
import { createFileRoute } from '@tanstack/react-router'
import { NotebookCard } from '@/components/cards/NotebookCard';
import { Section } from '@/components/section/Section';

import {
  Plus
} from "lucide-react"
import { useNotebook } from "@/hooks/useNotebook.ts";
import { useNotesByNotebook } from "@/hooks/useNotesByNotebook.ts";


export const Route = createFileRoute('/_authentificated/notebooks/$notebookId/',) ({
  component: RouteComponent,
})


function RouteComponent() {
  const { notebookId } = Route.useParams();

  const { data: currentNotebook, isPending: isPendingNotebook, isError: isErrorNotebook, error: errorNotebook } = useNotebook(notebookId); {/*TODO*/}

  const { data: notes, isPending: isPendingNote, isError: isErrorNote, error: errorNote } =  useNotesByNotebook(notebookId);

  if (isPendingNotebook || isPendingNote ) {
    return <div>Loading...</div>
  }

  if (isErrorNotebook) {
    return <div>Error: {errorNotebook.message}</div>
  }

  if (isErrorNote) {
    return <div>Error: {errorNote.message}</div>
  }

  return (
    <>
      <Section title={"Notebook preview"} id={notebookId} type={"notebook"}/>
      {currentNotebook && (
        <NotebookCard
          key={notebookId}
          id={notebookId}
          title={currentNotebook.title}
          description={currentNotebook.description}
          iconName={currentNotebook.iconName}
          color={currentNotebook.color}
          noteCount={currentNotebook.noteCount}
          tags={currentNotebook.tags}
          lastUpdated={currentNotebook.updatedAt}
          isLinked={false}
        />
      )}

      <Section title={"Notes"} Icon={Plus} id={notebookId} type={"note"}/>
      <div className='flex flex-col gap-4'>

        {notes && notes.map(({ id, title, updatedAt, tags }) => (
          <NoteCard
            key={id}
            parentId={currentNotebook.id}
            noteId={id}
            title={title}
            titleOfParent={currentNotebook.title}
            color={currentNotebook.color}
            lastUpdated={updatedAt}
            content={""} //TODO
            tags={tags}
          />
        ))}
      </div>
    </>
  )
}