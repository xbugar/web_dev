import { createFileRoute } from '@tanstack/react-router';
import { NotebookCard } from '@/components/cards/NotebookCard';
import { useAllNotebooks } from '@/hooks/notebook/useAllNotebooks';
import { NotebookSection } from '@/components/section/NotebookSection';

export const Route = createFileRoute('/_authentificated/notebooks/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: notebooks } = useAllNotebooks();
  return (
    <div className="lg:h-[calc(100vh-1rem)] lg:overflow-hidden">
      <NotebookSection isPreview={false} />

      <div
        className="grid grid-cols-1 gap-4 lg:h-[calc(100vh-5rem)] lg:auto-rows-max lg:grid-cols-2 lg:overflow-y-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
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
    </div>
  );
}
