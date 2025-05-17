import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils.ts';
import { Tag } from '@/components/cards/Tag.tsx';
import { formatDistanceToNow } from 'date-fns';
import { Link } from '@tanstack/react-router';
import { EventCardProps } from '@/types/EventType.ts';
import { AccentColor } from './cardColors';

export const EventCard = ({
  id,
  title,
  description,
  tags,
  from,
  to,
  allDay,
  tillDate,
}: EventCardProps) => {
  return (
    <Link to={`/events/$eventId`} params={{ eventId: id }}>
      <Card
        className={cn(
          'flex gap-3 overflow-hidden border-l-10 border-black p-0 pt-3 dark:border-white',
        )}
      >
        <CardHeader className="gap-0 pr-3 pl-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <CardTitle className="pb-1">{title}</CardTitle>
              {tags && (
                <div className="relative mr-4">
                  <div className="hide-scrollbar relative flex gap-2 overflow-x-auto">
                    {tags.map((tag, index) => (
                      <Tag name={tag.name} color={tag.color as AccentColor} key={index}></Tag>
                    ))}
                  </div>

                  {/* shadow on the left side */}
                  {/* <div className="pointer-events-none absolute top-0 left-0 h-full w-3 bg-gradient-to-r from-white-secondary dark:from-black-secondary to-transparent"></div> */}
                  <div className="from-white-secondary dark:from-black-secondary pointer-events-none absolute top-0 right-0 h-full w-4 bg-gradient-to-l to-transparent"></div>
                </div>
              )}
              {/*TODO*/}
              <CardDescription className="text-black-text-secondary dark:text-white-text-secondary overflow-hidden pt-1 pb-2">
                {' '}
                {description}{' '}
              </CardDescription>
            </div>
            <div className="justify-items-end pt-2">
              <div className="justify-items-end gap-1 pb-2">
                {allDay ? (
                  <CardDescription className="text-xs font-semibold">All day</CardDescription>
                ) : (
                  <>
                    {from && (
                      <CardDescription className="text-xs font-semibold"> {from} </CardDescription>
                    )}
                    {to && (
                      <CardDescription className="pb-2 text-xs font-semibold">
                        {' '}
                        {to}
                      </CardDescription>
                    )}
                  </>
                )}

                {tillDate && (
                  <CardDescription className="text-black-text-secondary dark:text-white-text-secondary">
                    {formatDistanceToNow(new Date(tillDate), { addSuffix: true })}
                  </CardDescription>
                )}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};
