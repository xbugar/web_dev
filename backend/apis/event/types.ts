import {z} from "zod";
import {eventCreateSchema, eventUpdateSchema} from "./validationSchemas";
import {Tag} from "@prisma/client";



export type EventResponse = {
    id: string,
    title: string,
    description: string | undefined | null,
    timeFrom: Date
    timeTo: Date,
    repeat: string,
    tags: Tag[]
}

export type EventUpdateRequest = z.infer<typeof eventUpdateSchema>
export type EventCreateRequest = z.infer<typeof eventCreateSchema>

