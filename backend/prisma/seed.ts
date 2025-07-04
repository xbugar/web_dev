import {PrismaClient} from "@prisma/client";
import {addUser} from "./mockData/queries/user";
import {createEvent} from "./mockData/queries/event";
import {addIcon} from "./mockData/queries/icon";
import {createNote, createNotebook} from "./mockData/queries/notebook";
import {createFlashCard, createFlashDeck} from "./mockData/queries/FlashDeck";
import {faker} from '@faker-js/faker';
import {addEventTag, addFlashDeckTag, addNotebookTag, addNoteTag, createTag} from "./mockData/queries/tag";

const prisma = new PrismaClient();

const colors = ["blue", "green", "red", "purple", "pink", "orange"];

const icons = [
    "Default",
    "Cpu",
    "Layers",
    "ClipboardList",
    "PenTool",
    "BookOpen",
    "Book",
    "FileText",
    "ShieldCheck",
    "Brain",
    "Code",
    "Languages",
    "Pen",
    "Folder",
    "Star",
    "Sun",]


function getRandomValue(array: string[]): string {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

async function createUserWithEvents(name: string, mail: string) {
    const user = await addUser(name, "", mail, "");
    await createEvent(user.id, "", new Date(), new Date(), "Never");
    return user;
}

async function createUserWithNotebook(name: string, mail: string, icon: string, noteContent: string) {
    const user = await addUser(name, "", mail, "");
    const userNotebook = await createNotebook(user.id, icon, "test Notebook", "", getRandomValue(colors));
    await createNote(userNotebook.id, "test Note", noteContent);
    return user;
}


async function createUserWithFlashDeck(name: string, mail: string, icon: string) {
    const user = await addUser(name, "", mail, "");
    const userFlashDeck = await createFlashDeck(user.id, icon, "test FlashDeck", "", getRandomValue(colors));
    await createFlashCard(userFlashDeck.id, "Are traps gay?", "no");
    return user;
}

async function createUserWithTags(name: string, mail: string, icon: string, tagName: string, color: string) {
    const user = await addUser(name, "", mail, "");
    const tag = await createTag(user.id, tagName, color);
    const notebook = await createNotebook(user.id, icon, "tagged Notebook", "", getRandomValue(colors));
    const flashDeck = await createFlashDeck(user.id, icon, "tagged FlashDeck", "", getRandomValue(colors));
    const event = await createEvent(user.id, "tagged Event", new Date(), new Date(), "Never");
    const note = await createNote(notebook.id, "tagged Note", "");
    await addNotebookTag(tag.id, notebook.id);
    await addEventTag(tag.id, event.id);
    await addFlashDeckTag(tag.id, flashDeck.id);
    await addNoteTag(tag.id, note.id);
}

async function seedAllIcons() {
    for (const iconName of icons) {
        await addIcon(iconName);
    }
}

async function main() {
    await seedAllIcons()

    createUserWithEvents("Natalka", "example@mail.ls").catch(ex => console.error("something went wrong: createUserWithEvents\n", ex));
    createUserWithNotebook("Janka", "example@mail.cd", getRandomValue(icons), "test Note").catch(ex => console.error("something went wrong: createUserWithNoteBook\n", ex));
    createUserWithFlashDeck("Jozef", "example@mail.rm", getRandomValue(icons)).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
    createUserWithTags("Tomas", "example@mail.ps", getRandomValue(icons), "pb138", "orange").catch(ex => console.error(ex));
    addUser("andrej", "", "example@mail.sh", "").catch(ex => console.error(ex));

    for (let i = 0; i < 20; i++) {
        createUserWithEvents(faker.person.firstName(), faker.internet.email()).catch(ex => console.error("something went wrong: createUserWithEvents\n", ex));
        createUserWithNotebook(faker.person.firstName(), faker.internet.email(), getRandomValue(icons), faker.lorem.paragraphs()).catch(ex => console.error("something went wrong: createUserWithNoteBook\n", ex));
        createUserWithFlashDeck(faker.person.firstName(), faker.internet.email(), getRandomValue(icons)).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
        createUserWithTags(faker.person.firstName(), faker.internet.email(), getRandomValue(icons), faker.word.noun(), getRandomValue(colors)).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
    }
}

main().then(() => {
    console.log("Disconnected successfully.");
}).catch(e => {
    throw e
}).finally(() => {
    prisma.$disconnect();
})

