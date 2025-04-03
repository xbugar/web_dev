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
exports.createFlashDeck = createFlashDeck;
exports.createFlashCard = createFlashCard;
exports.createFlashAnswer = createFlashAnswer;
const client_1 = require("../client");
function createFlashDeck(userId, iconId, title) {
    return __awaiter(this, void 0, void 0, function* () {
        return client_1.prisma.flashDeck.create({
            data: {
                title: title,
                userId: userId,
                iconId: iconId,
            }
        });
    });
}
function createFlashCard(flashDeckId, question) {
    return __awaiter(this, void 0, void 0, function* () {
        return client_1.prisma.flashCard.create({
            data: {
                question: question,
                flashDeckId: flashDeckId,
            }
        });
    });
}
function createFlashAnswer(flashCardId, answer, isCorrect) {
    return __awaiter(this, void 0, void 0, function* () {
        return client_1.prisma.flashAnswer.create({
            data: {
                flashCardId: flashCardId,
                answer: answer,
                isCorrect: isCorrect
            }
        });
    });
}
