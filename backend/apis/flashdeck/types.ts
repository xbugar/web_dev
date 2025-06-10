import {
  flashdeckCreateFlashcardRequestSchema,
  flashdeckGetRequestSchema,
  flashdeckUpdateRequestSchema,
  flashdeckOnlyIdRequestSchema,
  flashdeckTagOperationRequestSchema,
  flashdeckCreateRequestSchema
} from "./validationSchemas";
import {z} from "zod";
import {Tag} from "../tag/types";

export type FlashdeckCreateFlashcardRequest = z.infer<typeof flashdeckCreateFlashcardRequestSchema>;
export type FlashdeckGetRequest = z.infer<typeof flashdeckGetRequestSchema>;
export type FlashdeckUpdateRequest = z.infer<typeof flashdeckUpdateRequestSchema>;
export type FlashdeckCreateRequest = z.infer<typeof flashdeckCreateRequestSchema>;
export type FlashdeckOnlyIdRequest = z.infer<typeof flashdeckOnlyIdRequestSchema>;
export type FlashdeckTagOperationRequest = z.infer<typeof flashdeckTagOperationRequestSchema>;

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