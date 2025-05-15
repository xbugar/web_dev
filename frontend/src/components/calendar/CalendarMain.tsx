"use client"

import * as React from "react"
import { useNavigate } from "@tanstack/react-router"
import { Calendar } from "@/components/ui/calendar"

export function CalendarMain() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const navigate = useNavigate()

  const handleSelect = (selected: Date | undefined) => {
    if (selected) {
      setDate(selected)
      const formatted = selected.toISOString().split('T')[0] // e.g. 2025-06-15
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
      className="rounded-md border"
    />
  )
}
