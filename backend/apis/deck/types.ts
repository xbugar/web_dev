import {
  flashdeckCreateFlashcardRequestSchema,
  flashdeckUpdateRequestSchema,
  flashdeckCreateRequestSchema
} from "./validationSchemas";
import {z} from "zod";
import {Tag} from "../tag/types";

export type DeckCreateCardRequest = z.infer<typeof flashdeckCreateFlashcardRequestSchema>;
export type FlashdeckUpdateRequest = z.infer<typeof flashdeckUpdateRequestSchema>;
export type FlashdeckCreateRequest = z.infer<typeof flashdeckCreateRequestSchema>;

export type FlashdeckResponse = {
  id: string,
  title: string,
  description: string,
  color: string,
  createdAt: Date,
  updatedAt: Date,
  tags?: Tag[],
  flashCardsCount: number,
}

export type TagOperation = { connect: { id: string, }, } | { disconnect: { id: string, } }