import { api } from "@/services/index.ts";
import { CreateEvent } from "@/types/Event.ts";


export const getUserEvents = async(): Promise<Event[]> => {
  return api.get(`/event`).then(response => response.data as Event[]);
}

export const postEvent = async(createEvent: CreateEvent): Promise<Event> => {
  return api.post(`/event`, createEvent).then(response => response.data as Event);
}

export const putEvent = async(eventId: string, createEvent: CreateEvent): Promise<Event> => {
  return api.put(`/event/${eventId}`, createEvent).then(response => response.data as Event);
}

export const deleteEvent = async(eventId: string) => {
  return api.delete(`/event/${eventId}`);
}

