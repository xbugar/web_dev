import { api } from "@/services/index.ts";
import { CreateEvent, EventType } from "@/types/EventType.ts";


export const getUserEvents = async(): Promise<EventType[]> => {
  return api.get(`/event`).then(response => response.data as EventType[]);
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

