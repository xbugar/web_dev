import { z } from "zod"

export const createTagRequestSchema = z.object({
    body: z.object({
        tag: z.string().min(1).max(32),
        color: z.string().regex("/^#[A-Fa-f0-9]{6}$/")
    })
});


export const getTagsRequestSchema = z.object({
    query: z.object({})
})


export const getTagRequestSchema = z.object({
    query: z.object({
        id: z.string().uuid(),
    })
})


export const updateTagRequestSchema = z.object({
    body: z.object({
        id: z.string().uuid(),
        tag: z.string().min(1).max(32).optional(),
        color: z.string().regex("/^#[A-Fa-f0-9]{6}$/").optional(),
    })
})

export const deleteTagRequestSchema = z.object({
    body: z.object({
        id: z.string().uuid(),
    })
})



