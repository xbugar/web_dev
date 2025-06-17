import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { AccentColor, lineColor } from '@/components/cards/cardColors';
import { Ellipsis, RectangleHorizontal, Timer } from 'lucide-react';
import { Tag } from '@/components/cards/Tag.tsx';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import { FlashdeckCardProps } from '@/types/flashdeck';
import { FlashdeckDropdown } from '@/components/dropdown/FlashdeckDropdown';

export const FlashdeckCard = ({
  id,
  title,
  description,
  color,
  flashCardsCount,
  lastUpdated,
  tags,
  isLinked = true,
}: FlashdeckCardProps) => {
  const timeAgo = formatDistanceToNow(new Date(lastUpdated), { addSuffix: true });
  const flashdeckCardProps: FlashdeckCardProps = {
    id,
    title,
    description,
    color,
    flashCardsCount,
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
      <CardHeader className="flex items-center justify-start gap-2 px-4">
        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center justify-between">
            <CardTitle className="font-serif">
              {isLinked ? (
                <Link to={`/flashdecks/$flashdeckId`} params={{ flashdeckId: id }}>
                  {title}
                </Link>
              ) : (
                title
              )}
            </CardTitle>

            {isLinked ? (
              <FlashdeckDropdown {...flashdeckCardProps} />
            ) : (
              <button className="hover:bg-muted rounded-[10%] p-0">
                <Ellipsis className="h-5 w-5 text-black dark:text-white" />
              </button>
            )}
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

      <div className="text-black-text-secondary dark:text-white-text-secondary flex items-center justify-between self-stretch px-4">
        <div className="flex gap-1">
          <RectangleHorizontal className="h-4 w-4" />
          <CardDescription>
            {flashCardsCount} {flashCardsCount == 1 ? 'card' : 'cards'}
          </CardDescription>
        </div>
        <div className="flex gap-1">
          <Timer className="h-4 w-4" />
          <CardDescription> {timeAgo} </CardDescription>
        </div>
      </div>
    </Card>
  );
};
