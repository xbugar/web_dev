import { createFileRoute } from '@tanstack/react-router'
import { useGetEventById } from "@/hooks/event/useGetEventById";
import { format } from "date-fns";
import { Tag } from "@/components/cards/Tag.tsx";
import { AccentColor } from "@/components/cards/cardColors.ts";
import { EventDropdown } from '@/components/dropdown/EventDropdown';

export const Route = createFileRoute('/_authentificated/events/$eventId')({
  component: RouteComponent,
})

// const repeatMap: Record<string, string> = {
//   "Every Day": "Repeats daily",
//   "Every Week": "Repeats weekly",
//   "Every Month": "Repeats monthly",
//   "Every Year": "Repeats yearly",
// };

function RouteComponent() {
  const { eventId } = Route.useParams();
  const { data: event } = useGetEventById(eventId);

  return (
    <div>
      {event &&
          <div>
            <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
                <h2>{event.title}</h2>
                <EventDropdown
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
                />
            </div>
                <div>
                  From {format(new Date(event.timeFrom), "HH:mm EEE, dd MMM yyyy")} <br />
                  To {format(new Date(event.timeTo), "HH:mm EEE, dd MMM yyyy")} <br />
                  {/*{event.repeat && repeatMap[event.repeat] && (*/}
                  {/*  <p>{repeatMap[event.repeat]}</p>*/}
                  {/*)}*/}
                </div>
                <div>
                    <div className="flex pt-3 gap-2">
                      {event.tags.map((tag, index) => (
                        <Tag name={tag.name} color={tag.color as AccentColor} key={index}></Tag>
                      ))}
                    </div>
                </div>
                <div className="mt-5 border-t-2">
                  <h3 className="font-semibold" > Description </h3>
                  {event.description}
                </div>
          </div>
      }
    </div>
  )
}
