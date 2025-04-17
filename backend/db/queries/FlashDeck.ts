import { prisma } from '../client'
import { FlashDeck } from '@prisma/client';

export async function createFlashDeck(userId: string, iconId: string, title: string, description: string, color: string) {
    return prisma.flashDeck.create({
        data: {
            title: title,
            description: description,
            color: color,
            userId: userId,
            iconId: iconId,
        }
    })
}

export async function createFlashCard(flashDeckId: string, question: string) {
    return prisma.flashCard.create({
        data: {
            question: question,
            flashDeckId: flashDeckId,
        }
    })
}

export async function getFlashCards(flashDeckId: string) {
    return prisma.flashCard.findMany({
        where: {
            flashDeckId: flashDeckId
        },
        include: {
            answers: true
        }
    });
}


export async function createFlashAnswer(flashCardId: string, answer: string, isCorrect: boolean) {
    return prisma.flashAnswer.create({
        data: {
            flashCardId: flashCardId,
            answer: answer,
            isCorrect: isCorrect
        }
    })
}
