import { prisma } from '../client'
import { Importance } from "@prisma/client";


export async function createEvent(calendarId: string, title: string, dateStart: Date, dateEnd: Date, importance: Importance, color: string, description: string) {
    return prisma.event.create({
        data: {
            title: title,
            calendarId: calendarId,
            importance: importance,
            color: color,
            description: description,
            eventTimes: {
                create: [
                    {
                        dateTimeStart: dateStart,
                        dateTimeEnd: dateEnd
                    }
                ]
            }
        },
        include: {
            eventTimes: true
        }
    });
}


export async function addEventTime(eventId: string, dateTimeStart: Date, dateTimeEnd: Date) {
    return prisma.eventTime.create({
        data: {
            eventId: eventId,
            dateTimeStart: dateTimeStart,
            dateTimeEnd: dateTimeEnd,
        }
    });
}


