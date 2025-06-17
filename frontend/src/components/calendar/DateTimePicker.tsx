import * as React from 'react';
import { format, startOfDay } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/forms/Popover';
import { cn } from '@/lib/utils.ts';

type DateTimePickerProps = {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  dateFrom?: Date;
};

export function DateTimePicker({ dateFrom, date, setDate }: DateTimePickerProps) {
  const formattedDate = date ? format(date, 'PPP') : 'Pick a date';
  const timeValue = date ? format(date, 'HH:mm') : '';

  const [tempTime, setTempTime] = React.useState(timeValue);

  React.useEffect(() => {
    setTempTime(timeValue);
  }, [timeValue]);

  function handleDateSelect(newDate: Date | undefined) {
    if (!newDate) return setDate(undefined);

    const hours = date?.getHours() ?? 0;
    const minutes = date?.getMinutes() ?? 0;

    const updated = new Date(newDate);
    updated.setHours(hours, minutes, 0, 0);

    if (
      dateFrom &&
      startOfDay(updated).getTime() === startOfDay(dateFrom).getTime() &&
      updated <= dateFrom
    ) {
      setDate(new Date(dateFrom));
      setTempTime(format(dateFrom, 'HH:mm'));
    } else {
      setDate(updated);
      setTempTime(format(updated, 'HH:mm'));
    }
  }

  function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTempTime(e.target.value);
  }

  function handleTimeBlur() {
    if (!tempTime) return;

    const [hoursStr, minutesStr] = tempTime.split(':');
    const hours = Number(hoursStr);
    const minutes = Number(minutesStr);
    if (isNaN(hours) || isNaN(minutes)) return;

    const baseDate = date ?? new Date();
    const updated = new Date(baseDate);
    updated.setHours(hours, minutes, 0, 0);

    if (
      dateFrom &&
      startOfDay(updated).getTime() === startOfDay(dateFrom).getTime() &&
      updated <= dateFrom
    ) {
      setDate(new Date(dateFrom));
      setTempTime(format(dateFrom, 'HH:mm'));
    } else {
      setDate(updated);
      setTempTime(format(updated, 'HH:mm'));
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'form'}
            className={cn('bg-white-secondary dark:bg-black-secondary mb-2')}
          >
            {formattedDate}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 dark:bg-black">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            required
            disabled={day => (dateFrom ? startOfDay(day) < startOfDay(dateFrom) : false)}
          />
        </PopoverContent>
      </Popover>

      <input
        type="time"
        value={tempTime}
        onChange={handleTimeChange}
        onBlur={handleTimeBlur}
        className="font-sans-serif bg-white-secondary dark:bg-black-secondary mb-2 rounded p-2 text-sm"
      />
    </div>
  );
}
