import { Link } from '@tanstack/react-router';

export type CalendarCellProps = {
  fullDate: string;
  dayOfTheWeek: string;
  day: string;
  month: string;
  event: boolean;
  isToday?: boolean;
};

export const CalendarCell = ({
  fullDate,
  dayOfTheWeek,
  day,
  month,
  event,
  isToday = false,
}: CalendarCellProps) => {
  const date = isToday ? 'today' : fullDate;
  return (
    <Link to={`/calendar/${date}`}>
      <div
        className={`flex h-[5rem] w-full flex-col items-center justify-between rounded-md pt-2 pr-3 pb-2.5 pl-3 font-serif ${isToday ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white-secondary dark:bg-black-secondary'} `}
      >
        <div className="text-xs">{dayOfTheWeek}</div>
        <div className="font-bold">{day}</div>
        <div className="text-xs">{month}</div>
        {event && <div>.</div>}
      </div>{' '}
    </Link>
  );
};
