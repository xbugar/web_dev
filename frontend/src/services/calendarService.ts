import { api } from '@/services/index.ts';
import { EventModifiableProps, Event } from '@/types/event';
import { CreateTag, TagType } from '@/types/tag';

export const getAllEvents = async (): Promise<Event[]> => {
  return api.get(`/event`).then(response => response.data as Event[]);
};

export const getUserEvents = async (): Promise<Event[]> => {
  return api.get(`/event`).then(response => response.data as Event[]);
};

export const getEventsByDate = async (date: string): Promise<Event[]> => {
  return api.get('event/date', { params: { date } }).then(response => response.data as Event[]);
};

export const getEventsByDateRange = async (start: string, end: string): Promise<Event[]> => {
  return api
    .get('event/range', { params: { start, end } })
    .then(response => response.data as Event[]);
};

export const postEvent = async (createEvent: EventModifiableProps): Promise<Event> => {
  return api.post(`/event`, createEvent).then(response => response.data as Event);
};

export const putEvent = async (
  eventId: string,
  createEvent: EventModifiableProps,
): Promise<Event> => {
  return api.put(`/event/${eventId}`, createEvent).then(response => response.data as Event);
};

export const deleteEvent = async (eventId: string) => {
  return api.delete(`/event/${eventId}`);
};

export const postTagToEvent = async (eventId: string, data: CreateTag): Promise<TagType> => {
  return api.post(`/event/${eventId}/tag`, data).then(res => res.data as TagType);
};

export const deleteTagFromEvent = async (eventId: string, tagId: string): Promise<void> => {
  return api.delete(`/event/${eventId}/tag/${tagId}`);
};

export const getEvent = async (eventId: string): Promise<Event> => {
  return api.get(`/event/${eventId}`).then(response => response.data as Event);
};
