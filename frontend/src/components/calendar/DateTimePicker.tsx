import * as React from "react"
import { format, startOfDay } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/forms/Popover"
import { cn } from "@/lib/utils.ts";

type DateTimePickerProps = {
  date: Date
  setDate: (date: Date | undefined) => void
  dateFrom?: Date
}

export function DateTimePicker({ dateFrom, date, setDate }: DateTimePickerProps) {
  const formattedDate = date ? format(date, "PPP") : "Pick a date"
  const timeValue = date ? date.toTimeString().slice(0, 5) : ""

  function handleDateSelect(newDate: Date | undefined) {
    if (!newDate) return setDate(undefined)

    if (date) {
      const updated = new Date(newDate)
      updated.setHours(date.getHours(), date.getMinutes())
      setDate(updated)
    } else {
      setDate(newDate)
    }
  }


  function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const time = e.target.value
    console.log(time)
    if (!time) return

    const [hours, minutes] = time.split(":").map(Number)
    if (!date) {
      const now = new Date()
      now.setHours(hours, minutes)
      setDate(now)
    } else {
      const updated = new Date(date)
      updated.setHours(hours, minutes)
      setDate(updated)
    }
  }


  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"form"}
            className={cn(
              "bg-white-secondary dark:bg-black-secondary mb-2",
            )}
          >
            {formattedDate}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={date} onSelect={handleDateSelect} required disabled={(day) => dateFrom ? startOfDay(day) < startOfDay(dateFrom) : false } />
        </PopoverContent>
      </Popover>

      <input
        type="time"
        value={timeValue}
        onChange={handleTimeChange}
        className="text-sm font-sans-serif p-2 rounded bg-white-secondary dark:bg-black-secondary mb-2" />
    </div>
  )
}
