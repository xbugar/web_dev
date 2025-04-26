import { Tag } from "@/types/Tag.ts";

export type Notebook = {
  id: string,
  title: string,
  description?: string,
  color: string,
  createdAt: string,
  updatedAt: string,
  icon: string,
  tags?: Tag[],
  noteCount: number,
}

export type CreateNotebook = {
  title: string,
  description?: string,
  color?: string,
  iconName?: string,
  userId?: string
}