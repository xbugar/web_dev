import { TagType } from "@/types/TagType.ts";

export type Event = {
  id: string;
  title: string;
  description?: string;
  tags?: TagType[];
  timeFrom: string;
  timeTo: string;
}

export type CreateEvent = {
  title: string;
  description?: string;
  tags?: TagType[];
  timeFrom: string;
  timeTo: string;
  repeat?: string;
}