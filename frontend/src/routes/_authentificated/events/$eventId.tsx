import { createFileRoute } from '@tanstack/react-router'
import { Dropdown } from "@/components/cards/Dropdown.tsx";
import { EventType } from "@/types/EventType.ts";

export const Route = createFileRoute('/_authentificated/events/$eventId')({
  component: RouteComponent,
})

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
  // const { eventId } = Route.useParams();

  return (
    <div>
      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        <h2>Tu bude Event Title </h2>
        {/*<Button variant="section">*/}
        {/*  <Link to={"/events"}><Pencil /></Link>*/}
        {/*</Button>*/}
        <Dropdown
          notebookId={""}
          noteId={""}
          eventId={mockEvents[0].id}
          data={mockEvents[0]}
          type={'event'}
        />
      </div>
      <div>
        Tu bude datum od <br/>
        Tu bude datum do <br/>
        Tu bude cas od dnes <br />
        Tu budu tagy
      </div>
      <div className="pt-5">
        tu bude DESCRIPTION
      </div>
    </div>
  )
}
