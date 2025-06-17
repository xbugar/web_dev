import z from "zod";
import {
  updateFlashCardRequestSchema,
} from "./validationSchema";


export type Card = {
  id: string;
  question: string;
  answer: string;

  createdAt: Date;
  updatedAt: Date;

  deck: {
    id: string;
    color: string;
  }
}

export type UpdateCard = z.infer<typeof updateFlashCardRequestSchema>;