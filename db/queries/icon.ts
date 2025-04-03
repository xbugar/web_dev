import { prisma } from '../client'
import { readFileSync } from "fs";

export async function addIcon(path: string) {
    const file = readFileSync(path);

    return prisma.icon.create({
        data: {
            icon: file
        }
    });
}
