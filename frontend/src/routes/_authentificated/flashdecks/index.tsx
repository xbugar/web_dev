import { createFileRoute } from '@tanstack/react-router';
import { useAllFlashdecks } from '@/hooks/flashdeck/useAllFlashdecks';
import { FlashdeckSection } from '@/components/section/FlashdeckSection';
import { FlashdeckCard } from '@/components/cards/FlashdeckCard';
import { ContainerLoading } from '@/components/loading/ContainerLoading';
import { EmptyState } from "@/components/cards/EmptyState.tsx";

export const Route = createFileRoute('/_authentificated/flashdecks/')({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    data: flashdecks,
    isPending: isPendingFlashdecks,
    isError: isErrorFlashdecks,
    error: errorFlashdecks,
  } = useAllFlashdecks();

  if (isPendingFlashdecks) {
    return <ContainerLoading />;
  }

  if (isErrorFlashdecks) {
    return <div>Error: {errorFlashdecks.message}</div>;
  }
  return (

    <div className="lg:h-[calc(100vh-1rem)] lg:overflow-hidden">
      <FlashdeckSection isPreview={false} />

      <div
        className="grid grid-cols-1 gap-4 lg:h-[calc(100vh-5rem)] lg:auto-rows-max lg:overflow-y-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {flashdecks && flashdecks.length > 0 ? (
            flashdecks.map(({ id, title, description, color, flashCardsCount, tags, updatedAt }) => (
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
            ))
        ) : (
          <EmptyState title={'No flashdecks'} message={'Create a new flashdeck.'} />
        )}
      </div>
    </div>
  );
}
