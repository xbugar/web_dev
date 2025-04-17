import { createFileRoute } from '@tanstack/react-router'

import {
  Book, BookOpen
} from "lucide-react"
import { useState } from 'react'
import {NotebookCard} from "@/components/cards/NotebookCard.tsx";

export const Route = createFileRoute('/_authentificated/notebooks/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [notebooks, setNotebooks] = useState(10);
  
  return (
    <>
      <div className='py-2 flex flex-row justify-between items-center font-bold text-2xl font-serif'>
        <h2>Notebooks</h2>
        <div className='flex gap-1 items-center'>
          <span>{notebooks}</span>
          <Book />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
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
      {Array.from({ length: notebooks }, (_, index) => (
          <div key={index} className="bg-black text-white h-50">
            <h1>Notebook {index}</h1>
            <p>This is notebook number {index}</p>
          </div>
        ))}
      </div>
    </>
  )
}