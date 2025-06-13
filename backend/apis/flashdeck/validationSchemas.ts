import z from "zod";

export const flashdeckUpdateRequestSchema = z.object({
  params: z.object({
    flashdeckId: z.string().uuid()
  }),

  body: z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1).max(255),
    color: z.enum(["blue" , "purple" , "orange" , "green" , "red" , "pink"]),
  })
});

export const flashdeckCreateFlashcardRequestSchema = z.object({
  params: z.object({
    flashdeckId: z.string().uuid()
  }),
  body: z.object({
    question: z.string().min(1).max(255),
    answer: z.string().min(1).max(255),
  })
})

export const flashdeckGetRequestSchema = z.object({
  params: z.object({
    flashdeckId: z.string().uuid()
  }),
  query: z.object({
    withTags: z.boolean().default(true),
  })
});

export const flashdeckOnlyIdRequestSchema = z.object({
  params: z.object({
    flashdeckId: z.string().uuid()
  })
});

export const flashdeckTagOperationRequestSchema = z.object({
  params: z.object({
    flashdeckId: z.string().uuid(),
    tagId: z.string().uuid()
  }),
});

export const flashdeckCreateRequestSchema = z.object({
  body: z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1).max(255),
    color: z.enum(["blue" , "purple" , "orange" , "green" , "red" , "pink"]),
  })
})