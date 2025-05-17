import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <div className="font-serif">
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn('border-none', className)}
        classNames={{
          months: 'flex flex-col sm:flex-row gap-2',
          month: 'flex flex-col gap-4',
          caption: 'flex justify-center pt-1 relative items-center w-full',
          caption_label: 'text-lg font-medium',
          nav: 'flex items-center gap-1',
          nav_button: cn(
            Button({ variant: 'outline' }),
            'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          ),
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'w-full border-collapse table-fixed h-[18rem]',
          head_row: '',
          head_cell: 'text-black dark:text-white rounded-md w-8 font-normal',
          row: 'w-full mt-2',
          cell: cn(
            'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-none [&:has([aria-selected].day-range-end)]:rounded-r-md',
            props.mode === 'range'
              ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
              : '[&:has([aria-selected])]:rounded-md',
          ),
          day: cn(
            Button({ variant: 'ghost' }),
            'size-9 p-0 font-normal aria-selected:opacity-100 rounded',
          ),
          day_range_start:
            'day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground',
          day_range_end:
            'day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground',
          day_selected:
            'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
          day_today: 'bg-accent text-accent-foreground rounded',
          day_outside: 'day-outside text-muted-foreground aria-selected:text-muted-foreground',
          day_disabled: 'text-muted-foreground opacity-50',
          day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
          day_hidden: 'invisible',
          ...classNames,
        }}
        components={{
          PreviousMonthButton: ({ ...props }) => (
            <button type="button" className={className} {...props}>
              <ChevronLeft className="size-4" />
            </button>
          ),
          NextMonthButton: ({ ...props }) => (
            <button type="button" className={className} {...props}>
              <ChevronRight className="size-4" />
            </button>
          ),
        }}
        {...props}
      />
    </div>
  );
}

export { Calendar };
