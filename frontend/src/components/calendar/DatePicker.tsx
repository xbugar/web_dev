import * as React from "react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/forms/Popover.tsx"

type DatePickerProps = {
  value?: Date | null
  onChange?: (date: Date | undefined) => void
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  // Fallback internal state if no value provided (optional)
  const [internalDate, setInternalDate] = React.useState<Date | null>(null)

  const selectedDate = value ?? internalDate

  const handleSelect = (date: Date | undefined) => {
    if (onChange) {
      onChange(date)
    } else {
      setInternalDate(date ?? null)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"form"}
          className={cn(
            "bg-white-secondary dark:bg-black-secondary mb-2",
            !selectedDate && "text-muted-foreground"
          )}
        >
          {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDate ?? undefined}
          onSelect={handleSelect}
          required
        />
      </PopoverContent>
    </Popover>
  )
}
