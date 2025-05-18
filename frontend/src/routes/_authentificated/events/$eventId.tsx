import { createFileRoute } from '@tanstack/react-router'
import { Dropdown } from "@/components/cards/Dropdown.tsx";
import { useGetEventById } from "@/hooks/useGetEventById.ts";
import { format } from "date-fns";

export const Route = createFileRoute('/_authentificated/events/$eventId')({
  component: RouteComponent,
})
//
// const mockEvents: EventType[] = [
//   {
//     eventId: "1",
//     title: "Project Kickoff",
//     description: "Initial meeting with the team.",
//     tags: [
//       { id:"1", name: "Work", color: "blue" },
//       { id:"2", name: "Meeting", color: "green" },
//     ],
//     timeFrom: "2025-05-15T10:00:00.000Z",
//     timeTo: "2025-05-15T11:00:00.000Z",
//   },
//   {
//     eventId: "2",
//     title: "Design Review",
//     description: "Review UI designs with stakeholders.",
//     tags: [{ id:"3", name: "Design", color: "purple" }],
//     timeFrom: "2025-05-15T14:00:00.000Z",
//     timeTo: "2025-05-16T15:30:00.000Z",
//   },
//   {
//     eventId: "3",
//     title: "Dev All-Day Workshop",
//     description: "Deep dive into backend architecture.",
//     tags: [{ id:"4", name: "Workshop", color: "yellow" }],
//     timeFrom: "2025-04-17T08:00:00.000Z",
//     timeTo: "2025-06-18T18:00:00.000Z",
//   },
// ];

function RouteComponent() {
  const { eventId } = Route.useParams();
  const { data: event } = useGetEventById(eventId);

  return (
    <div>
      {event &&
          <div>
            <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
                <h2>{event.title}</h2>
                <Dropdown
                    notebookId={''}
                    noteId={''}
                    eventId={eventId}
                    data={{
                      title: event.title,
                      description: event.description,
                      timeFrom: event.timeFrom,
                      timeTo: event.timeTo,
                      tags: event.tags
                    }}
                    type={'event'}
                />
            </div>
                <div>
                  From {format(new Date(event.timeFrom), "HH:mm EEE, dd MMM yyyy")} <br />
                  To {format(new Date(event.timeTo), "HH:mm EEE, dd MMM yyyy")}
                </div>
                <div className="mt-5 border-t-2">
                  <h3> Description </h3>
                  {event.description}
                </div>
          </div>
      }
    </div>
  )
}
