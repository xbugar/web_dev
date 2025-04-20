import { prisma } from '../client'

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



export async function createFlashAnswer(flashCardId: string, answer: string, isCorrect: boolean) {
    return prisma.flashAnswer.create({
        data: {
            flashCardId: flashCardId,
            answer: answer,
            isCorrect: isCorrect
        }
    })
}
