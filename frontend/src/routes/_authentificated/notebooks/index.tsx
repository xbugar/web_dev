import { Section } from '@/components/section/Section';
import { createFileRoute } from '@tanstack/react-router'

import {
  Book, BookOpen,
  LucideIcon,
  FileText,
  Layers,
  Cpu,
  Code,
  ClipboardList,
  ShieldCheck,
  Brain,
  PenTool,
  Languages
} from "lucide-react"

import { NotebookCard, NotebookCardProps } from "@/components/cards/NotebookCard.tsx";

export const Route = createFileRoute('/_authentificated/notebooks/')({
  component: RouteComponent,
})

function RouteComponent() {
  const notebooks: NotebookCardProps[] = [
    {
      to: "/notebooks/$notebookId",
      title: "CS101",
      Icon: Cpu,
      color: "blue",
      noteCount: 12,
      lastUpdated: "3 days"
    },
    {
      to: "/notebooks/$notebookId",
      title: "MATH201",
      description: "Linear Algebra Notes and Exercises",
      Icon: Layers,
      color: "green",
      noteCount: 8,
      lastUpdated: "1 week"
    },
    {
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
    },
    {
      to: "/notebooks/$notebookId",
      title: "PB307",
      Icon: FileText,
      color: "blue",
      noteCount: 7,
      tags: [
        { name: "databases", color: "blue" },
        { name: "semester 4", color: "green" },
        { name: "databases", color: "blue" },
        { name: "semester 4", color: "green" },
        { name: "databases", color: "blue" },
        { name: "semester 4", color: "green" },
        { name: "databases", color: "blue" },
        { name: "semester 4", color: "green" },

      ],
      lastUpdated: "2 weeks"
    },
    {
      to: "/notebooks/$notebookId",
      title: "UX301",
      description: "User Experience Design Ideas TESTING SPACEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE AAAAHHH HELPE MEEEE A LOT OF TEXT  HELP MEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE HELPPPP  HELPEPPPPPPPPP AAAAAAAAAAAAAa",
      Icon: PenTool,
      color: "purple",
      noteCount: 4,
      lastUpdated: "5 days"
    },
    {
      to: "/notebooks/$notebookId",
      title: "AI101",
      description: "Artificial Intelligence notes",
      Icon: Brain,
      color: "pink",
      noteCount: 11,
      tags: [
        { name: "ai", color: "blue" },
        { name: "semester 5", color: "red" }
      ],
      lastUpdated: "1 day"
    },
    {
      to: "/notebooks/$notebookId",
      title: "PB010",
      Icon: Code,
      color: "blue",
      noteCount: 9,
      tags: [
        { name: "lab", color: "red" }
      ],
      lastUpdated: "6 days"
    },
    {
      to: "/notebooks/$notebookId",
      title: "NOTES-RANDOM",
      description: "A bunch of random ideas and thoughts",
      Icon: BookOpen,
      color: "orange",
      noteCount: 6,
      lastUpdated: "3 weeks"
    },
    {
      to: "/notebooks/$notebookId",
      title: "PB099",
      description: "Security in Software Engineering",
      Icon: ShieldCheck,
      color: "red",
      noteCount: 14,
      tags: [
        { name: "security", color: "red" }
      ],
      lastUpdated: "2 days"
    },
    {
      to: "/notebooks/$notebookId",
      title: "LANG101",
      Icon: Languages,
      color: "pink",
      noteCount: 5,
      tags: [
        { name: "language", color: "pink" }
      ],
      lastUpdated: "1 month"
    }
  ];

  return (
    <>
      <Section title={"Notebooks"} Icon={Book} amount={notebooks.length} />
      <div className='flex flex-col gap-4'>
        {notebooks.map(({ to, title, description, Icon, color, noteCount, tags, lastUpdated }) => (
          <NotebookCard
            key={to}
            to={to}
            title={title}
            description={description}
            Icon={Icon}
            color={color}
            noteCount={noteCount}
            tags={tags}
            lastUpdated={lastUpdated}
          />
        ))}
      </div>
    </>
  )
}