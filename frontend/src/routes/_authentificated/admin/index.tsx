import { createFileRoute } from '@tanstack/react-router';

import { UserCard } from "@/components/cards/UserCard.tsx";

import { useAdminDashboard } from "@/hooks/admin/useAdminDashboard.ts";
import { GenericSection } from "@/components/section/GenericSection.tsx";

export const Route = createFileRoute('/_authentificated/admin/')({
  component: RouteComponent,
});

function RouteComponent() {
  const {data: users} = useAdminDashboard();
  return (
    <div className="lg:h-[calc(100vh-1rem)] lg:overflow-hidden">
      <GenericSection title={'Users'}/>
      <div className="flex flex-col gap-4 lg:overflow-y-auto lg:h-[calc(100vh-5rem)]"
           style={{
             scrollbarWidth: 'none',
             msOverflowStyle: 'none'
           }}>
        {users &&
          users
            .map(({id, email, notebookCount, eventCount, totalNotes, firstName, lastName, totalCards, deckCount}) => (
            <UserCard
              key={id}
              userId={id}
              title={`${firstName} ${lastName} | ${email}`}
              titleOfParent={`Notebooks: ${notebookCount} Notes: ${totalNotes} Events: ${eventCount} Decks: ${deckCount} Cards: ${totalCards}`}
              color={"black"}
            />
          ))}
      </div>
    </div>
  );
}
