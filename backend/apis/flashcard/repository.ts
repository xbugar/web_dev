import {Result} from "@badrap/result";
import {prisma} from "../prismaClient";
import { UpdateFlashCard, FlashCard } from "./types";
import {FlashdeckCreateFlashcardRequest} from "../flashdeck/types";
import {repackageToNotFoundError, repackageToInternalError} from "../utils";
import { NotebookCreateNoteRequest } from "../notebook/types";
import { NoteMeta } from "../note/types";

export const flashCardRepository = {
  async updateFlashCard(flashCard: UpdateFlashCard): Promise<Result<FlashCard>> {
    try {
      const result = await prisma.$transaction(async (tx) => {
        const card = await tx.card.update({
          select: {
            id: true,
            question: true,
            answer: true,

            createdAt: true,
            updatedAt: true,

            flashDeck: {
              select: {
                id: true,
                color: true,
              }
            }
          },
          where: {
            id: flashCard.params.flashCardId
          },
          data: {
            question: flashCard.body.question,
            answer: flashCard.body.answer,
          },
        });

        tx.flashDeck.update({
          where: {id: card.flashDeck.id},
          data: {
            updatedAt: card.updatedAt
          }
        })
        return card;
      });

      return Result.ok(result);

    } catch (error: any) {
      return repackageToInternalError(error);
    }
  },

  async delete(id: string): Promise<Result<null>> {
    try {
      await prisma.$transaction(async (tx) => {

        const card = await tx.card.delete({
          select: {
            flashDeck: {
              select: {
                id: true,
              }
            }
          },
          where: {
            id: id
          }
        });

        tx.flashDeck.update({
          where: {id: card.flashDeck.id},
          data: {
            updatedAt: Date(),
          }
        })

      });
      return Result.ok(null);
    } catch
      (error: any) {
      return repackageToInternalError(error);
    }
  },

  async create(data: FlashdeckCreateFlashcardRequest): Promise<Result<FlashCard>> {
    try {
      const result = await prisma.$transaction(async (tx) => {
        const card = await tx.card.create({
          select: {
            id: true,
            question: true,
            answer: true,

            createdAt: true,
            updatedAt: true,

            flashDeck: {
              select: {
                id: true,
                color: true,
              }
            }
          },
          data: {
            ...data.body,
            flashDeck: {
              connect: {
                id: data.params.flashdeckId
              }
            }
          }
        });

        tx.notebook.update({
          where: {id: data.params.flashdeckId},
          data: {
            updatedAt: card.updatedAt
          }
        });
        return card;
      })
      return Result.ok(result);
    } catch (error: any) {
      return repackageToInternalError(error);
    }

  },
  async getAllByFlashDeckId(flashDeckId: string): Promise<Result<FlashCard[]>> {
    return prisma.note.findMany({
      select: {
        id: true,
        question: true,
        answer: true,

        createdAt: true,
        updatedAt: true,

        flashDeck: {
          select: {
            id: true,
            color: true,
          }
        }
      },
      where: {
        flashDeckId: flashDeckId
      }
    }).then(cards => Result.ok(cards))
      .catch(
        (error: any) => repackageToInternalError(error));
  },

  async getUserId(flashCardId: string): Promise<Result<string>> {
    return prisma.flashCard.findUniqueOrThrow({
      select: {
        flashDeck: {
          select: {
            userId: true
          }
        }
      },
      where: {id: flashCardId}
    }).then(card => Result.ok(card.flashDeck.userId))
      .catch(
        (error: any) => repackageToNotFoundError(error));
  }
}