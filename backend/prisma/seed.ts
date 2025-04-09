import { Icon, PrismaClient, ProfilePicture } from '@prisma/client'
import { addProfilePicture } from "../db/queries/profilePicture";
import { addUser, getUserCalendar } from "../db/queries/user";
import { createEvent, addEventTime } from "../db/queries/calendar";
import { addIcon } from "../db/queries/icon";
import {createNote, createNotebook} from "../db/queries/notebook";
import assert from "node:assert";
import {createFlashAnswer, createFlashCard, createFlashDeck} from "../db/queries/FlashDeck";

const prisma = new PrismaClient()

async function createUserWithEvents(picture: ProfilePicture) {
    const user = await addUser("Natalka", "", "example@mail.ls", "", "", picture.id);
    const userCalendar = await getUserCalendar(user.id);
    assert(userCalendar);
    const userEvent = await createEvent(userCalendar.id, "sumn", new Date(), new Date());
    await addEventTime(userEvent.id, new Date(), new Date());
    return user;
}



async function createUserWithNotebook(picture: ProfilePicture, icon: Icon) {
    const user = await addUser("Janka", "", "example@mail.cd", "", "", picture.id);
    const userNotebook = await createNotebook(user.id, icon.id, "test Notebook");
    await createNote(userNotebook.id, "test note", "very important message");
    return user;
}


async function createUserWithFlashDeck(picture: ProfilePicture, icon: Icon) {
    const user = await addUser("Jozef", "", "example@mail.rm", "", "", picture.id);
    const userFlashDeck = await createFlashDeck(user.id, icon.id, "test FlashDeck");
    const userFlashCard = await createFlashCard(userFlashDeck.id, "Are traps gay?");
    const userFlashAnswer1 = await createFlashAnswer(userFlashCard.id, "yes", false);
    const userFlashAnswer2 = await createFlashAnswer(userFlashCard.id, "no", true);
    return user;
}


async function main() {
    const picture = await addProfilePicture("db/mockData/default-profile.jpg");
    const icon = await addIcon("db/mockData/exclamation.svg");


    createUserWithEvents(picture).catch(ex => console.error("something went wrong: createUserWithEvents\n", ex));
    createUserWithNotebook(picture, icon).catch(ex => console.error("something went wrong: createUserWithNoteBook\n", ex));
    createUserWithFlashDeck(picture, icon).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
    addUser("Tomas", "", "example@mail.ps", "", "", picture.id).catch(ex => console.error(ex));
    addUser("andrej", "", "example@mail.sh", "", "", picture.id).catch(ex => console.error(ex));

}

main().then(() => {
    console.log("Disconnected successfully.");
}). catch(e => {
    console.error("creating mock data unsuccessful", e);
}).finally(() => {
    prisma.$disconnect();
})

