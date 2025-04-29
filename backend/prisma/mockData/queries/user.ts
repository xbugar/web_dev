import { prisma } from "../client"

export async function addUser(firstName: string, lastName: string, email: string, hashedPassword: string, salt: string, pictureId: string) {
    return prisma.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            hashedPassword: hashedPassword,
            passwordSalt: salt,
            profilePictureId: pictureId,
        },
    })
}

