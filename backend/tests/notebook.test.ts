import {describe, expect, it} from 'vitest'
import request from 'supertest'
import app from '../test.index'
import {prisma} from "./utils/prisma";
import {defaultIcon} from "../apis/utils";


describe("/notebook", async () => {

    describe("happy path", async () => {
        let id: string;
        let notebookId: string;
        let tagId: string;
        it('creates a user in database and sends it back with 200', async () => {
            const {status, body} = await request(app).post('/user').send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john2@doe.com',
                password: '123456',
            });

            const newUser = await prisma.user.findFirst({where: {email: "john2@doe.com"}});
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
            id = body.id;
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
                    _count: {
                        select: {
                            notes: true,
                        }
                    }
                },
                where:
                    {
                        userId: id,
                        title: "notebucik",
                    }
            });
            expect(body).toMatchObject(
                {
                    id: notebook.id,
                    title: "notebucik",
                    description: "neeimeme",
                    color: "green",
                    iconId: icon.id,
                    createdAt: notebook.createdAt.toJSON(),
                    updatedAt: notebook.updatedAt.toJSON(),
                    noteCount: notebook._count.notes,
                }
            );
            notebookId = body.id;
        });

        it('should return 200 and creates a notebook in the new way', async () => {
            const {status, body} = await request(app).post('/notebook').send({
                title: "notebucik 2",
                description: "neeimeme",
                color: "green",
                iconId: null,
                userId: id
            });


            expect(status).toBe(200);
            const notebook = await prisma.notebook.findFirstOrThrow(
                {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        color: true,
                        createdAt: true,
                        updatedAt: true,
                        iconId: true,
                        _count: {
                            select: {
                                notes: true,
                            }
                        }
                    },
                    where: {
                        userId: id,
                        title: "notebucik 2",
                    }
                }
            );
            expect(body).toMatchObject(
                {
                    id: notebook.id,
                    title: "notebucik 2",
                    description: "neeimeme",
                    color: "green",
                    iconId: null,
                    createdAt: notebook.createdAt.toJSON(),
                    updatedAt: notebook.updatedAt.toJSON(),
                    noteCount: notebook._count.notes,
                }
            );
        });

        it('should change the description of a notebook  and return 200 ', async () => {
            const {status, body} = await request(app).put("/notebook/" + notebookId).send({
                title: "notebucik",
                description: "uplne novy a zmeneny description",
                color: "green",
                iconId: null
            });

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
                    _count: {
                        select: {
                            notes: true,
                        }
                    }
                },
                where:
                    {
                        userId: id,
                        title: "notebucik",
                    }
            });
            expect(body).toMatchObject({
                id: notebook.id,
                title: notebook.title,
                description: notebook.description,
                color: notebook.color,
                createdAt: notebook.createdAt.toJSON(),
                updatedAt: notebook.updatedAt.toJSON(),
                iconId: notebook.iconId,
                noteCount: notebook._count.notes,
            });


        });

        it('should retrieve both newly created notebooks', async () => {
            const {status, body} = await request(app).get(`/user/${id}/notebooks`).send({});

            expect(status).toBe(200);
            expect(body.length).toBe(2);
        });
        it("should add new tag to the notebook", async () => {
            const tag = await prisma.tag.create({
                data: {
                    tag: "testovaci tag",
                    color: "purple",
                    userId: id,
                }
            });
            tagId = tag.id;
            const {status, body} = await request(app).post(`/notebook/${notebookId}/tag/${tagId}`).send({});

            expect(status).toBe(200);

        });

        it("should retrieve the notebook by id", async () => {
            const {status, body} = await request(app).get(`/notebook/${notebookId}`).send({});

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
                    tags: true,
                    _count: {
                        select: {
                            notes: true,
                        }
                    }
                },
                where:
                    {
                        id: notebookId
                    }
            });
            expect(body).toMatchObject({
                id: notebook.id,
                title: notebook.title,
                description: notebook.description,
                color: notebook.color,
                createdAt: notebook.createdAt.toJSON(),
                updatedAt: notebook.updatedAt.toJSON(),
                iconId: notebook.iconId,
                noteCount: notebook._count.notes,
                tags: notebook.tags,
            });
        });
        it("should remove one of the tags added before", async () => {
            const {status,body} = await request(app).delete(`/notebook/${notebookId}/tag/${tagId}`).send({});

            expect(status).toBe(200);
        })

        it('should delete the notebook', async () => {
            const {status,body} = await request(app).delete(`/notebook/${notebookId}`).send({});

            expect(status).toBe(200);
            const notebook = await prisma.notebook.findFirst({where: {id: notebookId}});
            expect(notebook).toBe(null);
        });

    });
});