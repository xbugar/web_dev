import { CalendarSmall } from "@/components/calendar/CalendarSmall.tsx";
import { Events } from "@/components/calendar/Events.tsx";


export function Homepage() {

  return (
    <div className="flex-column justify-center relative p-10 pl-5 pr-5">
      <div className="flex items-center justify-center rounded-md justify-start">
        <CalendarSmall />
        <Events></Events>

      </div>



    </div>

  )

}