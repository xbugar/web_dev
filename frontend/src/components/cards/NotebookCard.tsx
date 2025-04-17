import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

import {LucideIcon, Notebook, Timer} from "lucide-react";
import {NotebookNoteDropdown} from "@/components/NotebookNoteDropdown.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Link} from "@tanstack/react-router";
import {AccentColor, iconColor, lineColor} from "@/components/cards/cardColors.tsx";

type NotebookCardProps = {
  to: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  color: AccentColor;
  noteCount: number;
  lastUpdated: string; // todo
  tags: { name: string; color: "blue" | "purple" | "yellow" | "green" | "red" | "pink" }[];
}

export function NotebookCard({to, title, description, Icon, color, noteCount, lastUpdated, tags}: NotebookCardProps) {
  return (
      <Link to={to}>
        <Card className={`${lineColor[color]}  flex border-l-10 overflow-hidden p-0 pt-3 gap-3`}>
          <CardHeader className="flex pl-0 gap-2 items-center justify-start self-stretch">
            <div className={`${iconColor[color]} p-2.5 rounded-r-md`}>
              <Icon className=" text-text-primary-white w-6 h-6"/>
            </div>
            <div className="flex-auto items-start">
              <div className="flex justify-between items-center self-stretch">
                <CardTitle>{title}</CardTitle>
                <NotebookNoteDropdown/>
              </div>
              <div
                  className="text-text-lm-secondary dark:text-text-dm-secondary flex justify-between items-center self-stretch">
                <div className="flex justify-start items-center gap-1">
                  <Notebook className="w-4 h-4"/>
                  <CardDescription> {noteCount} notes </CardDescription>
                </div>
                <div className="flex justify-start items-center gap-1">
                  <Timer className="w-4 h-4"/>
                  <CardDescription> Updated {lastUpdated} ago </CardDescription>
                </div>
              </div>
            </div>
          </CardHeader>
          <div className="flex gap-2 justify-start self-stretch pl-3 pr-3">
            {tags.map((tag, index) => (
                <Badge key={index} variant={tag.color}> {tag.name} </Badge>
            ))}
          </div>
          <CardDescription className="pl-3 pr-3 pb-3"> {description} </CardDescription>
        </Card>
      </Link>
  )
}
