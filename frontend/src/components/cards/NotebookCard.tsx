import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { AccentColor, iconColor, lineColor } from '@/components/cards/cardColors';
import { Ellipsis, LucideIcon, Notebook, Timer } from 'lucide-react';
import { Tag } from '@/components/cards/Tag.tsx';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import { iconMap } from '@/components/cards/iconOptions';
import { NotebookCardProps } from '@/types/notebook';
import { NotebookDropdown } from '../dropdown/NotebookDropdown';

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
  const notebookCardProps: NotebookCardProps = {
    id,
    title,
    description,
    iconName,
    color,
    noteCount,
    tags,
    lastUpdated,
  };

  return (
    <Card
      className={cn(
        'flex flex-shrink-0 gap-4 overflow-hidden border-l-10 p-0 py-4',
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
                <Link to={`/notebooks/$notebookId`} params={{ notebookId: id }}>
                  {title}
                </Link>
              ) : (
                title
              )}
            </CardTitle>

            {isLinked ? (
              <NotebookDropdown {...notebookCardProps} />
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

      {description && (
        <CardDescription className="line-clamp-2 px-4"> {description} </CardDescription>
      )}
    </Card>
  );
};
