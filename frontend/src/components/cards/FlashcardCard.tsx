import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

import { AccentColor, lineColor } from '@/components/cards/cardColors';
import { Ellipsis, Redo } from 'lucide-react';
import { cn } from '@/lib/utils.ts';
import { FlashcardCardProps } from '@/types/flashcard';
import { useState } from 'react';
import { FlashcardDropdown } from '../dropdown/FlashcardDropdown';

export function FlashcardCard({
  id,
  question,
  answer,
  flashdeck,
  lastUpdated,
  isLinked = true,
}: FlashcardCardProps) {
  const [isTurned, setIsTurned] = useState(true);
  const flashcardCardProps: FlashcardCardProps = {
    id,
    question,
    answer,
    flashdeck,
    lastUpdated,
  };

  return (
    <Card
      className={cn(
        'flex shrink-0 gap-4 overflow-hidden border-l-10 p-0 py-4',
        lineColor[flashdeck.color as AccentColor],
      )}
    >
      <CardHeader className="flex items-center justify-start gap-2 px-4">
        <div className="flex w-full flex-col gap-1">
          <div className="flex w-full items-center justify-between">
            <p className="font-medium">{isTurned ? 'Question' : 'Answer'}</p>

            <div className="flex flex-row gap-4">
              <button
                className="hover:bg-muted rounded-[10%] p-0"
                onClick={() => setIsTurned(prev => !prev)}
              >
                <Redo className="h-5 w-5 text-black dark:text-white" />
              </button>
              {isLinked ? (
                <FlashcardDropdown {...flashcardCardProps} />
              ) : (
                <button className="hover:bg-muted rounded-[10%] p-0">
                  <Ellipsis className="h-5 w-5 text-black dark:text-white" />
                </button>
              )}
            </div>
          </div>

          <CardTitle className="my-2 min-h-20 break-words whitespace-pre-line">
            {isTurned ? question : answer}
          </CardTitle>

          <div className="text-black-text-secondary dark:text-white-text-secondary flex items-center justify-between self-stretch">
            <div className="flex gap-1">
              <CardDescription>{flashdeck.title}</CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
