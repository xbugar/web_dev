import { NoteCard } from '@/components/cards/NoteCard';
import { createFileRoute } from '@tanstack/react-router'
import { NotebookCard } from '@/components/cards/NotebookCard';
import { Section } from '@/components/section/Section';

import {
  Pencil,
  Plus
} from "lucide-react"
import { useNotebook } from "@/hooks/useNotebook.ts";
import { useNotesByNotebook } from "@/hooks/useNotesByNotebook.ts";


export const Route = createFileRoute('/_authentificated/notebooks/$notebookId/',) ({
  component: RouteComponent,
})


function RouteComponent() {
  const { notebookId } = Route.useParams();
  console.log("notebookId", notebookId);

  const { data: currentNotebook } = useNotebook(notebookId); {/*TODO*/}
  console.log("currentNotebook", currentNotebook);


  const { data: notes } =  useNotesByNotebook(notebookId);
  console.log("notes", notes);

  return (
    <>
      <Section title={"Notebook preview"} Icon={Pencil} id={notebookId} type={"notebook"}/>
      {currentNotebook && (
        <NotebookCard
          key={notebookId}
          id={notebookId}
          title={currentNotebook.title}
          description={currentNotebook.description}
          icon={currentNotebook.icon}
          color={currentNotebook.color}
          noteCount={currentNotebook.noteCount}
          tags={currentNotebook.tags}
          lastUpdated={currentNotebook.updatedAt}
          isLinked={false}
        />
      )}

      <Section title={"Notes"} Icon={Plus} id={notebookId} type={"note"}/>
      <div className='flex flex-col gap-4'>

        {notes && notes.map(({ id, title, color, updatedAt, tags }) => (
          <NoteCard
            key={id}
            parentId={currentNotebook.id}
            noteId={id}
            title={title}
            titleOfParent={currentNotebook.title}
            color={color}
            lastUpdated={updatedAt}
            content={""} //TODO
            tags={tags}
          />
        ))}
      </div>
    </>
  )
}