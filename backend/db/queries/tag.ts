import { prisma } from "../client"

export async function createTag(userId: string, tag: string, color: string) {
    return prisma.tag.create({
        data: {
            userId: userId,
            tag: tag,
            color: color
        }
    })
}


export async function addNotebookTag(tagId: string, notebookId: string) {
    return prisma.taggable.create({
        data: {
            notebookId: notebookId,
            tagId: tagId
        }
    })
}

export async function addFlashDeckTag(tagId: string, flashDeckId: string) {
    return prisma.taggable.create({
        data: {
            flashDeckId: flashDeckId,
            tagId: tagId
        }
    })
}

export async function addEventTag(tagId: string, eventId: string) {
    return prisma.taggable.create({
        data: {
            eventId: eventId,
            tagId: tagId
        }
    })
}

