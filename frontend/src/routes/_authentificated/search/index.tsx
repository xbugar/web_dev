import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useSearch } from '@tanstack/react-router'
import { z } from 'zod'
import { Separator } from '@/components/ui/separator';
import { NotebookCard } from '@/components/cards/NotebookCard.tsx';
import { GenericSection } from '@/components/section/GenericSection';
import { Events } from '@/components/calendar/Events';
import { NoteCard } from '@/components/cards/NoteCard';
import { SearchForm } from "@/components/forms/SearchFrom.tsx";
import { SearchRequest } from "@/types/search.ts";
import { useFilter } from "@/hooks/useSearch.ts";
import { FlashdeckCard } from "@/components/cards/FlashdeckCard.tsx";
import { Notebook } from "@/types/notebook.ts";
import { Note } from "@/types/note.ts";
import { Flashdeck } from "@/types/flashdeck.ts";

export const Route = createFileRoute('/_authentificated/search/')({
  component: SearchPage,
  validateSearch: z.object({
    q: z.string().min(1).optional(),
    type: z.array(z.enum(["notes", "notebooks", "events", "decks"])).optional(),
  }),
})


function SearchPage() {
  const searchRequest = useSearch({
    from: '/_authentificated/search/'
  });

  const {data, isLoading} = useFilter(searchRequest);


  const router = useRouter();
  const searchHandle = (values: SearchRequest) => {
    router.navigate({
      to: '/search',
      search: {...values},
      replace: false
    });
  };


  return (
    <div>
      <SearchForm onSubmit={searchHandle} isSubmitting={isLoading} submitText={'Search'}
                  initialValues={searchRequest}/>
      <Separator className="my-4"/>

      {data?.notebooks && (
        <>
          <GenericSection title={'Notebooks'}/>
          <div
            className="grid grid-cols-1 gap-4 lg:h-[calc(100vh-5rem)] lg:auto-rows-max lg:grid-cols-2 lg:overflow-y-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {data?.notebooks &&
              data.notebooks
                .map(({id, title, description, iconName, color, noteCount, tags, updatedAt} : Notebook) => (
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
          <Separator className="my-4"/>
        </>
      )}

      {data?.notes && (
        <>
          <GenericSection title={'Notes'}/>

          <div
            className="grid grid-cols-1 gap-4 lg:h-[calc(100vh-5rem)] lg:auto-rows-max lg:grid-cols-2 lg:overflow-y-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {data.notes.length != 0 ? (
              data.notes.map(({id, title, tags, notebook, updatedAt} : Note) => (
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
          <Separator className="my-4"/>
        </>
      )}

      {data?.decks && (
        <>
          <GenericSection title={'Decks'}/>

          <div
            className="grid grid-cols-1 gap-4 lg:h-[calc(100vh-5rem)] lg:auto-rows-max lg:grid-cols-2 lg:overflow-y-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {data.decks.map(({id, title, description, color, flashCardsCount, tags, updatedAt} : Flashdeck) => (
              <FlashdeckCard
                key={id}
                id={id}
                title={title}
                description={description}
                color={color}
                flashCardsCount={flashCardsCount}
                tags={tags}
                lastUpdated={updatedAt}
              />
            ))}
          </div>
        </>
      )}

      {data?.events && (
        <>
          <GenericSection title={'Events'}/>
          <Events events={data.events}/>
          <Separator className="my-4"/>
        </>
      )}
    </div>
  );
}

