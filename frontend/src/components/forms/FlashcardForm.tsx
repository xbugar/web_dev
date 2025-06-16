import { Input } from '@/components/ui/input.tsx';

import { Label } from '@/components/ui/label.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { DialogClose, DialogFooter } from '../ui/dialog';
import { FlashcardCard } from '@/components/cards/FlashcardCard';
import { FlashcardFormProps } from '@/types/flashcard';

export function FlashcardForm({
  flashcardCardProps,
  submitText,
  isSubmitting,
  onSubmit,
}: FlashcardFormProps) {
  const [question, setQuestion] = useState(flashcardCardProps.question);
  const [answer, setAnswer] = useState(flashcardCardProps.answer);

  const handleSubmit = () => {
    if (!question || !answer) return;

    onSubmit({
      question,
      answer,
    });
  };

  return (
    <div className="grid gap-6">
      <div className="grid items-center gap-2">
        <Label htmlFor="create-flashcard-card-preview" className="text-right">
          Preview
        </Label>

        <FlashcardCard
          id={'create-flashcard-card-preview'}
          question={question}
          answer={answer}
          flashdeck={flashcardCardProps.flashdeck}
          lastUpdated={flashcardCardProps.lastUpdated}
          isLinked={false}
        />
      </div>

      <div className="grid items-center">
        <Label htmlFor="question" className="text-right">
          Question*
        </Label>
        <Input
          id="question"
          placeholder="Enter question"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          className="col-span-3"
        />
      </div>

      <div className="grid items-center">
        <Label htmlFor="answer" className="text-right">
          Answer*
        </Label>
        <Input
          id="answer"
          placeholder="Enter answer"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          className="col-span-3"
        />
      </div>

      <DialogFooter className="flex-row-reverse">
        <DialogClose>Cancel</DialogClose>
        <Button
          type="submit"
          variant="submit"
          onClick={handleSubmit}
          disabled={!question || !answer}
          loading={isSubmitting}
        >
          {submitText}
        </Button>
      </DialogFooter>
    </div>
  );
}
