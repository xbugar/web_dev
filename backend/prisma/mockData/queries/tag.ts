import { prisma } from "../client"

export async function createTag(userId: string, name: string, color: string) {
    return prisma.tag.create({
        data: {
            userId: userId,
            name: name,
            color: color
        }
    })
}


export async function addNotebookTag(tagId: string, notebookId: string) {
    return prisma.notebook.update({
        where: { id: notebookId },
        data: {
            tags: {
                connect: [{id: tagId}]
            }
        }
    });
}

export async function addFlashDeckTag(tagId: string, flashDeckId: string) {
    return prisma.deck.update({
        where: { id: flashDeckId },
        data: {
            tags: {
                connect: [{id: tagId}]
            }
        }
    });
}

export async function addEventTag(tagId: string, eventId: string) {
    return prisma.event.update({
        where: { id: eventId },
        data: {
            tags: {
                connect: [{id: tagId}]
            }
        }
    });
}

export async function addNoteTag(tagId: string, noteId: string) {
    return prisma.note.update({
        where: { id: noteId },
        data: {
            tags: {
                connect: [{id: tagId}]
            }
        }
    });
}

