import {prisma} from "./prisma";

export default async (): Promise<void> => {
    //just destroy all the users, this should also empty all the notes and notebooks
    await prisma.$transaction([prisma.user.deleteMany(), prisma.session.deleteMany()]);
}