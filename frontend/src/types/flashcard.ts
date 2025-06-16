// what we get from api
export type Flashcard = {
  id: string;
  question: string;
  answer: string;
  flashdeck: { id: string; color: string };
  createdAt: string;
  updatedAt: string;
};

// what we need to render card
export type FlashcardCardProps = {
  id: string;
  question: string;
  answer: string;
  flashdeck: { id: string; title: string; color: string };
  lastUpdated: string;
  isLinked?: boolean;
};

// what section needs
export type FlashcardSectionProps = {
  flashdeck: { id: string; title: string; color: string };
};

// what dialog needs
export type FlashcardDialogProps = {
  flashcardCardProps: FlashcardCardProps;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

// what tag deletion needs
export type FlashcardTagDeleteDialogProps = FlashcardDialogProps & {
  tagId: string;
};

// what form needs
export type FlashcardFormProps = {
  flashcardCardProps: FlashcardCardProps;
  submitText: string;
  isSubmitting?: boolean;
  onSubmit: (data: FlashcardModifiableProps) => void;
};

// what is modifiable by user
export type FlashcardModifiableProps = {
  question: string;
  answer: string;
};
