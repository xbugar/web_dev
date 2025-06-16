import { createFileRoute } from '@tanstack/react-router';
// import {SearchResponse} from "@/types/Search.ts";
import { useSearch } from '@/hooks/useSearch.ts';
import { SearchForm } from '@/components/forms/SearchFrom';
import { SearchRequest } from '@/types/search';
import { NotebookCard } from '@/components/cards/NotebookCard.tsx';
import { Separator } from '@/components/ui/separator';
import { GenericSection } from '@/components/section/GenericSection';
import { Events } from '@/components/calendar/Events';
import { NoteCard } from '@/components/cards/NoteCard';

export const Route = createFileRoute('/_authentificated/search/')({
  component: RouteComponent,
});

function RouteComponent() {
  const search = useSearch();
  const searchHandle = (data: SearchRequest) => {
    search.mutate({ data });
  };

  return (
    <div>
      <SearchForm onSubmit={searchHandle} isSubmitting={search.isPending} submitText={'Search'} />

      <Separator className="my-4" />

      {search.data?.notebooks && (
        <>
          <GenericSection title={'Notebooks'} />

          <div
            className="grid grid-cols-1 gap-4 lg:h-[calc(100vh-5rem)] lg:auto-rows-max lg:grid-cols-2 lg:overflow-y-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {search.data?.notebooks &&
              search.data?.notebooks.map(
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
      )}

      {search.data?.notes && (
        <>
          <GenericSection title={'Notes'} />

          <div
            className="grid grid-cols-1 gap-4 lg:h-[calc(100vh-5rem)] lg:auto-rows-max lg:grid-cols-2 lg:overflow-y-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {search.data?.notes.length != 0 ? (
              search.data?.notes.map(({ id, title, tags, notebook, updatedAt }) => (
                <NoteCard
                  key={id}
                  id={id}
                  title={title}
                  tags={tags}
                  notebook={{
                    id: notebook.id,
                    title: notebook.title,
                    color: notebook.color,
                  }}
                  lastUpdated={updatedAt}
                />
              ))
            ) : (
              <div className="flex w-full items-center justify-center">
                <p className="text-muted-foreground mb-4 text-lg italic">No notes...</p>
              </div>
            )}
          </div>
        </>
      )}

      {search.data?.events && (
        <>
          <GenericSection title={'Events'} />
          <Events events={search.data?.events} />
        </>
      )}
    </div>
  );
}
