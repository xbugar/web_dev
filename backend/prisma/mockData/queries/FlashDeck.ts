import { prisma } from '../client'

export async function createFlashDeck(userId: string, iconName: string, title: string, description: string, color: string) {
    return prisma.deck.create({
        data: {
            title: title,
            description: description,
            color: color,
            userId: userId,
        }
    });
}

export async function createFlashCard(flashDeckId: string, question: string, answer: string) {
    return prisma.card.create({
        data: {
            question: question,
            deckId: flashDeckId,
            answer: answer
        }
    });
}
