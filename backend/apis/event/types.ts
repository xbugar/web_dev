import {z} from "zod";
import {eventCreateSchema, eventTagSchema, eventUpdateSchema} from "./validationSchemas";



export type AppEvent = {
    eventId: string,
    title: string,
    description: string | undefined | null,
    timeFrom: Date
    timeTo: Date,
}

export type EventUpdateRequest = z.infer<typeof eventUpdateSchema>
export type EventCreateRequest = z.infer<typeof eventCreateSchema>
export type EventTagRequest = z.infer<typeof eventTagSchema>

