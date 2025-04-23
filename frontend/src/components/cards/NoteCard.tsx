import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

import { Link  } from "@tanstack/react-router"
import { AccentColor, lineColor } from "@/components/cards/cardColors"
import { NotebookNoteDropdown } from "@/components/NotebookNoteDropdown"
import { Timer } from "lucide-react"
import { Tag, TagColor } from "@/components/Tag"

type NoteCardProps = {
  to: string
  title: string
  titleOfParent: string
  color: AccentColor
  lastUpdated: string
  content: string
  tags: { name: string; color: TagColor}[] 
}

export function NoteCard( {to, title, titleOfParent, color, lastUpdated, content, tags }: NoteCardProps ) {
  return (
    <Link to={to}>
      <Card className={`${lineColor[color]} flex border-l-10 overflow-hidden p-0 pt-3 gap-3`}>
        <CardHeader className="pl-3 pr-3 gap-0">
          <div className="flex justify-between items-center self-stretch">
            <CardTitle>{title}</CardTitle>
            <NotebookNoteDropdown />
          </div>
          <div className="flex justify-between items-start self-stretch">
            <CardDescription>{titleOfParent}</CardDescription>
            <div className="flex gap-1">
              <Timer className="text-text-lm-secondary dark:text-text-dm-secondary w-4 h-4"/>
              <CardDescription> Updated {lastUpdated} weeks ago</CardDescription>
            </div>
          </div>
        </CardHeader>
        <div className="flex pl-3 pr-3 gap-2">
        {tags.map((tag, index) => (
                <Tag name={tag.name} color={tag.color} key={index}></Tag>
            ))}
        </div>
        <CardDescription className="pl-3 pr-3 pb-3"> {content} </CardDescription>
      </Card>
    </Link>
  )
}
