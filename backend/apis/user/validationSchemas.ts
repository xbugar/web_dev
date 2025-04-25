import z from "zod";

export const userCreateRequestSchema = z.object({
    body: z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string().email(),
        password: z.string().nonempty(),
    })
})

export const userUpdateRequestSchema = z.object({
        params: z.object({
            userId: z.string().uuid()
        }),
        body: z.object({
            firstName: z.string().nullable().optional(),
            lastName: z.string().nullable().optional(),
            email: z.string().email().nullable().optional(),
            password: z.string().nonempty().nullable().optional(),
        })
    }
)

export const userCreateNotebookRequestSchema = z.object({
    params: z.object({
        userId: z.string().uuid()
    }),

    body: z.object({
        title: z.string().min(1).max(255),
        description: z.string().min(1).max(255),
        color: z.string(),
        iconId: z.string(),
    })
})

