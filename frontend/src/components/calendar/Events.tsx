import { Event } from '@/types/event';
import { EventCard } from '@/components/cards/EventCard.tsx';
import { format, isAfter, isBefore, isSameDay, parseISO } from 'date-fns';

export type EventsProps = {
  events?: Event[];
  selectedDay?: Date;
  homepageDesktop?: boolean;
  calendarDesktop?: boolean;
  eventDesktop?: boolean;
}

export const Events = ({
  events,
  selectedDay,
  homepageDesktop = false,
  calendarDesktop = false,
  eventDesktop = false
} : EventsProps) => {
  return (
    <div className={`flex flex-col gap-4 w-full lg:overflow-y-auto ${homepageDesktop ? 'grid grid-cols-2' : ''} ${calendarDesktop ? 'lg:h-[calc(100vh-26.5rem)]' : ''} ${eventDesktop ? 'lg:h-[calc(100vh-5rem)]' : ''}`}
         style={{
           scrollbarWidth: 'none',
           msOverflowStyle: 'none'
         }}>
    {events &&
        events.map(({ id, title, description, tags, timeFrom, timeTo }) => {
          const from = parseISO(timeFrom);
          const to = parseISO(timeTo);

          let timeDisplay: { from?: string; to?: string; allDay?: boolean; tillDate?: string };

          if (selectedDay) {
            if (isSameDay(from, to) && isSameDay(from, selectedDay)) {
              // single day event
              timeDisplay = {
                from: format(from, 'HH:mm'),
                to: format(to, 'HH:mm'),
              };
            } else if (isSameDay(to, selectedDay)) {
              // ending on selected day
              timeDisplay = {
                to: 'Ends ' + format(to, 'HH:mm'),
              };
            } else if (isSameDay(from, selectedDay)) {
              // starting on selected day
              timeDisplay = {
                from: 'Starts ' + format(from, 'HH:mm'),
              };
            } else if (isBefore(from, selectedDay) && isAfter(to, selectedDay)) {
              // spans selected day fully
              timeDisplay = {
                allDay: true,
              };
            } else {
              return null;
            }
          } else {
            // all events page
            timeDisplay = {
              from: format(from, 'eee, MMMM d, yyyy HH:mm'),
              to: format(to, 'eee, MMMM d, yyyy HH:mm'),
              tillDate: format(from, 'eee, MMMM d, yyyy HH:mm'),
            };
          }

          return (
            <EventCard
              key={id}
              id={id}
              title={title}
              description={description}
              tags={tags}
              {...timeDisplay}
            />
          );
        })}
    </div>
  );
};
