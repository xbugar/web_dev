import { EventType } from "@/types/EventType.tsx";
import { EventCard } from "@/components/cards/EventCard.tsx";
import { format, isAfter, isBefore, isSameDay, parseISO } from "date-fns";

export type EventsProps = {
  events?: EventType[];
  selectedDay?: Date;
  homepageDesktop?: boolean;
}

export const Events = ({
  events,
  selectedDay,
  homepageDesktop = false
} : EventsProps) => {
  return (
    <div className={`grid gap-4 w-full ${homepageDesktop ? 'grid-cols-2' : 'grid-cols-1'}`}>
    {events &&
        events.map(({ eventId, title, description, tags, timeFrom, timeTo }) => {
          const from = parseISO(timeFrom);
          const to = parseISO(timeTo);

          let timeDisplay: { from?: string; to?: string; allDay?: boolean; tillDate?: string };

          if (selectedDay) {
            if (isSameDay(from, to) && isSameDay(from, selectedDay)) { // single day event
              timeDisplay = {
                from: format(from, 'HH:mm'),
                to: format(to, 'HH:mm'),
              };
            } else if (isSameDay(to, selectedDay)) { // ending on selected day
              timeDisplay = {
                to: "Ends " + format(to, 'HH:mm'),
              };
            } else if (isSameDay(from, selectedDay)) { // starting on selected day
              timeDisplay = {
                from: "Starts " + format(from, 'HH:mm'),
              };
            } else if (isBefore(from, selectedDay) && isAfter(to, selectedDay)) { // spans selected day fully
              timeDisplay = {
                allDay: true,
              };
            } else {
              return null;
            }
          } else { // all events page
            timeDisplay = {
              from: format(from, "eee, MMMM d, yyyy HH:mm"),
              to: format(to, "eee, MMMM d, yyyy HH:mm"),
              tillDate: format(from, "eee, MMMM d, yyyy HH:mm")
            };
          }

          return (
            <EventCard
              key={eventId}
              eventId={eventId}
              title={title}
              description={description}
              tags={tags}
              {...timeDisplay}
            />
          );
        })}
    </div>
  )
}