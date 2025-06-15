import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function  Calendar({
                    className,
                    classNames,
                    showOutsideDays = true,
                    ...props
                  }: React.ComponentProps<typeof DayPicker>) {
  return (
    <div className="font-serif">
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("border-none", className)}
        classNames={{
          months: "grid grid-col-7 sm:flex-row gap-2 align-center",
          month: "flex flex-col gap-4 text-center ",
          caption: "flex justify-center pt-1 relative items-center w-full",
          caption_label: "text-lg font-medium",
          nav: "absolute flex items-center justify-between",
          nav_button: cn(
            Button({ variant: "outline" }),
            "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "right-0",
          table: "w-full border-collapse table-fixed h-[18rem]",
          head_row: "",
          head_cell:
            "text-black dark:text-white rounded-md w-8 font-normal",
          row: "w-full mt-2",
          day: cn(
            "relative p-2 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-none [&:has([aria-selected].day-range-end)]:rounded-r-md",
            props.mode === "range"
              ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
              : "[&:has([aria-selected])]:rounded-md"
          ),
          day_button: cn(
            Button({ variant: "ghost" }),
            "size-9 p-0 font-normal aria-selected:opacity-100 rounded cursor-pointer ",
          ),
          day_range_start:
            "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
          day_range_end:
            "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
          selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded",
          today: cn(
            "rounded",
            "[&:not([aria-selected])]:bg-white-secondary [&:not([aria-selected])]:dark:bg-black-secondary",
            "[&:not([aria-selected])]:text-black [&:not([aria-selected])]:dark:text-white"
          ),
          outside:
            "day-outside text-muted-foreground aria-selected:text-muted-foreground",
          disabled: "text-muted-foreground opacity-50",
          range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          hidden: "invisible",
          ...classNames,
        }}
        components={{
          Chevron: (props) => {
            // eslint-disable-next-line react/prop-types
            if (props.orientation === "left") {
              return <ChevronLeftIcon {...props} />;
            }
            return <ChevronRightIcon {...props} />;
          },
        }}
        {...props}
      />
    </div>
  )
}

export { Calendar }
