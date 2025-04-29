import { Section } from '@/components/section/Section';
import { createFileRoute } from '@tanstack/react-router';

import { Plus } from 'lucide-react';

import { NotebookCard } from '@/components/cards/NotebookCard.tsx';
import { useUserNotebooks } from '@/hooks/useUserNotebooks.ts';

export const Route = createFileRoute('/_authentificated/notebooks/')({
  component: RouteComponent,
});

function RouteComponent() {
  const userId = '02a49ec7-6f05-448e-92de-f0fad76fb668';
  const { data: notebooks } = useUserNotebooks(userId);
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
