import { TagType } from '@/types/TagType.ts';

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
