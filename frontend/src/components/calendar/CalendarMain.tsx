'use client';

import * as React from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Calendar } from '@/components/ui/calendar';
import { eachDayOfInterval, format, isToday, parseISO, startOfMonth } from 'date-fns';
import { Event } from '@/types/event';

function getEventDates(events: Event[]): Date[] {
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

export function CalendarMain({ selectedDay, events }: { selectedDay: string; events: Event[] }) {
  const selectedFromParam = React.useMemo(() => {
    return selectedDay === 'today' ? new Date() : parseISO(selectedDay);
  }, [selectedDay]);

  const [date, setDate] = React.useState<Date | undefined>(selectedFromParam);
  const navigate = useNavigate();

  const eventDates = events ? getEventDates(events) : [];

  React.useEffect(() => {
    setDate(selectedFromParam);
  }, [selectedFromParam]);

  const [displayedMonth, setDisplayedMonth] = React.useState(() =>
    startOfMonth(selectedFromParam)
  );

  const handleSelect = (selected: Date | undefined) => {
    if (selected) {
      setDate(selected);

      if (selected.getMonth() !== displayedMonth.getMonth() || selected.getFullYear() !== displayedMonth.getFullYear()) {
        setDisplayedMonth(startOfMonth(selected));
      }

      const formatted = isToday(selected) ? 'today' : format(selected, 'yyyy-MM-dd');
      navigate({
        to: '/calendar/$calendarDay',
        params: { calendarDay: formatted },
      });
    }
  };

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={handleSelect}
      month={displayedMonth}
      onMonthChange={setDisplayedMonth}
      className="rounded-md border pt-2 pb-2"
      modifiers={{
        hasEvent: eventDates,
      }}
      modifiersClassNames={{
        hasEvent: 'has-event-dot',
      }}
    />
  );
}
