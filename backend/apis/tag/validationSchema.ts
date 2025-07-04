import { z } from "zod"

export const createTagRequestSchema = z.object({
    body: z.object({
        name: z.string().min(1).max(32),
        color: z.enum(["blue" , "purple" , "orange" , "green" , "red" , "pink"]),
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
        name: z.string().min(1).max(32).optional(),
        color: z.enum(["blue" , "purple" , "orange" , "green" , "red" , "pink"]).optional(),
    })
});


export const getUserTagsRequestSchema = z.object({});


export const deleteTagRequestSchema = z.object({
    params: z.object({
        tagId: z.string().uuid(),
    })
});

