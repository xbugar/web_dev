import { NoteCard } from '@/components/cards/NoteCard';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { NotebookCard } from '@/components/cards/NotebookCard';

import {
  BookOpen, Pencil, Plus
} from "lucide-react"

export const Route = createFileRoute(
  '/_authentificated/notebooks/$notebookId/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const [notebooks, setNotebooks] = useState(10);
  
  return (
    <>
      <div className='py-2 flex flex-row justify-between items-center font-bold text-2xl font-serif'>
        <h2>Notebook preview</h2>
        <div className='flex gap-1 items-center'>
          <Pencil />
        </div>
      </div>
        <NotebookCard
          to="/notebooks/$notebookId"
          title="PB006"
          description="Základy OOP, blablbablaa"
          Icon={BookOpen}
          color="orange"
          noteCount={5}
          tags={[
            {name:"programming", color: "blue"},
            {name: "semester 3", color: "purple"}]}
          lastUpdated="2 weeks"
        />

      <div className='py-2 flex flex-row justify-between items-center font-bold text-2xl font-serif'>
        <h2>Notes</h2>
        <div className='flex gap-1 items-center'>
          <Plus />
        </div>
      </div>
      
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