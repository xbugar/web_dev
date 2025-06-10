import { z } from "zod"


export const updateFlashCardRequestSchema = z.object({
  params: z.object({
    flashCardId: z.string().uuid()
  }),
  body: z.object({
    question: z.string().min(1).optional(),
    answer: z.string().min(1).optional(),
  })
});


// export const getFlashCardRequestSchema = z.object({
//   params: z.object({
//     noteId: z.string().uuid()
//   }),
//   query: z.object({
//     withTags: z.boolean().default(true),
//   })
// });

export const deleteFlashCardRequestSchema = z.object({
  params: z.object({
    flashCardId: z.string().uuid()
  })
});
