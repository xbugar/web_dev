import { NoteCard } from '@/components/cards/NoteCard';
import { createFileRoute } from '@tanstack/react-router'
import { NotebookCard } from '@/components/cards/NotebookCard';
import { Section } from '@/components/section/Section';
import { useParams } from "@tanstack/react-router";


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
  const { notebookId } = useParams({ strict: false });
  const { data: currentNotebook } = useNotebook(notebookId);
  const { data: notes } =  useNotesByNotebook(notebookId);

  return (
    <>
      <Section title={"Notebook preview"} Icon={Pencil}/>
      {currentNotebook && (
        <NotebookCard
          to={"/notebooks/$notebookId"}
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

      <Section title={"Notes"} Icon={Plus}/>
      <div className='flex flex-col gap-4'>

        {notes && notes.map(({ id, title, color, updatedAt, tags }) => (
          <NoteCard
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