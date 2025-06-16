import z from 'zod'

export const searchRequestSchema = z.object({
    query: z.object({
        q: z.string(),
        type: z.array(z.enum(["notes", "notebooks", "events", "decks"])).default(["notes", "notebooks", "events", "decks"]),
    }),
});