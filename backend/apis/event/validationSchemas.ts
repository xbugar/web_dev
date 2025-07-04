﻿import {z} from "zod";

export const eventCreateSchema = z.object({
    body: z.object({
        title: z.string(),
        description: z.string().optional(),
        timeFrom: z.coerce.date(),
        timeTo: z.coerce.date(),
        repeat: z.enum(["Never", "Every Day", "Every Week", "Every 2 Weeks", "Every Month"])
    })
});

export const eventUpdateSchema = z.object({
    params: z.object({
        eventId: z.string().uuid(),
    }),
    body: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        timeFrom: z.coerce.date().optional(),
        timeTo: z.coerce.date().optional(),
        repeat: z.enum(["Never", "Every Day", "Every Week", "Every 2 Weeks", "Every Month"]).optional(),
    })
});

export const eventDeleteSchema = z.object({
    params: z.object({
        eventId: z.string().uuid(),
    })
});

export const eventAddTagRequestSchema = z.object({
    params: z.object({
        eventId: z.string().uuid()
    }),
    body: z.object({
        name: z.string().min(1).max(32),
        color: z.enum(["blue", "purple", "orange", "green", "red", "pink"]),
    })
});

export const eventDeleteTagRequestSchema = z.object({
    params: z.object({
        eventId: z.string().uuid(),
        tagId: z.string().uuid()
    }),
});

export const eventGetByDateSchema = z.object({
    query: z.object({
        date: z.coerce.date(),
    })
});

export const eventGetByIdSchema = z.object({
    params: z.object({
        eventId: z.string().uuid(),
    })
});

export const eventGetSchema = z.object({
    query: z.object({
        upComing: z.boolean().optional().default(false)
    })
});

export const eventGetRangeSchema = z.object({
    query: z.object({
        start: z.coerce.date(),
        end: z.coerce.date()
    })
});
