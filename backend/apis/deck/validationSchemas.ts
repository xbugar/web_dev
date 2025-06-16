import z from "zod";

export const flashdeckUpdateRequestSchema = z.object({
    params: z.object({
        deckId: z.string().uuid()
    }),

    body: z.object({
        title: z.string().min(1).max(255).optional(),
        description: z.string().min(1).max(255).optional(),
        color: z.enum(["blue", "purple", "orange", "green", "red", "pink"]).optional(),
    })
});

export const flashdeckCreateFlashcardRequestSchema = z.object({
    params: z.object({
        deckId: z.string().uuid()
    }),
    body: z.object({
        question: z.string().min(1).max(255),
        answer: z.string().min(1).max(255),
    })
});

export const flashdeckGetRequestSchema = z.object({
    params: z.object({
        deckId: z.string().uuid()
    }),
    query: z.object({
        withTags: z.boolean().default(true),
    })
});

export const flashdeckOnlyIdRequestSchema = z.object({
    params: z.object({
        deckId: z.string().uuid()
    })
});

export const flashdeckRemoveTagRequestSchema = z.object({
    params: z.object({
        deckId: z.string().uuid(),
        tagId: z.string().uuid(),
    })
});

export const flashdeckAddTagRequestSchema = z.object({
    params: z.object({
        deckId: z.string().uuid()
    }),
    body: z.object({
        name: z.string().min(1).max(32),
        color: z.enum(["blue" , "purple" , "orange" , "green" , "red" , "pink"]),
    })
});

export const flashdeckCreateRequestSchema = z.object({
    body: z.object({
        title: z.string().min(1).max(255),
        description: z.string().min(1).max(255),
        color: z.enum(["blue", "purple", "orange", "green", "red", "pink"]),
    })
});

export const getAllDecksSchema = z.object({
    query: z.object({
        withTags: z.boolean().default(true),
    })
});

export const resetCardsRequestSchema = z.object({
    params: z.object({
        deckId: z.string().uuid()
    })
})

