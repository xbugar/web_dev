import { TagType } from '@/types/TagType.ts';

export type Note = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  tags?: TagType[];
  notebook: { id: string; color: string };
};

export type CreateNote = {
  title: string;
};
