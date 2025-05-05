import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

import { Link } from '@tanstack/react-router';
import { AccentColor, lineColor } from '@/components/cards/cardColors';
import { NotebookNoteDropdown } from '@/components/cards/NotebookNoteDropdown.tsx';
import { Timer } from 'lucide-react';
import { Tag, TagColor } from '@/components/cards/Tag.tsx';
import { cn } from '@/lib/utils.ts';
import { formatDistanceToNow } from 'date-fns';

type NoteCardProps = {
  parentId: string;
  noteId: string;
  title: string;
  titleOfParent: string;
  color: string;
  lastUpdated: string;
  content: string;
  tags?: { name: string; color: string }[];
};

export function NoteCard({
  parentId,
  noteId,
  title,
  titleOfParent,
  color,
  lastUpdated,
  content,
  tags,
}: NoteCardProps) {
  const timeAgo = formatDistanceToNow(new Date(lastUpdated), { addSuffix: true });
  return (
    <Card
      className={cn(
        'flex gap-3 overflow-hidden border-l-10 p-0 pt-3',
        lineColor[color as AccentColor],
      )}
    >
      {' '}
      {/*TODO*/}
      <CardHeader className="gap-0 pr-3 pl-3">
        <div className="flex items-center justify-between self-stretch">
          <Link to={`/notebooks/${parentId}/${noteId}`}>
            <CardTitle>{title}</CardTitle>
          </Link>
          <NotebookNoteDropdown
            noteId={noteId}
            notebookId={parentId}
            data={{
              title: title,
            }}
            type={'note'}
          />
        </div>
        <div className="flex items-start justify-between self-stretch">
          <CardDescription>{titleOfParent}</CardDescription>
          <div className="flex gap-1">
            <Timer className="text-text-lm-secondary dark:text-text-dm-secondary h-4 w-4" />
            <CardDescription> Updated {timeAgo}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <div className="flex gap-2 pr-3 pl-3">
        {tags &&
          tags.map((tag, index) => (
            <Tag name={tag.name} color={tag.color as TagColor} key={index}></Tag>
          ))}
      </div>
      <CardDescription className="pr-3 pb-3 pl-3"> {content} </CardDescription>
    </Card>
  );
}
