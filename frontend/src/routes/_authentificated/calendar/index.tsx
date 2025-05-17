import { createFileRoute } from '@tanstack/react-router';
import { CalendarMain } from '@/components/calendar/CalendarMain.tsx'
import { EventType } from "@/types/EventType.ts";
import { Events } from "@/components/calendar/Events.tsx";
export const Route = createFileRoute('/_authentificated/calendar/')({
  component: RouteComponent,
});

const mockEvents: EventType[] = [
  {
    id: "1",
    title: "Project Kickoff",
    description: "Initial meeting with the team.",
    tags: [
      { id:"1", name: "Work", color: "blue" },
      { id:"2", name: "Meeting", color: "green" },
    ],
    timeFrom: "2025-05-15T10:00:00.000Z",
    timeTo: "2025-05-15T11:00:00.000Z",
  },
  {
    id: "2",
    title: "Design Review",
    description: "Review UI designs with stakeholders.",
    tags: [{ id:"3", name: "Design", color: "purple" }],
    timeFrom: "2025-05-15T14:00:00.000Z",
    timeTo: "2025-05-16T15:30:00.000Z",
  },
  {
    id: "3",
    title: "Dev All-Day Workshop",
    description: "Deep dive into backend architecture.",
    tags: [{ id:"4", name: "Workshop", color: "yellow" }],
    timeFrom: "2025-04-17T08:00:00.000Z",
    timeTo: "2025-06-18T18:00:00.000Z",
  },
];


function RouteComponent() {
  const today = new Date();
  return (
    <div className="pt-2 flex flex-col gap-2">
      <CalendarMain />
      <Events events={mockEvents} selectedDay={today} />
    </div>
  )
}
