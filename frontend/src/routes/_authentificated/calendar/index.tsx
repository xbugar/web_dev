import { createFileRoute, Link } from '@tanstack/react-router';
import { CalendarMain } from '@/components/calendar/CalendarMain.tsx'
import { Button } from '@/components/ui/button.tsx';
import { ArrowRight } from "lucide-react";
import { EventCard } from "@/components/cards/EventCard.tsx";

export const Route = createFileRoute('/_authentificated/calendar/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <CalendarMain />
      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        <h2>Events and deadlines</h2>
        <Button variant="section">
          <Link to={"/events"}><ArrowRight /></Link>
        </Button>
      </div>
      <EventCard title={'Java vnitro'} description={'dfnsnf'} tag={{
        name: '!',
        color: 'red'
      }} date={'2025-06-15T00:11:42.470Z'} time={'20:00'} color={'red'} />
    </div>
  )
}
