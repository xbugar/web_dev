import { api } from "@/services/index.ts";
import { CreateEvent, EventType } from "@/types/EventType.ts";
import { CreateTag, TagType } from "@/types/TagType.ts";


export const getUserEvents = async(): Promise<EventType[]> => {
  return api.get(`/event`).then(response => response.data as EventType[]);
}

export const getEventsByDate = async(date: string): Promise<EventType[]> => {
  return api.get('event/date', { params: { date }}).then(response => response.data as EventType[]);
}

export const getEventsByDateRange = async(start: string, end: string): Promise<EventType[]> => {
  return api.get('event/range', { params: { start, end }}).then(response => response.data as EventType[]);
}

export const postEvent = async(createEvent: CreateEvent): Promise<EventType> => {
  return api.post(`/event`, createEvent).then(response => response.data as EventType);
}

export const putEvent = async(eventId: string, createEvent: CreateEvent): Promise<EventType> => {
  return api.put(`/event/${eventId}`, createEvent).then(response => response.data as EventType);
}

export const deleteEvent = async(eventId: string) => {
  return api.delete(`/event/${eventId}`);
}

export const postTagToEvent = async (eventId: string, data: CreateTag): Promise<TagType> => {
  return api.post(`/event/${eventId}/tag`, data).then((res) => res.data as TagType)
}

export const deleteTagFromEvent = async (eventId: string, tagId: string): Promise<void> => {
  return api.delete(`/event/${eventId}/tag/${tagId}`);
}

export const getEvent = async(eventId: string): Promise<EventType> => {
  return api.get(`/event/${eventId}`).then(response => response.data as EventType);
}
