import { Section } from '@/components/section/Section';
import { createFileRoute } from '@tanstack/react-router'

import {
  Book
} from "lucide-react"
import { useState } from 'react'

export const Route = createFileRoute('/_authentificated/notebooks/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [notebooks, setNotebooks] = useState(10);
  
  return (
    <>
      <Section title={"Notebooks"} Icon={Book} amount={notebooks} />
      <div className='flex flex-col gap-4'>
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
