import { createFileRoute, Link } from '@tanstack/react-router';
import { CalendarSmall } from '@/components/calendar/CalendarSmall.tsx';
import { Events } from '@/components/calendar/Events.tsx';
import { ArrowRight } from 'lucide-react';
import { useUserNotebooks } from '@/hooks/useUserNotebooks.ts';
import { NotebookCard } from '@/components/cards/NotebookCard.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useAllEvents } from "@/hooks/useAllEvents.ts";
import { useIsDesktop } from "@/hooks/isDesktop.ts";

export const Route = createFileRoute('/_authentificated/home')({
  component: RouteComponent,
});


function RouteComponent() {
  const { data: notebooks } = useUserNotebooks();
  const { data: events } = useAllEvents();
  const isDesktop = useIsDesktop();

  if (isDesktop) {
    return (
      <div className="grid grid-cols-1 gap-4 justify-center p-5 h-screen overflow-hidden">
        <div className="flex-column items-center rounded-md">
          <CalendarSmall />

          <div className="mt-2 flex items-center justify-between py-1 font-serif text-2xl font-bold">
            <h2>Upcoming events</h2>
            <Button variant="section">
              <Link to={"/events"}><ArrowRight /></Link>
            </Button>
          </div>
          <Events events={events?.slice(0, 4)} homepageDesktop={true} />
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between py-2 font-serif text-2xl font-bold">
              <h2>Recent notebooks</h2>
              <Button variant="section">
                <Link to={'/notebooks'}>
                  <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="flex relative flex-col gap-4 pr-2 overflow-scroll hide-scrollbar">
              {notebooks &&
                notebooks
                  .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
                  .slice(0, 4)
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

          {/* Flashcards Section */}
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between py-2 font-serif text-2xl font-bold">
              <h2>Today&#39;s flashcards</h2>
              <Button variant="section">
                <Link to={'/flashcards'}>
                  <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className="overflow-y-auto pr-2 hide-scrollbar flex-grow">
              {/* Flashcards content here */}
            </div>
          </div>
        </div>
      </div>
    )
  }


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
