import { Section } from '@/components/section/Section';
import { createFileRoute } from '@tanstack/react-router';

import { Plus } from 'lucide-react';

import { NotebookCard } from '@/components/cards/NotebookCard.tsx';
import { useUserNotebooks } from '@/hooks/useUserNotebooks.ts';

export const Route = createFileRoute('/_authentificated/notebooks/')({
  component: RouteComponent,
});

function RouteComponent() {
  const userId = 'ce3f2263-f59a-41df-9a3d-aa83e7d2d437';
  const { data: notebooks } = useUserNotebooks();
  return (
    <>
      <Section title={'Notebooks'} Icon={Plus} id={userId} type="notebook" />

      <div className="flex flex-col gap-4">
        {notebooks &&
          notebooks.map(
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
    </>
  );
}
