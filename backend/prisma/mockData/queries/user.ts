import { prisma } from "../client"

export async function addUser(firstName: string, lastName: string, email: string, password: string, pictureId: string) {
    return prisma.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            profilePictureId: pictureId,
        },
    })
}

