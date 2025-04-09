import { prisma } from '../client'


export async function createEvent(calendarId: string, title: string, dateStart: Date, dateEnd: Date) {
    return prisma.event.create({
        data: {
            title: title,
            calendarId: calendarId,
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
    })
}


export async function addEventTime(eventId: string, dateTimeStart: Date, dateTimeEnd: Date) {
    return prisma.eventTime.create({
        data: {
            eventId: eventId,
            dateTimeStart: dateTimeStart,
            dateTimeEnd: dateTimeEnd,
        }
    })
}


