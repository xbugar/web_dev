import {Icon, Importance, PrismaClient, ProfilePicture} from "@prisma/client";
import { addProfilePicture } from "./mockData/queries/profilePicture";
import { addUser } from "./mockData/queries/user";
import { createEvent, addEventTime } from "./mockData/queries/event";
import { addIcon } from "./mockData/queries/icon";
import {createNote, createNotebook} from "./mockData/queries/notebook";
import {createFlashAnswer, createFlashCard, createFlashDeck} from "./mockData/queries/FlashDeck";
import { faker } from '@faker-js/faker';
import { addEventTag, addFlashDeckTag, addNotebookTag, addNoteTag, createTag } from "./mockData/queries/tag";

const prisma = new PrismaClient();

const colors = ["blue", "green", "red","purple", "pink","orange"];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

async function createUserWithEvents(name: string, mail: string, picture: ProfilePicture) {
    const user = await addUser(name, "", mail, "", picture.id);
    const userEvent = await createEvent(user.id, "", new Date(), new Date(), Importance.HIGH, getRandomColor(), "");
    await addEventTime(userEvent.id, new Date(), new Date());
    return user;
}

async function createUserWithNotebook(name: string, mail: string, picture: ProfilePicture, icon: Icon, noteContent: string) {
    const user = await addUser(name, "", mail, "", picture.id);
    const userNotebook = await createNotebook(user.id, icon.name, "test Notebook", "", getRandomColor());
    await createNote(userNotebook.id, "test Note", noteContent);
    return user;
}


async function createUserWithFlashDeck(name: string, mail: string, picture: ProfilePicture, icon: Icon) {
    const user = await addUser(name, "", mail, "", picture.id);
    const userFlashDeck = await createFlashDeck(user.id, icon.name, "test FlashDeck", "", getRandomColor());
    const userFlashCard = await createFlashCard(userFlashDeck.id, "Are traps gay?");
    await createFlashAnswer(userFlashCard.id, "yes", false);
    await createFlashAnswer(userFlashCard.id, "no", true);
    return user;
}

async function createUserWithTags(name: string, mail: string, picture: ProfilePicture, icon: Icon, tagName: string, color: string) {
    const user = await addUser(name, "", mail, "", picture.id);
    const tag = await createTag(user.id, tagName, color);
    const notebook = await createNotebook(user.id, icon.name, "tagged Notebook", "", getRandomColor());
    const flashDeck = await createFlashDeck(user.id, icon.name, "tagged FlashDeck", "", getRandomColor());
    const event = await createEvent(user.id, "tagged Event", new Date(), new Date(), Importance.LOW, getRandomColor(), "");
    const note = await createNote(notebook.id, "tagged Note", "");
    await addNotebookTag(tag.id, notebook.id);
    await addEventTag(tag.id, event.id);
    await addFlashDeckTag(tag.id, flashDeck.id);
    await addNoteTag(tag.id, note.id);
}


async function main() {
    const picture = await addProfilePicture("prisma/mockData/default-profile.jpg");
    const icon = await addIcon("prisma/mockData/exclamation.svg", "default");


    createUserWithEvents("Natalka", "example@mail.ls",picture).catch(ex => console.error("something went wrong: createUserWithEvents\n", ex));
    createUserWithNotebook("Janka", "example@mail.cd", picture, icon, "test Note").catch(ex => console.error("something went wrong: createUserWithNoteBook\n", ex));
    createUserWithFlashDeck("Jozef", "example@mail.rm", picture, icon).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
    createUserWithTags("Tomas", "example@mail.ps", picture, icon, "pb138", "#987456").catch(ex => console.error(ex));
    addUser("andrej", "", "example@mail.sh", "",picture.id).catch(ex => console.error(ex));

    for (let i = 0; i < 20; i++) {
        createUserWithEvents(faker.person.firstName(), faker.internet.email(), picture).catch(ex => console.error("something went wrong: createUserWithEvents\n", ex));
        createUserWithNotebook(faker.person.firstName(), faker.internet.email(), picture, icon, faker.lorem.paragraphs()).catch(ex => console.error("something went wrong: createUserWithNoteBook\n", ex));
        createUserWithFlashDeck(faker.person.firstName(), faker.internet.email(), picture, icon).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
        createUserWithTags(faker.person.firstName(), faker.internet.email(), picture, icon, faker.word.noun(), getRandomColor()).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
    }
}

main().then(() => {
    console.log("Disconnected successfully.");
}).catch(e => {throw e}).finally(() => {
    prisma.$disconnect();
})

