import { Tag } from '@/types/Tag.ts';

export type Note = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  tags?: Tag[];
  notebook: { id: string; color: string };
};

export type CreateNote = {
  title: string;
};
