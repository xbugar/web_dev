import { prisma } from "../prismaClient"
import session from "express-session";


export class PrismaStore extends session.Store {
    async get(sid: string, callback: (err: any, session?: any) => void) {
        try {
            const session = await prisma.session.findUnique({
                where: { id: sid },
            });
            if (!session || new Date() > session.expires) {
                return callback(null, null);
            }
            callback(null, JSON.parse(session.sessionData));
        } catch (err) {
            callback(err);
        }
    }

    async set(sid: string, sessionData: any, callback: (err?: any) => void) {
        try {
            const expires = new Date(Date.now() + sessionData.cookie.maxAge);
            await prisma.session.upsert({
                where: { id: sid },
                update: { sessionData: JSON.stringify(sessionData), expires },
                create: { id: sid, sessionData: JSON.stringify(sessionData), expires, userId: sessionData.userId },
            });
            callback();
        } catch (err) {
            callback(err);
        }
    }

    async destroy(sid: string, callback: (err?: any) => void) {
        try {
            await prisma.session.delete({ where: { id: sid } });
            callback();
        } catch (err) {
            callback(err);
        }
    }
}
