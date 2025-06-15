import { TagType } from "@/types/TagType.ts";

export type EventType = {
  id: string;
  title: string;
  description: string;
  tags: TagType[];
  timeFrom: string;
  timeTo: string;
  repeat: string;
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
  eventId: string;
  title: string;
  description?: string;
  tags?: TagType[];
  from?: string;
  to?: string;
  allDay?: boolean;
  tillDate?: string;
};
