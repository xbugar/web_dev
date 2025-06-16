import { createFileRoute } from '@tanstack/react-router';
import { useAllEvents } from '@/hooks/event/useAllEvents';
import { Events } from '@/components/calendar/Events.tsx';
import { EventSection } from '@/components/section/EventSection';

export const Route = createFileRoute('/_authentificated/events/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: events } = useAllEvents();

  const day = new Date();
  day.setMinutes(0);

  return (
    <>
      <EventSection />
      <Events events={events} />
    </>
  );
}
