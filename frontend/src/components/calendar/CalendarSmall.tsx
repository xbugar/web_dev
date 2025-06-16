'use client';
import { startOfWeek, addDays, format, isSameDay } from 'date-fns';
import { CalendarCell } from '@/components/calendar/CalendarCell';

export function CalendarSmall() {
  const today = new Date();
  const weekStart = startOfWeek(today, { weekStartsOn: 1 }); // Monday

  const daysOfWeek = Array.from({ length: 7 }).map((_, i) => addDays(weekStart, i));

  return (
    <div className="grid w-full grid-cols-7 gap-2">
      {daysOfWeek.map(day => (
        <CalendarCell
          key={day.toISOString()}
          fullDate={format(day, 'yyyy-MM-dd')}
          dayOfTheWeek={format(day, 'EEE')}
          day={format(day, 'd')}
          month={format(day, 'MMM')}
          event={false}
          isToday={isSameDay(day, today)}
        />
      ))}
    </div>
  );
}
