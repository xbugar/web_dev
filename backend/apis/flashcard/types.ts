import z from "zod";
import {
  updateFlashCardRequestSchema,
  deleteFlashCardRequestSchema,
} from "./validationSchema";


export type FlashCard = {
  id: string;
  question: string;
  answer: string;

  createdAt: string;
  updatedAt: string;

  flashDeck: {
    id: string;
    color: string;
  }
}

export type UpdateFlashCard = z.infer<typeof updateFlashCardRequestSchema>;
export type DeleteFlashCard = z.infer<typeof deleteFlashCardRequestSchema>;