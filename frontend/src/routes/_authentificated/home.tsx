import { createFileRoute, Link } from '@tanstack/react-router';
import { CalendarSmall } from '@/components/calendar/CalendarSmall.tsx';
import { Events } from '@/components/calendar/Events.tsx';
import { ArrowRight } from 'lucide-react';
import { useUserNotebooks } from '@/hooks/useUserNotebooks.ts';
import { NotebookCard } from '@/components/cards/NotebookCard.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useAllEvents } from "@/hooks/useAllEvents.ts";

export const Route = createFileRoute('/_authentificated/home')({
  component: RouteComponent,
});


function RouteComponent() {
  const { data: notebooks } = useUserNotebooks();
  const { data: events } = useAllEvents();

  return (
    <div>
      <CalendarSmall />

      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        <h2>Upcoming events</h2>
        <Button variant="section">
          <Link to={"/events"}><ArrowRight /></Link>
        </Button>
      </div>

      <Events events={events?.slice(0, 3)} />

      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        <h2>Recent notebooks</h2>
        <Button variant="section">
          <Link to={'/notebooks'}>
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {notebooks &&
          notebooks
            .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
            .slice(0, 3)
            .map(({ id, title, description, iconName, color, noteCount, tags, updatedAt }) => (
              <NotebookCard
                key={id}
                id={id}
                title={title}
                description={description}
                iconName={iconName}
                color={color}
                noteCount={noteCount}
                tags={tags}
                lastUpdated={updatedAt}
              />
            ))}
      </div>
    </div>
  );
}
