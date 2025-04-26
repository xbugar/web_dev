import { Section } from '@/components/section/Section';
import { createFileRoute } from '@tanstack/react-router'

import { Plus } from "lucide-react"

import { NotebookCard } from "@/components/cards/NotebookCard.tsx";
import { useUserNotebooks } from "@/hooks/useUserNotebooks.ts";

export const Route = createFileRoute('/_authentificated/notebooks/')({
  component: RouteComponent,
})

function RouteComponent() {
  const userId = "03e57dbe-c819-43f8-910b-b81b80a3a08e"
  const {data: notebooks} = useUserNotebooks(userId);
  return (
    <>
      <Section title={"Notebooks"} Icon={Plus} id={userId} type="notebook"/>

      <div className='flex flex-col gap-4'>
        {notebooks && notebooks.map(({ id, title, description, icon, color, noteCount, tags, updatedAt }) => (
          <NotebookCard
            key={id}
            id={id}
            title={title}
            description={description}
            iconName={icon}
            color={color}
            noteCount={noteCount}
            tags={tags}
            lastUpdated={updatedAt}
          />
        ))}
      </div>
    </>
  )
}