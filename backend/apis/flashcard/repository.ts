import {Result} from "@badrap/result";
import {prisma} from "../prismaClient";
import { UpdateFlashCard, FlashCard } from "./types";
// import {FlashDeckCreateCardRequest} from "../flashdeck/types";
import {repackageToNotFoundError, repackageToInternalError} from "../utils";

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
              id: true,
              color: true,
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