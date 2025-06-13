import {createFileRoute} from '@tanstack/react-router';
// import {SearchResponse} from "@/types/Search.ts";
import {useSearch} from "@/hooks/useSearch.ts";
import {SearchForm} from '@/components/forms/SearchFrom';
import {SearchRequest} from "@/types/Search.ts";
import {Section} from "@/components/section/Section.tsx";
import {Plus} from "lucide-react";
import {NotebookCard} from "@/components/cards/NotebookCard.tsx";
import { NoteCard } from '@/components/cards/NoteCard';
import {Events} from "@/components/calendar/Events.tsx";

export const Route = createFileRoute('/_authentificated/search/')({
    component: RouteComponent,
});

function RouteComponent() {
    const search = useSearch();
    const searchHandle = (data: SearchRequest) => {
        search.mutate({data})
    }

    return (
        <div>
            <SearchForm
                onSubmit={searchHandle}
                isSubmitting={search.isPending}
                submitText={'Search'}
            />

            {search.data?.notebooks && (
                <>
                    <Section title={'Notebooks'} Icon={Plus} type="notebook" />

                    <div className="flex flex-col gap-4">
                        {search.data?.notebooks.map(
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
                    <Section title={'Notes'} Icon={Plus} type="notebook" />

                    <div className="flex flex-col gap-4">
                        {search.data?.notes.map(
                            ({ id, title, tags, updatedAt, notebook}) => (
                                <NoteCard
                                    key={id}
                                    parentId={notebook.id}
                                    noteId={id}
                                    title={title}
                                    color={notebook.color}
                                    tags={tags}
                                    lastUpdated={updatedAt}
                                    titleOfParent={notebook.title ?? ''}
                                    content={''}
                                />
                            ),
                        )}
                    </div>
                </>
            )}

            {search.data?.events && (
                <>
                    <Section title={'Events'} Icon={Plus} type="event" />
                    <Events events={search.data?.events} />
                </>
            )}
        </div>
    );
}
