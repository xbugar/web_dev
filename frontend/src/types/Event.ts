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

export type EventCardProps = {
  id: string;
  title: string;
  description?: string;
  tags?: TagType[];
  from?: string;
  to?: string;
  allDay?: boolean;
  tillDate?: string;
};
