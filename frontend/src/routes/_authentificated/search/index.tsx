import {createFileRoute, useRouter} from '@tanstack/react-router'
import {useSearch} from '@tanstack/react-router'
import {z} from 'zod'
import {Separator} from '@/components/ui/separator';
import {NotebookCard} from '@/components/cards/NotebookCard.tsx';
import {GenericSection} from '@/components/section/GenericSection';
import {Events} from '@/components/calendar/Events';
import {NoteCard} from '@/components/cards/NoteCard';
import {SearchForm} from "@/components/forms/SearchFrom.tsx";
import {SearchRequest} from "@/types/Search.ts";
import {useSearchAndrej} from "@/hooks/useSearch.ts";

export const Route = createFileRoute('/_authentificated/search/')({
    component: SearchPage,
    validateSearch: z.object({
        q: z.string().min(1).optional(),
    }),
})


function SearchPage() {
    const searchRequest = useSearch({
        from: '/_authentificated/search/'
    });

    const {data, isLoading} = useSearchAndrej(searchRequest);


    const router = useRouter();
    const searchHandle = (values: SearchRequest) => {
        router.navigate({
            to: '/search',
            search: { q: values.q },
            replace: false
        });
    };


    return (
        <div>
            <SearchForm onSubmit={searchHandle} isSubmitting={isLoading} submitText={'Search'} initialValues={searchRequest} />
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
                            data.notebooks.map(
                                ({id, title, description, iconName, color, noteCount, tags, updatedAt}) => (
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
                            data.notes.map(({id, title, tags, notebook, updatedAt}) => (
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

// function SomeComponent() {
//     const router = useRouter()
//
//     const goToSearch = () => {
//         router.navigate({
//             to: '/search',
//             search: { query: 'react', page: 2 },
//         })
//     }
//
//     return <button onClick={goToSearch}>Search for React</button>
