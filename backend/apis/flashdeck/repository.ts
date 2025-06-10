import {prisma} from "../prismaClient";
import {Result} from "@badrap/result";
import {FlashDeck} from "@prisma/client";

import {
  FlashdeckCreateFlashcardRequest,
  FlashdeckCreateRequest,
  FlashdeckGetRequest,
  FlashdeckOnlyIdRequest,
  FlashdeckResponse,
  FlashdeckTagOperationRequest,
  FlashdeckUpdateRequest, TagOperation
} from "./types";
import {repackageToNotFoundError, repackageToInternalError} from "../utils";

export const flashdeckRepository = {
  async create(request: FlashdeckCreateRequest, userId: string): Promise<Result<FlashdeckResponse>> {
    return await prisma.flashDeck.create({
      select: {
        id: true,
        title: true,
        description: true,
        color: true,
        createdAt: true,
        updatedAt: true,
        // iconName: true,
        _count: {
          select: {
            flashCards: true,
          }
        }
      },
      data: {
        ...request.body,
        userId: userId
      }

    }).then(flashdeck => Result.ok({
      id: flashdeck.id,
      title: flashdeck.title,
      description: flashdeck.description,
      color: flashdeck.color,
      createdAt: flashdeck.createdAt,
      updatedAt: flashdeck.updatedAt,
      flashCardsCount: flashdeck._count.flashCards,
    }))
      .catch((error: any) => repackageToInternalError(error));
  },

  async update(request: FlashdeckUpdateRequest): Promise<Result<FlashdeckResponse>> {
    return await prisma.flashDeck.update({
      select: {
        id: true,
        title: true,
        description: true,
        color: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            flashCards: true,
          }
        }
      },
      where: {id: request.params.flashdeckId},
      data: request.body,
    }).then(flashdeck => Result.ok({
      id: flashdeck.id,
      title: flashdeck.title,
      description: flashdeck.description,
      color: flashdeck.color,
      createdAt: flashdeck.createdAt,
      updatedAt: flashdeck.updatedAt,
      flashCardsCount: flashdeck._count.flashCards,
    }))
      .catch((error: any) => repackageToNotFoundError(error))
  },

  async get(flashdeckId: string, withTags: boolean): Promise<Result<FlashdeckResponse>> {
    return await prisma.flashDeck.findUniqueOrThrow(
      {
        select: {
          id: true,
          title: true,
          description: true,
          color: true,
          createdAt: true,
          updatedAt: true,
          tags: withTags,
          _count: {
            select: {
              flashCards: true,
            }
          }
        },
        where: {id: flashdeckId},
      }
    ).then(flashdeck => Result.ok({
      id: flashdeck.id,
      title: flashdeck.title,
      description: flashdeck.description,
      color: flashdeck.color,
      createdAt: flashdeck.createdAt,
      updatedAt: flashdeck.updatedAt,
      tags: flashdeck.tags,
      flashCardsCount: flashdeck._count.flashCards,
    }))
      .catch((error: any) => repackageToNotFoundError(error));
  },

  async delete(flashdeckId: string): Promise<Result<FlashDeck>> {
    return await prisma.flashDeck.delete(
      {
        where: {id: flashdeckId},
      }
    ).then(flashdeck => Result.ok(flashdeck))
      .catch((error: any) => repackageToNotFoundError(error));
  },

  async getAll(withTags: boolean, userId: string): Promise<Result<FlashdeckResponse[]>> {
    return await prisma.flashDeck.findMany(
      {
        select: {
          id: true,
          title: true,
          description: true,
          color: true,
          createdAt: true,
          updatedAt: true,
          tags: withTags,
          _count: {
            select: {
              flashCards: true,
            }
          }
        },
        where: {
          userId: userId,
        }
      }
    ).then(flashdecks => Result.ok(flashdecks.map((flashdeck) => {
        return {
          id: flashdeck.id,
          title: flashdeck.title,
          description: flashdeck.description,
          color: flashdeck.color,
          createdAt: flashdeck.createdAt,
          updatedAt: flashdeck.updatedAt,
          tags: flashdeck.tags,
          flashCardsCount: flashdeck._count.flashCards,

        }
      }
    )))
      .catch((error: any) => repackageToInternalError(error));
  },

  async modifyTag(flashdeckId: string, tagOperation: TagOperation): Promise<Result<null>> {
    return await prisma.flashDeck.update({
      where: {
        id: flashdeckId
      },
      data: {
        tags: tagOperation
      }
    }).then(() => Result.ok(null))
      .catch((error: any) => repackageToNotFoundError(error));
  },

  async getUserId(flashdeckId: string): Promise<Result<string>> {
    return await prisma.flashDeck.findUniqueOrThrow({
      select: {
        userId: true
      },
      where: {
        id: flashdeckId,
      }
    }).then((res) => Result.ok(res.userId))
      .catch((error: any) => repackageToNotFoundError(error));
  }
}