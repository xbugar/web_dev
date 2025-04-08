import {Icon, Importance, PrismaClient, ProfilePicture} from '@prisma/client'
import { addProfilePicture } from "../db/queries/profilePicture";
import { addUser, getUserCalendar } from "../db/queries/user";
import { createEvent, addEventTime } from "../db/queries/calendar";
import { addIcon } from "../db/queries/icon";
import {createNote, createNotebook} from "../db/queries/notebook";
import assert from "node:assert";
import {createFlashAnswer, createFlashCard, createFlashDeck} from "../db/queries/FlashDeck";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient()

async function createUserWithEvents(name: string, mail: string, picture: ProfilePicture) {
    const user = await addUser(name, "", mail, "", "", picture.id);
    const userCalendar = await getUserCalendar(user.id);
    assert(userCalendar);
    const userEvent = await createEvent(userCalendar.id, "", new Date(), new Date(), Importance.HIGH, "red", "");
    await addEventTime(userEvent.id, new Date(), new Date());
    return user;
}



async function createUserWithNotebook(name: string, mail: string, picture: ProfilePicture, icon: Icon) {
    const user = await addUser(name, "", mail, "", "", picture.id);
    const userNotebook = await createNotebook(user.id, icon.id, "test Notebook", "", "red");
    await createNote(userNotebook.id, "test note", "red");
    return user;
}


async function createUserWithFlashDeck(name: string, mail: string, picture: ProfilePicture, icon: Icon) {
    const user = await addUser(name, "", mail, "", "", picture.id);
    const userFlashDeck = await createFlashDeck(user.id, icon.id, "test FlashDeck", "", "red");
    const userFlashCard = await createFlashCard(userFlashDeck.id, "Are traps gay?");
    const userFlashAnswer1 = await createFlashAnswer(userFlashCard.id, "yes", false);
    const userFlashAnswer2 = await createFlashAnswer(userFlashCard.id, "no", true);
    return user;
}


async function main() {
    const picture = await addProfilePicture("db/mockData/default-profile.jpg");
    const icon = await addIcon("db/mockData/exclamation.svg");


    createUserWithEvents("Natalka", "example@mail.ls",picture).catch(ex => console.error("something went wrong: createUserWithEvents\n", ex));
    createUserWithNotebook("Janka", "example@mail.cd", picture, icon).catch(ex => console.error("something went wrong: createUserWithNoteBook\n", ex));
    createUserWithFlashDeck("Jozef", "example@mail.rm", picture, icon).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
    addUser("Tomas", "", "example@mail.ps", "", "", picture.id).catch(ex => console.error(ex));
    addUser("andrej", "", "example@mail.sh", "", "", picture.id).catch(ex => console.error(ex));

    for (let i = 0; i < 100; i++) {
        createUserWithEvents(faker.person.firstName(), faker.internet.email(),picture).catch(ex => console.error("something went wrong: createUserWithEvents\n", ex));
        createUserWithNotebook(faker.person.firstName(), faker.internet.email(), picture, icon).catch(ex => console.error("something went wrong: createUserWithNoteBook\n", ex));
        createUserWithFlashDeck(faker.person.firstName(), faker.internet.email(), picture, icon).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
    }


}

main().then(() => {
    console.log("Disconnected successfully.");
}). catch(e => {
    console.error("creating mock data unsuccessful", e);
}).finally(() => {
    prisma.$disconnect();
})

