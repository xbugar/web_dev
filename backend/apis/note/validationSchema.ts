import { z } from "zod"


export const updateNoteMetaRequestSchema = z.object({
    params: z.object({
        noteId: z.string().uuid()
    }),
    body: z.object({
        title: z.string().min(1).max(64).optional(),
        color: z.string().regex(/^#[A-Fa-f0-9]{6}$/).optional(),
    })
});


export const getNoteMetaRequestSchema = z.object({
    params: z.object({
        noteId: z.string().uuid()
    }),
    query: z.object({
        withTags: z.boolean().optional(),
    })
});

export const deleteNoteRequestSchema = z.object({
    params: z.object({
        noteId: z.string().uuid()
    })
});


export const getNoteContentRequestSchema = z.object({
    params: z.object({
        id: z.string().uuid(),
    })
});

export const updateNoteContentRequestSchema = z.object({
    params: z.object({
        noteId: z.string().uuid(),
    }),
    body: z.object({
        content: z.string(),
    })
});

export const addNoteTagRequestSchema = z.object({
    params: z.object({
        id: z.string().uuid(),
        tagId: z.string().uuid(),
    })
});

export const removeNoteTagRequestSchema = z.object({
    params: z.object({
        id: z.string().uuid(),
        tagId: z.string().uuid(),
    })
})
