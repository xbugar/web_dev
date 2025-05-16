import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from "@/components/ui/button.tsx";
import { ArrowRight, Pencil } from "lucide-react";

export const Route = createFileRoute('/_authentificated/events/$eventId')({
  component: RouteComponent,
})

function RouteComponent() {
  // const { eventId } = Route.useParams();

  return (
    <div>
      <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
        <h2>Tu bude Event Title </h2>
        <Button variant="section">
          <Link to={"/events"}><Pencil /></Link>
        </Button>
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
