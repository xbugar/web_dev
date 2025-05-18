import { createFileRoute, Link } from '@tanstack/react-router';
import { CalendarSmall } from '@/components/calendar/CalendarSmall.tsx';
import { Events } from '@/components/calendar/Events.tsx';
import { EventType } from '@/types/EventType.ts';
import { ArrowRight } from 'lucide-react';
import { useUserNotebooks } from '@/hooks/useUserNotebooks.ts';
import { NotebookCard } from '@/components/cards/NotebookCard.tsx';
import { Button } from '@/components/ui/button.tsx';

export const Route = createFileRoute('/_authentificated/home')({
  component: RouteComponent,
});

const mockEvents: EventType[] = [
  {
    id: '1',
    title: 'Project Kickoff',
    description: 'Initial meeting with the team.',
    tags: [
      { id: '1', name: 'Work', color: 'blue' },
      { id: '2', name: 'Meeting', color: 'green' },
    ],
    timeFrom: '2025-06-15T10:00:00.000Z',
    timeTo: '2025-06-16T11:00:00.000Z',
  },
  {
    id: '2',
    title: 'Design Review',
    description: 'Review UI designs with stakeholders.',
    tags: [{ id: '3', name: 'Design', color: 'purple' }],
    timeFrom: '2025-06-16T14:00:00.000Z',
    timeTo: '2025-06-16T15:30:00.000Z',
  },
  {
    id: '3',
    title: 'Dev All-Day Workshop',
    description: 'Deep dive into backend architecture.',
    tags: [{ id: '4', name: 'Workshop', color: 'yellow' }],
    timeFrom: '2025-06-17T08:00:00.000Z',
    timeTo: '2025-06-18T18:00:00.000Z',
  },
];

function RouteComponent() {
  const { data: notebooks } = useUserNotebooks();

  return (
    <div>
      <CalendarSmall />

      <Events events={mockEvents.slice(0, 3)} />

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
