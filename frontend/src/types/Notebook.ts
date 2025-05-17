import { TagType } from '@/types/TagType.ts';
import { Note } from './Note';

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

export type CreateNotebook = {
  title: string;
  description?: string;
  color?: string;
  iconName?: string;
  userId?: string;
};

export type NotebookCardProps = {
  id: string;
  key: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
  noteCount: number;
  lastUpdated: string;
  tags?: { name: string; color: string }[];
  isLinked?: boolean;
};

export type DropdownType = 'note' | 'notebook';

export interface NotebookNoteDropdownProps {
  notebookId: string;
  noteId: string;
  data: CreateNotebook | Note;
  type: DropdownType;
}
