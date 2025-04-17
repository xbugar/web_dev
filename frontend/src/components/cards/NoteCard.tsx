import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

import { AccentColor, lineColor } from "./cardColors"


import { Link  } from "@tanstack/react-router"
import { NotebookNoteDropdown } from "../NotebookNoteDropdown"
import { Timer } from "lucide-react"
import { Badge } from "../ui/badge"


type NoteCardProps = {
  to: string
  color: AccentColor
  title: string
  titleOfParent: string
  lastUpdated: string
  // content: string
  // tags: 
}

export function NoteCard( {to, color, title, titleOfParent, lastUpdated }: NoteCardProps ) {
  return (
    <Link to={to}>
      <Card className={`${lineColor[color]} flex border-l-10 p-1 gap-3 overflow-hidden pt-3`}>
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
          <Badge variant="blue">Tag name</Badge>
          <Badge variant="green">Tag name</Badge>
          <Badge variant="red">Tag name</Badge>
        </div>
        <CardDescription className="pl-3 pr-3 pb-1">
          Something I wrote, I cant remember when, but I know I wrote it sometime whenever in the past, when I was...
        </CardDescription>
      </Card>
    </Link>
  )
}
