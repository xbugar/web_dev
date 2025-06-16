"use client"
import { startOfWeek, addDays, format, isSameDay, parseISO, eachDayOfInterval, add } from "date-fns"
import { CalendarCell } from "@/components/calendar/CalendarCell"
import { useRangeEvents } from "@/hooks/useRangeEvents.ts";
import { useState } from "react";
import { EventType } from "@/types/EventType.ts";

function getEventDates(events: EventType[]): Date[] {
  const dates: Date[] = [];

  for (const event of events) {
    const start = parseISO(event.timeFrom);
    const end = parseISO(event.timeTo);

    if (start <= end) {
      const range = eachDayOfInterval({ start, end });
      dates.push(...range);
    }
  }

  return dates;
}

export function CalendarSmall() {
  const [daysOfWeek] = useState(() => {
    const today = new Date();
    const weekStart = startOfWeek(today, { weekStartsOn: 1 }); // Monday
    return Array.from({ length: 7 }).map((_, i) => addDays(weekStart, i));
  });

  const start =  (daysOfWeek[0]).toISOString();
  const end = (add(daysOfWeek[6], {days: 1})).toISOString();
  console.log(daysOfWeek)

  const { data: events } = useRangeEvents(start, end);
  const eventDates = events ? getEventDates(events) : [];
  console.log(start.toLocaleString(), "start");
  console.log(end);

  return (
    <div className="grid grid-cols-7 gap-2 w-full">
      {daysOfWeek.map((day) => {
        const hasEvent = eventDates.some(eventDate => isSameDay(eventDate, day));

        return (
          <CalendarCell
            key={day.toISOString()}
            fullDate={format(day, 'yyyy-MM-dd')}
            dayOfTheWeek={format(day, 'EEE')}
            day={format(day, 'd')}
            month={format(day, 'MMM')}
            hasEvent={hasEvent}
            isToday={isSameDay(day, new Date())}
          />
        );
      })}
    </div>
  );
}
