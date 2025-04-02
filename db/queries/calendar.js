"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = createEvent;
exports.addEventTime = addEventTime;
const client_1 = require("../client");
// export async function getCalendar(id: string) {
//     return prisma.user.findUnique({ where: { id: id } })
// }
function createEvent(calendarId, title, dateStart, dateEnd) {
    return __awaiter(this, void 0, void 0, function* () {
        return client_1.prisma.event.create({
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
        });
    });
}
function addEventTime(eventId, dateTimeStart, dateTimeEnd) {
    return __awaiter(this, void 0, void 0, function* () {
        return client_1.prisma.eventTime.create({
            data: {
                eventId: eventId,
                dateTimeStart: dateTimeStart,
                dateTimeEnd: dateTimeEnd,
            }
        });
    });
}
