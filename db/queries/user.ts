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

            calendar: {
                create: {
                    title: firstName + "'s calendar"
                }
            }
        },
        include: {
            calendar: true
        }
    })
}

export async function removeUser(mail: string) {
    return prisma.user.delete({
        where: {
            email: mail
        }
    })
}


export async function getUserByEmail(email: string) {
    return prisma.user.findUnique({ where: { email: email } })
}

export async function getUserCalendar(id: string) {
    return prisma.calendar.findUnique({ where: { userId: id } })
}



