import { TagType } from '@/types/tag';

// what we get from api
export type Flashdeck = {
  id: string;
  title: string;
  description: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  tags?: TagType[];
  flashCardsCount: number;
};

// what we need to render card
export type FlashdeckCardProps = {
  id: string;
  title: string;
  description: string;
  color: string;
  flashCardsCount: number;
  tags?: TagType[];
  lastUpdated: string;
  isLinked?: boolean;
};

// what section needs
export type FlashdeckSectionProps = {
  isPreview: boolean;
};

// what dialog needs
export type FlashdeckDialogProps = {
  flashdeckCardProps: FlashdeckCardProps;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

// what tag deletion needs
export type FlashdeckTagDeleteDialogProps = FlashdeckDialogProps & {
  tagId: string;
};

// what form needs
export type FlashdeckFormProps = {
  flashdeckCardProps: FlashdeckCardProps;
  submitText: string;
  isSubmitting?: boolean;
  onSubmit: (data: FlashdeckModifiableProps) => void;
};

// what is modifiable by user
export type FlashdeckModifiableProps = {
  title: string;
  description?: string;
  color?: string;
};
