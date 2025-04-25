import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

import { Link } from "@tanstack/react-router";
import { AccentColor, iconColor, lineColor } from "@/components/cards/cardColors";
import { NotebookNoteDropdown } from "@/components/NotebookNoteDropdown";
import { Icon, LucideIcon, Notebook, Sun, Timer } from "lucide-react";
import { Tag, TagColor } from "@/components/Tag"
import { cn } from "@/lib/utils";
import { useNotebook } from "@/hooks/useNotebook.tsx";

export type NotebookCardProps = {
  id: string;
}

export function NotebookCard({id}: NotebookCardProps) {
  const {data, isLoading} = useNotebook(id);
  if (isLoading || !data) {
    return <div>Loading...</div>
  }

  const {title, description, color, noteCount, icon, updatedAt, createdAt, tags} = data; {/*TODO*/}
  console.log(tags);

  return (
    <Link to={`/notebooks/${id}`}>

      <Card className={cn("flex border-l-10 overflow-hidden p-0 py-4 gap-4", lineColor["blue"])}> {/*TODO*/}

        <CardHeader className="flex pl-0 pr-4 gap-2 items-center justify-start">

          <div className={cn("p-2.5 rounded-r-md", iconColor["blue"])}>  {/*TODO*/}
            <Sun className="text-white w-6 h-6"/> {/*TODO*/}
          </div>

          <div className="flex flex-col w-full gap-1">

            <div className="flex justify-between items-center">
              <CardTitle className="font-serif">{title}</CardTitle>
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
                <CardDescription> Updated {updatedAt.slice(0,10)} ago </CardDescription> {/*TODO*/}
              </div>
            </div>

          </div>

        </CardHeader>

        {tags &&
          <div className="relative mr-4">

            <div className="flex pl-4 gap-2 overflow-x-auto hide-scrollbar relative">
              {tags.map((tag, index) => (
                  <Tag name={tag.name} color={"blue"} key={index}></Tag> // TODO
              ))}
              <div className="ml-5"></div>
            </div>

            {/* shadow on the left side */}
            {/* <div className="pointer-events-none absolute top-0 left-0 h-full w-3 bg-gradient-to-r from-white-secondary dark:from-black-secondary to-transparent"></div> */}
            <div className="pointer-events-none absolute top-0 right-0 h-full w-4 bg-gradient-to-l from-white-secondary dark:from-black-secondary to-transparent"></div>

          </div>  
        }

        {description &&
          <CardDescription className="px-4 line-clamp-2"> {description} </CardDescription>
        }

      </Card>
      
    </Link>
  )
}
