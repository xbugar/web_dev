"use client"

import * as React from "react"
import { useNavigate } from "@tanstack/react-router"
import { Calendar } from "@/components/ui/calendar"
import { format, isToday, parseISO } from "date-fns";

export function CalendarMain({ selectedDay }: { selectedDay?: string }) {
  // const selectedFromParam = selectedDay ? parseISO(selectedDay) : new Date()
  const selectedFromParam = selectedDay === "today" ? new Date()  : selectedDay ? parseISO(selectedDay) : new Date();
  const [date, setDate] = React.useState<Date | undefined>(selectedFromParam)
  const navigate = useNavigate()

  const handleSelect = (selected: Date | undefined) => {
    if (selected) {
      setDate(selected)
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
      className="rounded-md border pt-2 pb-2"
    />
  )
}
