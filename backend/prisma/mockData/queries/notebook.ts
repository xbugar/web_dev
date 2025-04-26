import { prisma } from '../client'

export async function createNotebook(userId: string, iconName: string, title: string, description: string, color: string) {
    return prisma.notebook.create({
        data: {
            title: title,
            description: description,
            userId: userId,
            iconName: iconName,
            color: color,
        }
    })
}

export async function createNote(notebookId: string, title: string, content: string, color: string) {
    return prisma.note.create({
        data: {
            title: title,
            color: color,
            notebookId: notebookId,
            content: content,
        }
    })
}

