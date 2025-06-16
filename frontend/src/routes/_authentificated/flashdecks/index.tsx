import { createFileRoute } from '@tanstack/react-router';
import { useAllFlashdecks } from '@/hooks/flashdeck/useAllFlashdecks';
import { FlashdeckSection } from '@/components/section/FlashdeckSection';
import { FlashdeckCard } from '@/components/cards/FlashdeckCard';

export const Route = createFileRoute('/_authentificated/flashdecks/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: flashdecks } = useAllFlashdecks();
  return (
    <>
      <FlashdeckSection isPreview={false} />

      <div className="flex flex-col gap-4">
        {flashdecks &&
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
          ))}
      </div>
    </>
  );
}
