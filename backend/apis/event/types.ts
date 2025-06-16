import {z} from "zod";
import {eventCreateSchema, eventUpdateSchema} from "./validationSchemas";



export type EventResponse = {
    id: string,
    title: string,
    description: string | undefined | null,
    timeFrom: Date
    timeTo: Date,
    repeat: string,
}

export type EventUpdateRequest = z.infer<typeof eventUpdateSchema>
export type EventCreateRequest = z.infer<typeof eventCreateSchema>

