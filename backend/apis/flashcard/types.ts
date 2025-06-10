import z from "zod";
import {
  updateFlashCardRequestSchema,
  deleteFlashCardRequestSchema,
} from "./validationSchema";


export type FlashCard = {
  id: string;
  question: string;
  answer: string;

  createdAt: Date;
  updatedAt: Date;

  flashDeck: {
    id: string;
    color: string;
  }
}

export type UpdateFlashCard = z.infer<typeof updateFlashCardRequestSchema>;