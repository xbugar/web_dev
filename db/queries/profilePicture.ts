import {prisma} from '../client'
import {readFileSync} from 'fs'
import {basename} from 'path'

export async function removeProfilePicture(filename: string) {
    prisma.profilePicture.delete({where: {filename: filename}})
        .then(() => {
            console.log(`picture: ${filename} removed`)
        });
}


export async function getProfilePicture(filename: string) {
    return prisma.profilePicture.findUnique({where: {filename: filename}})
}


export async function addProfilePicture(path: string) {
    const filename = basename(path);
    const file = readFileSync(path);

    await prisma.profilePicture.create({
        data: {
            filename: filename,
            picture: file
        }
    });
}


export async function listProfilePictures() {
    return prisma.profilePicture.findMany();
}
