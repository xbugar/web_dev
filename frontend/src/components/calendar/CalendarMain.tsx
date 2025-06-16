"use client"

import * as React from "react"
import { useNavigate } from "@tanstack/react-router"
import { Calendar } from "@/components/ui/calendar"
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isToday,
  parseISO,
  startOfMonth,
  startOfWeek
} from "date-fns";
import { EventType } from "@/types/EventType.ts";
import { useRangeEvents } from "@/hooks/useRangeEvents.ts";
import { useMemo } from "react";

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

export function CalendarMain({ selectedDay }: { selectedDay: string }) {
  const selectedFromParam = React.useMemo(() => {
    return selectedDay === "today" ? new Date() : parseISO(selectedDay);
  }, [selectedDay]);

  const [date, setDate] = React.useState<Date | undefined>(selectedFromParam)
  const navigate = useNavigate()

  React.useEffect(() => {
    setDate(selectedFromParam);
  }, [selectedFromParam]);

  const [displayedMonth, setDisplayedMonth] = React.useState(() =>
    startOfMonth(selectedFromParam)
  );

  const start = useMemo(() => startOfWeek(startOfMonth(displayedMonth)), [displayedMonth]);
  const end = useMemo(() => endOfWeek(endOfMonth(displayedMonth)), [displayedMonth]);

  const { data: eventss } = useRangeEvents(start.toISOString(), end.toISOString());
  const eventDatess = eventss ? getEventDates(eventss) : [];



  const handleSelect = (selected: Date | undefined) => {
    if (selected) {
      setDate(selected)

      if (selected.getMonth() !== displayedMonth.getMonth() || selected.getFullYear() !== displayedMonth.getFullYear()) {
        setDisplayedMonth(startOfMonth(selected));
      }

      const formatted = isToday(selected) ? "today" : format(selected, "yyyy-MM-dd");
      navigate({
        to: "/calendar/$calendarDay",
        params: { calendarDay: formatted },
      })
    }
  }

  return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleSelect}
        month={displayedMonth}
        onMonthChange={(newMonth) => setDisplayedMonth(startOfMonth(newMonth))}
        className="rounded-md border pt-2 pb-2"
        modifiers={{
          hasEvent: eventDatess,
        }}
        modifiersClassNames={{
          hasEvent: "has-event-dot",
        }}
      />
  )
}
