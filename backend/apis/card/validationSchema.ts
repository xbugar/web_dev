import { z } from "zod"

export const updateFlashCardRequestSchema = z.object({
  params: z.object({
    cardId: z.string().uuid()
  }),
  body: z.object({
    question: z.string().min(1).optional(),
    answer: z.string().min(1).optional(),
  })
});

export const deleteFlashCardRequestSchema = z.object({
  params: z.object({
    cardId: z.string().uuid()
  })
});
