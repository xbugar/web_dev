import { prisma } from '../client'
import { readFileSync } from "fs";

export async function addIcon(name: string) {
    return prisma.icon.create({
        data: {
            name: name,
        }
    });
}
