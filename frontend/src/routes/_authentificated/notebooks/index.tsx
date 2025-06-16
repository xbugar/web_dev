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
    <>
      <NotebookSection isPreview={false} />

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
