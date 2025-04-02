import {PrismaClient, ProfilePicture} from '@prisma/client'
import { addProfilePicture } from "../db/queries/profilePicture";
import { addUser, getUserCalendar } from "../db/queries/user";
import { createEvent, addEventTime } from "../db/queries/calendar";
import assert from "node:assert";

const prisma = new PrismaClient()

async function createUserWithEvents(picture: ProfilePicture) {
    const nat = await addUser("Natalka", "Ligacova", "example@mail.ls", "", "", picture.id);
    const natCalendar = await getUserCalendar(nat.id);
    assert(natCalendar);
    const natEvent = await createEvent(natCalendar.id, "sumn", new Date(), new Date());
    await addEventTime(natEvent.id, new Date(), new Date());
}


async function main() {
    await addProfilePicture("db/mockData/default-profile.jpg");
    const picture = await prisma.profilePicture.findUnique({where: {filename: "default-profile.jpg"}});
    if (picture == null) {
        throw new Error("No profile picture");
    }
    createUserWithEvents(picture).catch(ex => console.error("something went wrong: createUserWithEvents\n", ex));
    const janPromise = addUser("Janka", "Kmoskova", "example@mail.cd", "", "", picture.id);
    const jozPromise = addUser("Jozef", "Hoschek", "example@mail.rm", "", "", picture.id);
    const tomPromise = addUser("Tomas", "Nezabudnipridatpotom", "example@mail.ps", "", "", picture.id);
    const andPromise = addUser("andrej", "bugar", "example@mail.sh", "", "", picture.id);

}

main().then(() => {
    console.log("Disconnected successfully.");
}). catch(e => {
    console.error("creating mock data unsuccessful", e);
}).finally(() => {
    prisma.$disconnect();
})

