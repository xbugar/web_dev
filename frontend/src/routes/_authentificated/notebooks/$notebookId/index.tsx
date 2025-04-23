import { NoteCard } from '@/components/cards/NoteCard';
import { createFileRoute } from '@tanstack/react-router'
import { NotebookCard } from '@/components/cards/NotebookCard';
import { Section } from '@/components/section/Section';
import { NotebookCardProps } from '@/components/cards/NotebookCard';

import {
  BookOpen,
  ClipboardList,
  Pencil,
  Plus
} from "lucide-react"


export const Route = createFileRoute('/_authentificated/notebooks/$notebookId/',) ({
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
      <Section title={"Notebook preview"} Icon={Pencil}/>
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

      <Section title={"Notes"} Icon={Plus}/>
      <div className='flex flex-col gap-4'>
        <NoteCard
          to="/notebooks/$notebookId/$noteId"
          title="1. Lecture"
          color="orange"
          titleOfParent='PB006'
          lastUpdated="2 "
          content="something i wrote ..."
          tags={[
            {name:"programming", color: "blue"},
            {name: "semester 3", color: "purple"}]}
        />
      </div>
    </>
  )
}