import { TagType } from '@/types/tag';

// what we get from api
export type Notebook = {
  id: string;
  title: string;
  description: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  iconName: string;
  tags?: TagType[];
  noteCount: number;
};

// what we need to render card
export type NotebookCardProps = {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
  noteCount: number;
  tags?: TagType[];
  lastUpdated: string;
  isLinked?: boolean;
};

// what section needs
export type NotebookSectionProps = {
  isPreview: boolean;
};

// what dialog needs
export type NotebookDialogProps = {
  notebookCardProps: NotebookCardProps;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

// what tag deletion needs
export type NotebookTagDeleteDialogProps = NotebookDialogProps & {
  tagId: string;
};

// what form needs
export type NotebookFormProps = {
  notebookCardProps: NotebookCardProps;
  submitText: string;
  isSubmitting?: boolean;
  onSubmit: (data: NotebookModifiableProps) => void;
};

// what is modifiable by user
export type NotebookModifiableProps = {
  title: string;
  description?: string;
  color?: string;
  iconName?: string;
};
