import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

import {BookOpen, Notebook, Timer} from "lucide-react";
import {NotebookNoteDropdown} from "@/components/NotebookNoteDropdown.tsx";
import {Badge} from "@/components/ui/badge.tsx";

export function NotebookCard() {
  return (
      <Card className="flex border-l-10 border-l-accent-blue overflow-hidden p-0 pt-3 gap-3">
        <CardHeader className="flex pl-0 gap-2 items-center justify-start self-stretch">
          <div className="p-2.5 bg-accent-blue rounded-r-md">
            <BookOpen className=" text-text-primary-white w-6 h-6"/>
          </div>
          <div className="flex-auto items-start">
            <div className="flex justify-between items-center self-stretch">
              <CardTitle>Title of Notebook</CardTitle>
              <NotebookNoteDropdown/>
            </div>
            <div
                className="text-text-lm-secondary dark:text-text-dm-secondary flex justify-between items-center self-stretch">
              <div className="flex justify-start items-center gap-1">
                <Notebook className="w-4 h-4"/>
                <CardDescription> 4 notes </CardDescription>
              </div>
              <div className="flex justify-start items-center gap-1">
                <Timer className="w-4 h-4"/>
                <CardDescription> Updated 2 weeks ago</CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <div className="flex gap-2 justify-start self-stretch pl-3 pr-3">
          <Badge variant="blue">Programming</Badge>
          <Badge variant="purple">Semester 4</Badge>
        </div>
        <CardDescription className="pl-3 pr-3 pb-3">Deploy your new project in one-click.</CardDescription>
      </Card>
  )
}
