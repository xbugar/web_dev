import { prisma } from '../client'


export async function createEvent(userId: string, title: string, dateStart: Date, dateEnd: Date, repeats: string) {
    return prisma.event.create({
        data: {
            title: title,
            userId: userId,
            repeat: repeats,
            timeFrom: dateStart,
            timeTo: dateEnd,
        }
    });
}


