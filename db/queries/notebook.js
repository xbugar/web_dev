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
exports.createNotebook = createNotebook;
exports.createNote = createNote;
const client_1 = require("../client");
function createNotebook(userId, iconId, title) {
    return __awaiter(this, void 0, void 0, function* () {
        return client_1.prisma.notebook.create({
            data: {
                title: title,
                userId: userId,
                iconId: iconId,
            }
        });
    });
}
function createNote(notebookId, title, content) {
    return __awaiter(this, void 0, void 0, function* () {
        return client_1.prisma.note.create({
            data: {
                title: title,
                content: content,
                notebookId: notebookId,
            }
        });
    });
}
