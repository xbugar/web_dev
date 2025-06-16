import { createFileRoute } from '@tanstack/react-router';
import { EventDropdown } from '@/components/dropdown/EventDropdown';
import { useGetEventById } from '@/hooks/event/useGetEventById';
import { format } from 'date-fns';
import { Tag } from '@/components/cards/Tag.tsx';
import { AccentColor } from '@/components/cards/cardColors';
import { ContainerLoading } from '@/components/loading/ContainerLoading';
import { EventCardProps } from '@/types/event';

export const Route = createFileRoute('/_authentificated/events/$eventId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { eventId } = Route.useParams();

  const {
    data: currentEvent,
    isPending: isPendingEvent,
    isError: isErrorEvent,
    error: errorEvent,
  } = useGetEventById(eventId);

  if (isPendingEvent) {
    return <ContainerLoading />;
  }

  if (isErrorEvent) {
    return <div>Error: {errorEvent.message}</div>;
  }

  const eventCardProps: EventCardProps = {
    id: currentEvent.id,
    title: currentEvent.title,
    description: currentEvent.description,
    tags: currentEvent.tags,
    from: currentEvent.timeFrom,
    to: currentEvent.timeTo,
    repeat: currentEvent.repeat,
  };

  return (
    <div>
      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        <h2>{currentEvent.title}</h2>
        <EventDropdown {...eventCardProps} />
      </div>
      <div>
        From {format(new Date(currentEvent.timeFrom), 'HH:mm EEE, dd MMM yyyy')} <br />
        To {format(new Date(currentEvent.timeTo), 'HH:mm EEE, dd MMM yyyy')}
      </div>
      <div>
        <div className="flex gap-2 pt-3">
          {currentEvent.tags.map((tag, index) => (
            <Tag name={tag.name} color={tag.color as AccentColor} key={index}></Tag>
          ))}
        </div>
      </div>
      <div className="mt-5 border-t-2">
        <h3> Description </h3>
        {currentEvent.description}
      </div>
    </div>
  );
}
