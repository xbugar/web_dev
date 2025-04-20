import { z } from "zod"

export const createTagRequestSchema = z.object({
    body: z.object({
        tag: z.string().min(1).max(32),
        color: z.string().regex(/^#[A-Fa-f0-9]{6}$/),
        userId: z.string().uuid()
    })
});

export const getTagsRequestSchema = z.object({});

export const getTagRequestSchema = z.object({
    params: z.object({
        tagId: z.string().uuid()
    })
});

export const updateTagRequestSchema = z.object({
    params: z.object({
        tagId: z.string().uuid()
    }),
    body: z.object({
        tag: z.string().min(1).max(32).optional(),
        color: z.string().regex(/^#[A-Fa-f0-9]{6}$/).optional(),
    })
});


export const getUserTagsRequestSchema = z.object({
    params: z.object({
        userId: z.string().uuid()
    })
});


export const deleteTagRequestSchema = z.object({
    params: z.object({
        id: z.string().uuid(),
    })
});

