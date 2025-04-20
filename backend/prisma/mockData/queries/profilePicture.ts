import {prisma} from '../client'
import {readFileSync} from 'fs'


export async function addProfilePicture(path: string) {
    const file = readFileSync(path);

    return prisma.profilePicture.create({
        data: {
            picture: file
        }
    })
}
