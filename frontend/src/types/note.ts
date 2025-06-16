import { TagType } from '@/types/tag';

// what we get from api
export type Note = {
  id: string;
  title: string;
  tags?: TagType[];
  notebook: { id: string; title: string; color: string };
  createdAt: string;
  updatedAt: string;
};

// what we need to render card
export type NoteCardProps = {
  id: string;
  title: string;
  tags?: TagType[];
  notebook: { id: string; title: string; color: string };
  content?: string;
  lastUpdated: string;
  isLinked?: boolean;
};

// what section needs
export type NoteSectionProps = {
  notebook: { id: string; title: string; color: string };
  noteTitle: string;
};

// what dialog needs
export type NoteDialogProps = {
  noteCardProps: NoteCardProps;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

// what tag deletion needs
export type NoteTagDeleteDialogProps = NoteDialogProps & {
  tagId: string;
};

// what form needs
export type NoteFormProps = {
  noteCardProps: NoteCardProps;
  submitText: string;
  isSubmitting?: boolean;
  onSubmit: (data: NoteModifiableProps) => void;
};

// what is modifiable by user
export type NoteModifiableProps = {
  title: string;
};
