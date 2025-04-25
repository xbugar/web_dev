import {beforeAll, describe, expect, it} from 'vitest'
import request from 'supertest'
import app from '../test.index'
import {prisma} from "./utils/prisma";
import {defaultIcon, defaultPP} from "../apis/utils";

describe("/notebook", async () => {

    describe("happy path", async () => {
        let id:string;

        it('creates a user in database and sends it back with 200', async () => {
            const {status,body} = await request(app).post('/user').send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john2@doe.com',
                password: '123456',
            });
            console.log(body);
            const newUser = await prisma.user.findFirst({where:{email:"john2@doe.com"}});
            // 3
            expect(status).toBe(200);
            // 4
            expect(newUser).not.toBeNull();
            // 5
            expect(body).toStrictEqual({
                id: newUser?.id,
                firstName: 'John',
                lastName: 'Doe',
                email: 'john2@doe.com',
            });
            id =body.id;
        });

        it(`should return 200 and create a notebook`, async () => {

            const icon = await defaultIcon();
            const url = "/user/" + id + "/notebook";
            const {status, body} = await request(app).post(url).send(
                {
                    title: "notebucik",
                    description: "neeimeme",
                    color: "green",
                    iconId: icon.id
                }
            );
            console.log("totoootototot")
            console.log(body);

            expect(status).toBe(200);
            const notebook = await prisma.notebook.findFirstOrThrow({
                select: {
                    id: true,
                    title: true,
                    description: true,
                    color: true,
                    createdAt: true,
                    updatedAt: true,
                    iconId: true,
                    _count:{
                        select: {
                            notes: true,
                        }
                    }
                },
                where:
                    {
                        userId: id
                    }
            });
            expect(body).toMatchObject(
                {id: notebook.id,
                    title: notebook.title,
                    description: notebook.description,
                    color: notebook.color,
                    createdAt: notebook.createdAt.toJSON(),
                    updatedAt: notebook.updatedAt.toJSON(),
                    iconId: notebook.iconId,
                    noteCount: notebook._count.notes,}
            );

        });
    });
});