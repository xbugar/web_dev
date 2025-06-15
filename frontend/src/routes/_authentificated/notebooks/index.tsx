import { Section } from '@/components/section/Section';
import { createFileRoute } from '@tanstack/react-router';

import { Plus } from 'lucide-react';

import { NotebookCard } from '@/components/cards/NotebookCard.tsx';
import { useUserNotebooks } from '@/hooks/useUserNotebooks.ts';
import { EmptyState } from "@/components/cards/EmptyState.tsx";

export const Route = createFileRoute('/_authentificated/notebooks/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: notebooks } = useUserNotebooks();
  return (
    <div className="lg:h-[calc(100vh-1rem)] lg:overflow-hidden">
      <Section title={'Notebooks'} Icon={Plus} type="notebook" />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:overflow-y-auto lg:h-[calc(100vh-5rem)] lg:auto-rows-max"
           style={{
             scrollbarWidth: 'none',
             msOverflowStyle: 'none'
           }}>
        {notebooks ? (
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
          )) : (
            <EmptyState
              title={'No notebooks'}
              message={'Create a new notebook.'}
            />
        )}
      </div>
    </div>
  );
}
