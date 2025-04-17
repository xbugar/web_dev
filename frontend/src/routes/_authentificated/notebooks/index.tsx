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

import { NotebookCard } from "@/components/cards/NotebookCard.tsx";
import { AccentColor } from '@/components/cards/cardColors';
import { TagColor } from '@/components/Tag';

export const Route = createFileRoute('/_authentificated/notebooks/')({
  component: RouteComponent,
})

type NotebookItem = {
  to: string
  title: string
  description: string
  Icon: LucideIcon
  color: AccentColor
  noteCount: number
  tags: { name: string; color: TagColor }[]
  lastUpdated: string
}

function RouteComponent() {
  const notebooks: NotebookItem[] = [
    {
      to: "/notebooks/$notebookId",
      title: "CS101",
      description: "Introduction to Computer Science",
      Icon: Cpu,
      color: "blue",
      noteCount: 12,
      tags: [
        { name: "programming", color: "blue" },
        { name: "semester 1", color: "green" }
      ],
      lastUpdated: "3 days"
    },
    {
      to: "/notebooks/$notebookId",
      title: "MATH201",
      description: "Linear Algebra Notes and Exercises",
      Icon: Layers,
      color: "green",
      noteCount: 8,
      tags: [
        { name: "math", color: "yellow" },
        { name: "semester 2", color: "red" }
      ],
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
        { name: "planning", color: "pink" }
      ],
      lastUpdated: "4 days"
    },
    {
      to: "/notebooks/$notebookId",
      title: "PB307",
      description: "Databases and SQL Fundamentals",
      Icon: FileText,
      color: "blue",
      noteCount: 7,
      tags: [
        { name: "databases", color: "blue" },
        { name: "semester 4", color: "green" }
      ],
      lastUpdated: "2 weeks"
    },
    {
      to: "/notebooks/$notebookId",
      title: "UX301",
      description: "User Experience Design Ideas",
      Icon: PenTool,
      color: "purple",
      noteCount: 4,
      tags: [
        { name: "design", color: "purple" },
        { name: "semester 3", color: "yellow" }
      ],
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
      description: "Advanced Programming Lab",
      Icon: Code,
      color: "blue",
      noteCount: 9,
      tags: [
        { name: "programming", color: "blue" },
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
      tags: [
        { name: "random", color: "yellow" },
        { name: "misc", color: "green" }
      ],
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
        { name: "security", color: "red" },
        { name: "semester 6", color: "yellow" }
      ],
      lastUpdated: "2 days"
    },
    {
      to: "/notebooks/$notebookId",
      title: "LANG101",
      description: "Language and Communication Basics",
      Icon: Languages,
      color: "pink",
      noteCount: 5,
      tags: [
        { name: "language", color: "pink" },
        { name: "semester 1", color: "purple" }
      ],
      lastUpdated: "1 month"
    }
  ];

  return (
    <>
      <div className='py-2 flex flex-row justify-between items-center font-bold text-2xl font-serif'>
        <h2>Notebooks</h2>
        <div className='flex gap-1 items-center'>
          <span>{notebooks.length}</span>
          <Book />
        </div>
      </div>
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