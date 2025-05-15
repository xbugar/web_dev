import { Link } from '@tanstack/react-router'

export type CalendarCellProps = {
  fullDate: string;
  dayOfTheWeek: string,
  day: string,
  month: string,
  event: boolean,
  isToday?: boolean,
}

export const CalendarCell = ({
                               fullDate,
                               dayOfTheWeek,
                               day,
                               month,
                               event,
                               isToday = false,
                             }: CalendarCellProps) => {
  console.log(fullDate);
  return (
    <Link to={`/calendar/${fullDate}`}><div className={`font-serif rounded-md flex h-[5rem] pt-2 pr-3 pl-3 pb-2.5 flex-col justify-between items-center
        ${isToday ? "bg-black text-white dark:bg-white dark:text-black" : "bg-white-secondary dark:bg-black-secondary"}
      `}>
      <div className="text-xs">{dayOfTheWeek}</div>
      <div className="font-bold">{day}</div>
      <div className="text-xs">{month}</div>
      {event && <div>.</div>}
    </div> </Link>
  )
}
