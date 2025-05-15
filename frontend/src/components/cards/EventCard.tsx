import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from "@/lib/utils.ts";
import { AccentColor, lineColor } from "@/components/cards/cardColors.tsx";
import { Tag, TagColor } from "@/components/cards/Tag.tsx";
import { NotebookNoteDropdown } from "@/components/cards/NotebookNoteDropdown.tsx";
import { formatDistanceToNow, format, parseISO } from 'date-fns';

export type EventCardProps = {
  title: string;
  description: string;
  tag: { name: string; color: string };
  date: string;
  time: string;
  color: string;
}

export const EventCard = ({
  title,
  description,
  tag,
  date,
  time,
  color
}: EventCardProps) => {
  const tillEvent = formatDistanceToNow(new Date(date), {addSuffix: true});
  const timeFormat = format(parseISO(date), "eee, MMMM d, yyyy");
  return (
    <Card
      className={cn(
        'flex gap-3 overflow-hidden border-l-10 p-0 pt-3',
        lineColor[color as AccentColor],
      )}
    >
      <CardHeader className="gap-0 pr-3 pl-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <CardTitle>{title}</CardTitle>
            <div className="pt-1">
              <Tag name={tag.name} color={tag.color as TagColor} ></Tag>
            </div>
            {/*TODO*/}
            <CardDescription className="overflow-hidden pt-1 pb-2"> {description} </CardDescription>
          </div>
          <div className="justify-items-end">
            <NotebookNoteDropdown
              noteId={'4'}
              notebookId={'5'}
              data={{
                title: title,
              }}
              type={'note'}
            />
            <div className="gap-1 justify-items-end pb-2">
              <CardDescription className="text-sm font-bold" > {timeFormat}</CardDescription>
              <CardDescription className="text-sm font-bold"> {time}</CardDescription>
              <CardDescription> {tillEvent}</CardDescription>
            </div>

          </div>
        </div>
      </CardHeader>
    </Card>
  )
}