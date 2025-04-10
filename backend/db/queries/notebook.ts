import { prisma } from '../client'

export async function createNotebook(userId: string, iconId: string, title: string) {
    return prisma.notebook.create({
        data: {
            title: title,
            userId: userId,
            iconId: iconId,
        }
    })
}

export async function createNote(notebookId: string, title: string, content: string) {
    return prisma.note.create({
        data: {
            title: title,
            content: content,
            notebookId: notebookId,
        }
    })
}

