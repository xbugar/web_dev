import { createFileRoute, Navigate } from '@tanstack/react-router';
// import { CalendarMain } from '@/components/calendar/CalendarMain.tsx'
// import { Events } from "@/components/calendar/Events.tsx";
// import { Plus } from "lucide-react";
// import { Section } from "@/components/section/Section.tsx";


export const Route = createFileRoute('/_authentificated/calendar/')({
  component: () => <Navigate to="/calendar/$calendarDay" params={{ calendarDay: "today" }} />,
});



// eslint-disable-next-line @typescript-eslint/no-unused-vars
// function RouteComponent() {
//   const today = new Date();
//   return (
//     <div className="pt-2 flex flex-col gap-2">
//       <CalendarMain selectedDay={"today"}/>
//       <Section title={'Events'} Icon={Plus} type="event" />
//       <Events events={} selectedDay={today} />
//     </div>
//   )
// }
