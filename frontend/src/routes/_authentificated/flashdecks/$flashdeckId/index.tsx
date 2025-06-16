import { createFileRoute } from '@tanstack/react-router';
import { useFlashdeck } from '@/hooks/flashdeck/useFlashdeck';
import { useFlashcardsByFlashdeck } from '@/hooks/flashdeck/useFlashcardsByFlashdeck';
import { FlashdeckCard } from '@/components/cards/FlashdeckCard';
import { ContainerLoading } from '@/components/loading/ContainerLoading';
import { FlashdeckSection } from '@/components/section/FlashdeckSection';
import { FlashcardSection } from '@/components/section/FlashcardSection';
import { FlashcardCard } from '@/components/cards/FlashcardCard';

export const Route = createFileRoute('/_authentificated/flashdecks/$flashdeckId/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { flashdeckId } = Route.useParams();

  const {
    data: currentFlashdeck,
    isPending: isPendingFlashdeck,
    isError: isErrorFlashdeck,
    error: errorFlashdeck,
  } = useFlashdeck(flashdeckId);

  const {
    data: flashcards,
    isPending: isPendingFlashcard,
    isError: isErrorFlashcard,
    error: errorFlashcard,
  } = useFlashcardsByFlashdeck(flashdeckId);

  if (isPendingFlashdeck || isPendingFlashcard) {
    return <ContainerLoading />;
  }

  if (isErrorFlashdeck) {
    return <div>Error: {errorFlashdeck.message}</div>;
  }

  if (isErrorFlashcard) {
    return <div>Error: {errorFlashcard.message}</div>;
  }

  return (
    <>
      <FlashdeckSection isPreview={true} />

      {currentFlashdeck && (
        <FlashdeckCard
          key={currentFlashdeck.id}
          id={currentFlashdeck.id}
          title={currentFlashdeck.title}
          description={currentFlashdeck.description}
          color={currentFlashdeck.color}
          flashCardsCount={currentFlashdeck.flashCardsCount}
          tags={currentFlashdeck.tags}
          lastUpdated={currentFlashdeck.updatedAt}
          isLinked={true}
        />
      )}

      <FlashcardSection
        flashdeck={{
          id: currentFlashdeck.id,
          title: currentFlashdeck.title,
          color: currentFlashdeck.color,
        }}
      />

      <div className="flex flex-col gap-4">
        {flashcards.length != 0 ? (
          flashcards.map(({ id, question, answer, updatedAt }) => (
            <FlashcardCard
              key={id}
              id={id}
              question={question}
              answer={answer}
              flashdeck={{
                id: currentFlashdeck.id,
                title: currentFlashdeck.title,
                color: currentFlashdeck.color,
              }}
              lastUpdated={updatedAt}
            />
          ))
        ) : (
          <div className="flex w-full items-center justify-center">
            <p className="text-muted-foreground mb-4 text-lg italic">No flashcards...</p>
          </div>
        )}
      </div>
    </>
  );
}
