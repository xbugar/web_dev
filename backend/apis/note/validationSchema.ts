import { z } from "zod"


export const updateNoteMetaRequestSchema = z.object({
    params: z.object({
        noteId: z.string()
    }),
    body: z.object({
        title: z.string().min(1).max(64).optional(),
        color: z.enum(["blue" , "purple" , "orange" , "green" , "red" , "pink"]),
    })
});


export const getNoteMetaRequestSchema = z.object({
    params: z.object({
        noteId: z.string()
    }),
    query: z.object({
        withTags: z.boolean().default(true),
    })
});

export const deleteNoteRequestSchema = z.object({
    params: z.object({
        noteId: z.string()
    })
});


export const getNoteContentRequestSchema = z.object({
    params: z.object({
        id: z.string(),
    })
});

export const updateNoteContentRequestSchema = z.object({
    params: z.object({
        noteId: z.string(),
    }),
    body: z.object({
        content: z.string(),
    })
});

export const addNoteTagRequestSchema = z.object({
    params: z.object({
        id: z.string(),
        tagId: z.string(),
    })
});

export const removeNoteTagRequestSchema = z.object({
    params: z.object({
        id: z.string(),
        tagId: z.string(),
    })
})
