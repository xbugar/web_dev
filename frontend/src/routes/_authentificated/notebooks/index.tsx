import { Section } from '@/components/section/Section';
import { createFileRoute } from '@tanstack/react-router'

import { Book } from "lucide-react"

import { NotebookCard, NotebookCardProps } from "@/components/cards/NotebookCard.tsx";
import { useUserNotebooks } from "@/hooks/useUserNotebooks.ts";

export const Route = createFileRoute('/_authentificated/notebooks/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {data: notebooks} = useUserNotebooks("0e95ab83-aaba-48c7-af04-d0a8f1e97195");
  return (
    <>
      <Section title={"Notebooks"} Icon={Book} amount={notebooks?.length ?? 0}/>
      <div className='flex flex-col gap-4'>
        {notebooks && notebooks.map(({ id, title, description, icon, color, noteCount, tags, updatedAt }) => (
          <NotebookCard
            key={id}
            title={title}
            description={description}
            iconName={icon}
            color={color}
            noteCount={noteCount}
            tags={tags}
            lastUpdated={updatedAt}
          />
        ))}
        {/*<NotebookCard*/}
        {/*  id={"022b0145-19e1-40f1-8a47-af68add27c78"}/>*/}
      </div>
    </>
  )
}