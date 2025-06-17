import {z} from "zod";

export const authRegisterSchema = z.object({
    body: z.object({
        firstName: z.string().min(2).max(255),
        lastName: z.string().min(2).max(255),
        email: z.string().email(),
        password: z.string().min(6).max(255),
        confirmPassword: z.string().min(6).max(255),
        withEmail: z.boolean().optional().default(false),
    })
});

export const authLoginSchema = z.object({
    body: z.object({
        email: z.string().email(),
        password: z.string().min(6).max(255),
    }),
});


export const authRemoveUserSchema = z.object({
    body: z.object({
        password: z.string().min(6).max(255),
    })
});
