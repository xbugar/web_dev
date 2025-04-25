import { Tag } from "@/types/Tag.ts";

export type Note = {
  id: string,
  title: string,
  color: string,
  createdAt: string,
  updatedAt: string,
  tags?: Tag[]
}