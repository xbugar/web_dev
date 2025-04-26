import z from "zod";

export const notebookUpdateRequestSchema = z.object({
    params: z.object({
        notebookId: z.string().uuid()
    }),

    body: z.object({
        title: z.string().min(1).max(255),
        description: z.string().min(1).max(255),
        color: z.enum(["blue" , "purple" , "orange" , "green" , "red" , "pink"]),
        iconName: z.string().nullable(),
    })
});

export const notebookCreateNoteRequestSchema = z.object({
    params: z.object({
        notebookId: z.string().uuid()
    }),
    body: z.object({
        title: z.string().min(1).max(255),
        color: z.enum(["blue" , "purple" , "orange" , "green" , "red" , "pink"]),
    })
})

export const notebookGetRequestSchema = z.object({
    params: z.object({
        notebookId: z.string().uuid()
    }),
    query: z.object({
        withTags: z.boolean().default(true),
    })
});

export const notebookOnlyIdRequestSchema = z.object({
    params: z.object({
        notebookId: z.string().uuid()
    })
});

export const notebookTagOperationRequestSchema = z.object({
    params: z.object({
        notebookId: z.string().uuid(),
        tagId: z.string().uuid()
    }),
});

export const notebookCreateRequestSchema = z.object({

    body: z.object({
        title: z.string().min(1).max(255),
        description: z.string().min(1).max(255),
        color: z.enum(["blue" , "purple" , "orange" , "green" , "red" , "pink"]),
        iconName: z.string().nullable(),
        userId: z.string().uuid(),
    })
})