import {createFileRoute} from '@tanstack/react-router';
// import {SearchResponse} from "@/types/Search.ts";
import {useSearch} from "@/hooks/useSearch.ts";
import {SearchForm} from '@/components/forms/SearchFrom';
import {SearchRequest} from "@/types/Search.ts";
import {Section} from "@/components/section/Section.tsx";
import {Plus} from "lucide-react";
import {NotebookCard} from "@/components/cards/NotebookCard.tsx";

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
            {/*{search.data?.events && (*/}
            {/*    */}
            {/*)}*/}
        </div>
    );
}
