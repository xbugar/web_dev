import {PrismaClient, ProfilePicture, Repeat} from "@prisma/client";
import {addProfilePicture} from "./mockData/queries/profilePicture";
import {addUser} from "./mockData/queries/user";
import {createEvent} from "./mockData/queries/event";
import {addIcon} from "./mockData/queries/icon";
import {createNote, createNotebook} from "./mockData/queries/notebook";
import {createFlashAnswer, createFlashCard, createFlashDeck} from "./mockData/queries/FlashDeck";
import {faker} from '@faker-js/faker';
import {addEventTag, addFlashDeckTag, addNotebookTag, addNoteTag, createTag} from "./mockData/queries/tag";

const prisma = new PrismaClient();

const colors = ["blue", "green", "red", "purple", "pink", "orange"];

const icons = ["Default",
    "Cpu",
    "Layers",
    "ClipboardList",
    "PenTool",
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

async function createUserWithEvents(name: string, mail: string, picture: ProfilePicture) {
    const user = await addUser(name, "", mail, "",  picture.id);
    await createEvent(user.id, "", new Date(), new Date(), Repeat.TWO_WEEKS);
    return user;
}

async function createUserWithNotebook(name: string, mail: string, picture: ProfilePicture, icon: string, noteContent: string) {
    const user = await addUser(name, "", mail, "",  picture.id);
    const userNotebook = await createNotebook(user.id, icon, "test Notebook", "", getRandomValue(colors));
    await createNote(userNotebook.id, "test Note", noteContent);
    return user;
}


async function createUserWithFlashDeck(name: string, mail: string, picture: ProfilePicture, icon: string) {
    const user = await addUser(name, "", mail, "",  picture.id);
    const userFlashDeck = await createFlashDeck(user.id, icon, "test FlashDeck", "", getRandomValue(colors));
    const userFlashCard = await createFlashCard(userFlashDeck.id, "Are traps gay?");
    await createFlashAnswer(userFlashCard.id, "yes", false);
    await createFlashAnswer(userFlashCard.id, "no", true);
    return user;
}

async function createUserWithTags(name: string, mail: string, picture: ProfilePicture, icon: string, tagName: string, color: string) {
    const user = await addUser(name, "", mail, "",  picture.id);
    const tag = await createTag(user.id, tagName, color);
    const notebook = await createNotebook(user.id, icon, "tagged Notebook", "", getRandomValue(colors));
    const flashDeck = await createFlashDeck(user.id, icon, "tagged FlashDeck", "", getRandomValue(colors));
    const event = await createEvent(user.id, "tagged Event", new Date(), new Date(), Repeat.YEAR);
    const note = await createNote(notebook.id, "tagged Note", "");
    await addNotebookTag(tag.id, notebook.id);
    await addEventTag(tag.id, event.id);
    await addFlashDeckTag(tag.id, flashDeck.id);
    await addNoteTag(tag.id, note.id);
}

async function seedAllIcons() {
    for (const iconName of icons) {
        await addIcon("prisma/mockData/exclamation.svg", iconName);
    }
}

async function main() {
    const picture = await addProfilePicture("prisma/mockData/default-profile.jpg");
    await seedAllIcons()

    createUserWithEvents("Natalka", "example@mail.ls", picture).catch(ex => console.error("something went wrong: createUserWithEvents\n", ex));
    createUserWithNotebook("Janka", "example@mail.cd", picture, getRandomValue(icons), "test Note").catch(ex => console.error("something went wrong: createUserWithNoteBook\n", ex));
    createUserWithFlashDeck("Jozef", "example@mail.rm", picture, getRandomValue(icons)).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
    createUserWithTags("Tomas", "example@mail.ps", picture, getRandomValue(icons), "pb138", "#987456").catch(ex => console.error(ex));
    addUser("andrej", "", "example@mail.sh", "",  picture.id).catch(ex => console.error(ex));

    for (let i = 0; i < 20; i++) {
        createUserWithEvents(faker.person.firstName(), faker.internet.email(), picture).catch(ex => console.error("something went wrong: createUserWithEvents\n", ex));
        createUserWithNotebook(faker.person.firstName(), faker.internet.email(), picture, getRandomValue(icons), faker.lorem.paragraphs()).catch(ex => console.error("something went wrong: createUserWithNoteBook\n", ex));
        createUserWithFlashDeck(faker.person.firstName(), faker.internet.email(), picture, getRandomValue(icons)).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
        createUserWithTags(faker.person.firstName(), faker.internet.email(), picture, getRandomValue(icons), faker.word.noun(), getRandomValue(colors)).catch(ex => console.error("something went wrong: createUserWithFlashDeck\n", ex));
    }
}

main().then(() => {
    console.log("Disconnected successfully.");
}).catch(e => {
    throw e
}).finally(() => {
    prisma.$disconnect();
})

