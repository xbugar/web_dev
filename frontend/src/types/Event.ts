import { TagType } from "@/types/TagType.ts";

export type Event = {
  id: string;
  title: string;
  description?: string;
  tags?: TagType[];
  timeFrom: string;
  timeTo: string;
}