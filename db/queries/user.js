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
exports.addUser = addUser;
exports.removeUser = removeUser;
exports.getUserByEmail = getUserByEmail;
exports.getUserCalendar = getUserCalendar;
const client_1 = require("../client");
function addUser(firstName, lastName, email, hashedPassword, salt, pictureId) {
    return __awaiter(this, void 0, void 0, function* () {
        return client_1.prisma.user.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                hashedPassword: hashedPassword,
                passwordSalt: salt,
                profilePictureId: pictureId,
                calendar: {
                    create: {
                        title: firstName + "'s calendar"
                    }
                }
            },
            include: {
                calendar: true
            }
        });
    });
}
function removeUser(mail) {
    return __awaiter(this, void 0, void 0, function* () {
        return client_1.prisma.user.delete({
            where: {
                email: mail
            }
        });
    });
}
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return client_1.prisma.user.findUnique({ where: { email: email } });
    });
}
function getUserCalendar(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return client_1.prisma.calendar.findUnique({ where: { userId: id } });
    });
}
