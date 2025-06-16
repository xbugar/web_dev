import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { AccentColor, lineColor } from '@/components/cards/cardColors';
import { Ellipsis, Timer } from 'lucide-react';
import { Tag } from '@/components/cards/Tag.tsx';
import { cn } from '@/lib/utils.ts';
import { formatDistanceToNow } from 'date-fns';
import { NoteCardProps } from '@/types/note';
import { NoteDropdown } from '@/components/dropdown/NoteDropdown';

export function NoteCard({
  id,
  title,
  tags,
  notebook,
  content,
  lastUpdated,
  isLinked = true,
}: NoteCardProps) {
  const timeAgo = formatDistanceToNow(new Date(lastUpdated), { addSuffix: true });
  const noteCardProps: NoteCardProps = {
    id,
    title,
    tags,
    notebook,
    content,
    lastUpdated,
  };

  return (
    <Card
      className={cn(
        'flex gap-4 overflow-hidden border-l-10 p-0 py-4',
        lineColor[notebook.color as AccentColor],
      )}
    >
      <CardHeader className="flex items-center justify-start gap-2 px-4">
        <div className="flex w-full flex-col gap-1">
          <div className="flex w-full items-center justify-between">
            <CardTitle>
              {isLinked ? (
                <Link
                  to="/notebooks/$notebookId/$noteId"
                  params={{ notebookId: notebook.id, noteId: id }}
                >
                  {title}
                </Link>
              ) : (
                title
              )}
            </CardTitle>
            {isLinked ? (
              <NoteDropdown {...noteCardProps} />
            ) : (
              <button className="hover:bg-muted rounded-[10%] p-0">
                <Ellipsis className="h-5 w-5 text-black dark:text-white" />
              </button>
            )}
          </div>

          <div className="text-black-text-secondary dark:text-white-text-secondary flex items-center justify-between self-stretch">
            <div className="flex gap-1">
              <CardDescription>{notebook.title}</CardDescription>
            </div>
            <div className="flex gap-1">
              <Timer className="h-4 w-4" />
              <CardDescription> {timeAgo} </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>

      {tags && tags.length > 0 && (
        <div className="relative mr-4">
          <div className="hide-scrollbar relative flex gap-2 overflow-x-auto pl-4">
            {tags.map((tag, index) => (
              <Tag name={tag.name} color={tag.color as AccentColor} key={index}></Tag>
            ))}
            <div className="ml-5"></div>
          </div>

          <div className="from-white-secondary dark:from-black-secondary pointer-events-none absolute top-0 right-0 h-full w-4 bg-gradient-to-l to-transparent"></div>
        </div>
      )}

      {content && <CardDescription className="line-clamp-2 px-4"> {content} </CardDescription>}
    </Card>
  );
}
