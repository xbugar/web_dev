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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const profilePicture_1 = require("../db/queries/profilePicture");
const user_1 = require("../db/queries/user");
const calendar_1 = require("../db/queries/calendar");
const icon_1 = require("../db/queries/icon");
const notebook_1 = require("../db/queries/notebook");
const node_assert_1 = __importDefault(require("node:assert"));
const FlashDeck_1 = require("../db/queries/FlashDeck");
const prisma = new client_1.PrismaClient();
function createUserWithEvents(picture) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield (0, user_1.addUser)("Natalka", "Ligacova", "example@mail.ls", "", "", picture.id);
        const userCalendar = yield (0, user_1.getUserCalendar)(user.id);
        (0, node_assert_1.default)(userCalendar);
        const userEvent = yield (0, calendar_1.createEvent)(userCalendar.id, "sumn", new Date(), new Date());
        yield (0, calendar_1.addEventTime)(userEvent.id, new Date(), new Date());
        return user;
    });
}
function createUserWithNotebook(picture, icon) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield (0, user_1.addUser)("Janka", "Kmoskova", "example@mail.cd", "", "", picture.id);
        const userNotebook = yield (0, notebook_1.createNotebook)(user.id, icon.id, "test Notebook");
        yield (0, notebook_1.createNote)(userNotebook.id, "test note", "very important message");
        return user;
    });
}
function createUserWithFlashDeck(picture, icon) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield (0, user_1.addUser)("Jozef", "Hoschek", "example@mail.rm", "", "", picture.id);
        const userFlashDeck = yield (0, FlashDeck_1.createFlashDeck)(user.id, icon.id, "test FlashDeck");
        const userFlashCard = yield (0, FlashDeck_1.createFlashCard)(userFlashDeck.id, "Are traps gay?");
        const userFlashAnswer1 = yield (0, FlashDeck_1.createFlashAnswer)(userFlashCard.id, "yes", false);
        const userFlashAnswer2 = yield (0, FlashDeck_1.createFlashAnswer)(userFlashCard.id, "no", true);
        return user;
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const picture = yield (0, profilePicture_1.addProfilePicture)("db/mockData/default-profile.jpg");
        const icon = yield (0, icon_1.addIcon)("db/mockData/exclamation.svg");
        createUserWithEvents(picture).catch(ex => console.error("something went wrong: createUserWithEvents\n", ex));
        createUserWithNotebook(picture, icon).catch(ex => console.error("something went wrong: createUserWithNoteBook\n", ex));
        createUserWithFlashDeck(picture, icon).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
        const tomPromise = (0, user_1.addUser)("Tomas", "Nezabudnipridatpotom", "example@mail.ps", "", "", picture.id);
        const andPromise = (0, user_1.addUser)("andrej", "bugar", "example@mail.sh", "", "", picture.id);
    });
}
main().then(() => {
    console.log("Disconnected successfully.");
}).catch(e => {
    console.error("creating mock data unsuccessful", e);
}).finally(() => {
    prisma.$disconnect();
});
