import { Section } from '@/components/section/Section';
import { createFileRoute } from '@tanstack/react-router';

import { Plus } from 'lucide-react';

import { NotebookCard } from '@/components/cards/NotebookCard.tsx';
import { useUserNotebooks } from '@/hooks/useUserNotebooks.ts';

export const Route = createFileRoute('/_authentificated/notebooks/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: notebooks } = useUserNotebooks();
  return (
    <>
      <Section title={'Notebooks'} Icon={Plus} type="notebook" />

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
