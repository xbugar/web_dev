import { TagType } from '@/types/TagType.ts';

export type Note = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  tags?: TagType[];
  notebook: { id: string; color: string; title?: string };
};

export type NoteCardProps = {
  parentId: string;
  noteId: string;
  title: string;
  titleOfParent: string;
  color: string;
  lastUpdated: string;
  content: string;
  tags?: { name: string; color: string }[];
  isLinked?: boolean;
};

export type CreateNote = {
  title: string;
};
