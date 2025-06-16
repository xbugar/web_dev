import { createFileRoute } from '@tanstack/react-router';
import { NotebookCard } from '@/components/cards/NotebookCard';
import { useAllNotebooks } from '@/hooks/notebook/useAllNotebooks';
import { NotebookSection } from '@/components/section/NotebookSection';
import { ContainerLoading } from '@/components/loading/ContainerLoading';
import { EmptyState } from '@/components/cards/EmptyState.tsx';

export const Route = createFileRoute('/_authentificated/notebooks/')({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    data: notebooks,
    isPending: isPendingNotebooks,
    isError: isErrorNotebooks,
    error: errorNotebooks,
  } = useAllNotebooks();

  if (isPendingNotebooks) {
    return <ContainerLoading />;
  }

  if (isErrorNotebooks) {
    return <div>Error: {errorNotebooks.message}</div>;
  }

  return (
    <div className="lg:h-[calc(100vh-1rem)] lg:overflow-hidden">
      <NotebookSection isPreview={false} />
      <div
        className="columns-1 gap-2 lg:columns-2 lg:h-[calc(100vh-5rem)] lg:overflow-y-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {notebooks ? (
          notebooks
            .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
            .map(({ id, title, description, iconName, color, noteCount, tags, updatedAt }) => (
              <div key={id} className="break-inside-avoid mb-4 px-1">
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
              </div>
            ))
        ) : (
          <EmptyState title={'No notebooks'} message={'Create a new notebook.'} />
        )}
      </div>
    </div>
  );
}
