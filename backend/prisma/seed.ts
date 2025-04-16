import {Icon, Importance, PrismaClient, ProfilePicture} from "@prisma/client";
import { addProfilePicture } from "../db/queries/profilePicture";
import { addUser } from "../db/queries/user";
import { createEvent, addEventTime } from "../db/queries/event";
import { addIcon } from "../db/queries/icon";
import {createNote, createNotebook} from "../db/queries/notebook";
import {createFlashAnswer, createFlashCard, createFlashDeck} from "../db/queries/FlashDeck";
import { faker } from '@faker-js/faker';
import {addEventTag, addFlashDeckTag, addNotebookTag, addNoteTag, createTag} from "../db/queries/tag";

const prisma = new PrismaClient();

async function createUserWithEvents(name: string, mail: string, picture: ProfilePicture) {
    const user = await addUser(name, "", mail, "", "", picture.id);
    const userEvent = await createEvent(user.id, "", new Date(), new Date(), Importance.HIGH, faker.color.rgb(), "");
    await addEventTime(userEvent.id, new Date(), new Date());
    return user;
}

async function createUserWithNotebook(name: string, mail: string, picture: ProfilePicture, icon: Icon, noteContent: string) {
    const user = await addUser(name, "", mail, "", "", picture.id);
    const userNotebook = await createNotebook(user.id, icon.id, "test Notebook", "", faker.color.rgb());
    await createNote(userNotebook.id, "test Note", noteContent, faker.color.rgb());
    return user;
}


async function createUserWithFlashDeck(name: string, mail: string, picture: ProfilePicture, icon: Icon) {
    const user = await addUser(name, "", mail, "", "", picture.id);
    const userFlashDeck = await createFlashDeck(user.id, icon.id, "test FlashDeck", "", faker.color.rgb());
    const userFlashCard = await createFlashCard(userFlashDeck.id, "Are traps gay?");
    const userFlashAnswer1 = await createFlashAnswer(userFlashCard.id, "yes", false);
    const userFlashAnswer2 = await createFlashAnswer(userFlashCard.id, "no", true);
    return user;
}

async function createUserWithTags(name: string, mail: string, picture: ProfilePicture, icon: Icon, tagg: string, color: string) {
    const user = await addUser(name, "", mail, "", "", picture.id);
    const tag = await createTag(user.id, tagg, color);
    const notebook = await createNotebook(user.id, icon.id, "tagged Notebook", "", faker.color.rgb());
    const flashDeck = await createFlashDeck(user.id, icon.id, "tagged FlashDeck", "", faker.color.rgb());
    const event = await createEvent(user.id, "tagged Event", new Date(), new Date(), Importance.LOW, faker.color.rgb(), "");
    const note = await createNote(notebook.id, "tagged Note", "", "#123456");
    await addNotebookTag(tag.id, notebook.id);
    await addEventTag(tag.id, event.id);
    await addFlashDeckTag(tag.id, flashDeck.id);
    await addNoteTag(tag.id, note.id);
}


async function main() {
    const picture = await addProfilePicture("db/mockData/default-profile.jpg");
    const icon = await addIcon("db/mockData/exclamation.svg");


    createUserWithEvents("Natalka", "example@mail.ls",picture).catch(ex => console.error("something went wrong: createUserWithEvents\n", ex));
    createUserWithNotebook("Janka", "example@mail.cd", picture, icon, "test Note").catch(ex => console.error("something went wrong: createUserWithNoteBook\n", ex));
    createUserWithFlashDeck("Jozef", "example@mail.rm", picture, icon).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
    createUserWithTags("Tomas", "example@mail.ps", picture, icon, "pb138", "#987456").catch(ex => console.error(ex));
    addUser("andrej", "", "example@mail.sh", "", "", picture.id).catch(ex => console.error(ex));

    for (let i = 0; i < 20; i++) {
        createUserWithEvents(faker.person.firstName(), faker.internet.email(), picture).catch(ex => console.error("something went wrong: createUserWithEvents\n", ex));
        createUserWithNotebook(faker.person.firstName(), faker.internet.email(), picture, icon, faker.lorem.paragraphs()).catch(ex => console.error("something went wrong: createUserWithNoteBook\n", ex));
        createUserWithFlashDeck(faker.person.firstName(), faker.internet.email(), picture, icon).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
        createUserWithTags(faker.person.firstName(), faker.internet.email(), picture, icon, faker.word.noun(), faker.color.human()).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
    }
}

main().then(() => {
    console.log("Disconnected successfully.");
}).catch(e => {throw e}).finally(() => {
    prisma.$disconnect();
})

