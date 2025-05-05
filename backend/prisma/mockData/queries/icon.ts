import { prisma } from '../client'
import { readFileSync } from "fs";

export async function addIcon(path: string, name: string) {
    const file = readFileSync(path);

    return prisma.icon.create({
        data: {
            name: name,
            icon: file
        }
    });
}
