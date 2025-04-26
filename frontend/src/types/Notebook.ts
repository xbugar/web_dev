import { Tag } from "@/types/Tag.ts";

export type Notebook = {
  id: string,
  title: string,
  description?: string,
  color: string,
  createdAt: string,
  updatedAt: string,
  icon: string,
  noteCount: number,
  tags?: Tag[]
}

export type NotebookDataRequest = {
  title: string;
  description: string;
  color: string;
  iconId: string;
}