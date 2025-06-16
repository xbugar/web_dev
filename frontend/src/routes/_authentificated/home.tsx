import { createFileRoute, Link } from '@tanstack/react-router';
import { CalendarSmall } from '@/components/calendar/CalendarSmall.tsx';
import { Events } from '@/components/calendar/Events.tsx';
import { ArrowRight } from 'lucide-react';
import { useAllNotebooks } from '@/hooks/notebook/useAllNotebooks';
import { NotebookCard } from '@/components/cards/NotebookCard.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useAllEvents } from '@/hooks/event/useAllEvents';
import { useIsDesktop } from '@/hooks/isDesktop.ts';

export const Route = createFileRoute('/_authentificated/home')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: notebooks } = useAllNotebooks();
  const { data: events } = useAllEvents();
  const isDesktop = useIsDesktop();

  if (isDesktop) {
    return (
      <div className="col-auto flex h-screen flex-col justify-center overflow-hidden pt-5 pb-5">
        <div className="flex-column items-center rounded-md pb-10">
          <CalendarSmall />

          <div className="mt-2 flex items-center justify-between py-1 font-serif text-2xl font-bold">
            <h2>Upcoming events</h2>
            <Button variant="section">
              <Link to={'/events'}>
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <Events events={events?.slice(0, 4)} homepageDesktop={true} />
        </div>

        <div className="grid h-full w-full grid-cols-2 gap-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-between py-2 font-serif text-2xl font-bold">
              <h2>Recent notebooks</h2>
              <Button variant="section">
                <Link to={'/notebooks'}>
                  <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="hide-scrollbar flex h-48 flex-grow flex-col gap-4 overflow-y-auto pr-2">
              {notebooks &&
                notebooks
                  .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
                  .slice(0, 4)
                  .map(
                    ({ id, title, description, iconName, color, noteCount, tags, updatedAt }) => (
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
                    ),
                  )}
            </div>
          </div>

          {/* Flashcards Section */}
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between py-2 font-serif text-2xl font-bold">
              <h2>Today&#39;s flashcards</h2>
              <Button variant="section">
                <Link to={'/flashcards'}>
                  <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="hide-scrollbar flex h-48 flex-grow flex-col gap-4 overflow-y-auto pr-2">
              {/* Flashcards content here */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <CalendarSmall />

      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        <h2>Upcoming events</h2>
        <Button variant="section">
          <Link to={'/events'}>
            <ArrowRight />
          </Link>
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
