import { z } from "zod"


export const getNoteMetaRequestSchema = z.object({
    params: z.object({
        notebookId: z.string().uuid()
    })
})


export const updateNoteMetaRequestSchema = z.object({
    body: z.object({
        id: z.string().uuid(),
        title: z.string().min(1).max(64).optional(),
        color: z.string().regex(/^#[A-Fa-f0-9]{6}$/).optional(),
    })
});


export const getNoteContentRequestSchema = z.object({
    params: z.object({
        id: z.string().uuid(),
    })
});

export const updateNoteContentRequestSchema = z.object({
    body: z.object({
        id: z.string().uuid(),
        content: z.string(),
    })
});

export const addNoteTagRequestSchema = z.object({
    body: z.object({
        id: z.string().uuid(),
        tagId: z.string().uuid(),
    })
});

export const removeNoteTagRequestSchema = z.object({
    body: z.object({
        id: z.string().uuid(),
        tagId: z.string().uuid(),
    })
})
