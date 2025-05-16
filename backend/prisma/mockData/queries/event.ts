import { prisma } from '../client'
import {Repeat} from "@prisma/client";


export async function createEvent(userId: string, title: string, dateStart: Date, dateEnd: Date, repeats: Repeat) {
    return prisma.event.create({
        data: {
            title: title,
            userId: userId,
            repeats: repeats,
            timeFrom: dateStart,
            timeTo: dateEnd,
        }
    });
}


