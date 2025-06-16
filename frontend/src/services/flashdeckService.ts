import { api } from '@/services/index.ts';
import { CreateTag, TagType } from '@/types/tagType';
import { Flashdeck } from '@/types/flashdeck';
import { Flashcard } from '@/types/flashcard';

export const getAllFlashdecks = async (): Promise<Flashdeck[]> => {
  return api.get(`user/decks`).then(response => response.data as Flashdeck[]);
};

export const getFlashdeckById = async (flashdeckId: string): Promise<Flashdeck> => {
  return api.get(`/deck/${flashdeckId}`).then(response => response.data as Flashdeck);
};

export const getFlashcardsFromFlashdeck = async (flashdeckId: string): Promise<Flashcard[]> => {
  return api.get(`/deck/${flashdeckId}/cards`).then(response => response.data as Flashcard[]);
};

export const postTagToFlashdeck = async (
  flashdeckId: string,
  data: CreateTag,
): Promise<TagType> => {
  return api.post(`/deck/${flashdeckId}/tag`, data).then(res => res.data as TagType);
};

export const deleteTagFromFlashdeck = async (flashdeckId: string, tagId: string): Promise<void> => {
  return api.delete(`/deck/${flashdeckId}/tag/${tagId}`);
};
