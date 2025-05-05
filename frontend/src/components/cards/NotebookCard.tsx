import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

import { Link } from '@tanstack/react-router';
import { AccentColor, iconColor, lineColor } from '@/components/cards/cardColors';
import { NotebookNoteDropdown } from '@/components/cards/NotebookNoteDropdown.tsx';
import { Ellipsis, LucideIcon, Notebook, Timer } from 'lucide-react';
import { Tag, TagColor } from '@/components/cards/Tag.tsx';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import { iconMap } from '@/components/cards/IconOptions.tsx';

export type NotebookCardProps = {
  id: string;
  key: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
  noteCount: number;
  lastUpdated: string;
  tags?: { name: string; color: string }[];
  isLinked?: boolean;
};

export const NotebookCard = ({
  id,
  title,
  description,
  iconName,
  color,
  noteCount,
  lastUpdated,
  tags,
  isLinked = true,
}: NotebookCardProps) => {
  const IconComponent: LucideIcon = iconMap[iconName];
  const timeAgo = formatDistanceToNow(new Date(lastUpdated), { addSuffix: true });
  return (
    <Card
      className={cn(
        'flex gap-4 overflow-hidden border-l-10 p-0 py-4',
        lineColor[color as AccentColor],
      )}
    >
      <CardHeader className="flex items-center justify-start gap-2 pr-4 pl-0">
        <div className={cn('rounded-r-md p-2.5', iconColor[color as AccentColor])}>
          <IconComponent className="h-6 w-6 text-white" />
        </div>

        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center justify-between">
            <CardTitle className="font-serif">
              {isLinked ? (
                <Link
                  to={`/notebooks/$notebookId`}
                  params={{ notebookId: id }}
                  className="line-clamp-1"
                >
                  {title}
                </Link>
              ) : (
                title
              )}
            </CardTitle>
            {isLinked ? (
              <NotebookNoteDropdown
                notebookId={id}
                noteId={''}
                data={{
                  title: title,
                  description: description,
                  color: color,
                  iconName: iconName,
                }}
                type={'notebook'}
              />
            ) : (
              <button className="hover:bg-muted rounded-[10%] p-0">
                <Ellipsis className="h-5 w-5 text-black dark:text-white" />
              </button>
            )}
          </div>

          <div className="text-black-text-secondary dark:text-white-text-secondary flex items-center justify-between self-stretch">
            <div className="flex gap-1">
              <Notebook className="h-4 w-4" />
              <CardDescription>
                {noteCount} {noteCount == 1 ? 'note' : 'notes'}
              </CardDescription>
            </div>
            <div className="flex gap-1">
              <Timer className="h-4 w-4" />
              <CardDescription> {timeAgo} </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>

      {tags && (
        <div className="relative mr-4">
          <div className="hide-scrollbar relative flex gap-2 overflow-x-auto pl-4">
            {tags.map((tag, index) => (
              <Tag name={tag.name} color={tag.color as TagColor} key={index}></Tag>
            ))}
            <div className="ml-5"></div>
          </div>

          {/* shadow on the left side */}
          {/* <div className="pointer-events-none absolute top-0 left-0 h-full w-3 bg-gradient-to-r from-white-secondary dark:from-black-secondary to-transparent"></div> */}
          <div className="from-white-secondary dark:from-black-secondary pointer-events-none absolute top-0 right-0 h-full w-4 bg-gradient-to-l to-transparent"></div>
        </div>
      )}

      {description && (
        <CardDescription className="line-clamp-2 px-4"> {description} </CardDescription>
      )}
    </Card>
  );

  // if (isLinked) {
  //   return <Link to={`/notebooks/${id}`}>{CardContent}</Link>;
  // }

  // return CardContent;
};
