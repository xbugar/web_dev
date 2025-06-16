import {describe, expect, it} from 'vitest'
import request from 'supertest'
import app from '../test.index'
import {prisma} from "./utils/prisma";


describe("/notebook", async () => {

    describe("happy path", async () => {

        it('just does the happy path', async () => {
            let notebookId: string;
            let tagId: string;

            const res = await request(app).post('/auth/register').send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john_pes@doe.com',
                password: '123456',
                confirmPassword: '123456'
            });
            const newUser = await prisma.user.findFirst({
                where: {
                    email: "john_pes@doe.com",
                }
            });


            expect(res.status).toBe(200);
            expect(res.body).toStrictEqual({message: "success"});
            expect(newUser).not.toBeNull();

            const cookie = res.headers['set-cookie'][0];
            {
                const url = "/user/notebook";
                const {status, body} = await request(app).post(url).set("Cookie", cookie).send(
                    {
                        title: "notebucik_book",
                        description: "neeimeme",
                        color: "green",
                        iconName: "Default"
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
                        iconName: true,
                        _count: {
                            select: {
                                notes: true,
                            }
                        }
                    },
                    where:
                        {
                            title: "notebucik_book",
                        }
                });
                expect(body).toMatchObject(
                    {
                        id: notebook.id,
                        title: "notebucik_book",
                        description: "neeimeme",
                        color: "green",
                        iconName: "Default",
                        createdAt: notebook.createdAt.toJSON(),
                        updatedAt: notebook.updatedAt.toJSON(),
                        noteCount: notebook._count.notes,
                    }
                );
                notebookId = body.id;
            }

            {
                const {status, body} = await request(app).post('/notebook').set("Cookie", cookie).send({
                    title: "notebucik 2_book",
                    description: "neeimeme",
                    color: "green",
                    iconName: "Default",
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
                            iconName: true,
                            _count: {
                                select: {
                                    notes: true,
                                }
                            }
                        },
                        where: {
                            title: "notebucik 2_book",
                        }
                    }
                );
                expect(body).toMatchObject(
                    {
                        id: notebook.id,
                        title: "notebucik 2_book",
                        description: "neeimeme",
                        color: "green",
                        iconName: "Default",
                        createdAt: notebook.createdAt.toJSON(),
                        updatedAt: notebook.updatedAt.toJSON(),
                        noteCount: notebook._count.notes,
                    }
                );
            }

            {
                const {status, body} = await request(app).get('/user/notebooks').set("Cookie", cookie).send({});
                expect(status).toBe(200);
                expect(body.length).toBe(2);
                //const notebooks= await prisma.user.findUniqueOrThrow({where:{id:id},select:{notebooks:true}});
                //expect(body).toMatchObject(notebooks.notebooks);
            }

            {
                const {status, body} = await request(app).put("/notebook/" + notebookId).set("Cookie", cookie).send({
                    title: "notebucik_book",
                    description: "uplne novy a zmeneny description",
                    color: "green",
                    iconName: null
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
                        iconName: true,
                        _count: {
                            select: {
                                notes: true,
                            }
                        }
                    },
                    where:
                        {
                            title: "notebucik_book",
                        }
                });
                expect(body).toMatchObject({
                    id: notebook.id,
                    title: notebook.title,
                    description: notebook.description,
                    color: notebook.color,
                    createdAt: notebook.createdAt.toJSON(),
                    updatedAt: notebook.updatedAt.toJSON(),
                    iconName: notebook.iconName,
                    noteCount: notebook._count.notes,
                });


            }

            {
                const {status, body} = await request(app).get(`/user/notebooks`).set("Cookie", cookie).send({});

                expect(status).toBe(200);
                expect(body.length).toBe(2);
            }
            {

                const {
                    status,
                    body
                } = await request(app).post(`/notebook/${notebookId}/tag`).set("Cookie", cookie).send({
                    name: "testovaci tag",
                    color: "purple",
                });

                expect(status).toBe(200);
                expect(body).toMatchObject({
                    name: "testovaci tag",
                    color: "purple",
                });
                tagId = body.id;
            }

            {
                const {status, body} = await request(app).get(`/notebook/${notebookId}`).set("Cookie", cookie).send({});

                expect(status).toBe(200);
                const notebook = await prisma.notebook.findFirstOrThrow({
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        color: true,
                        createdAt: true,
                        updatedAt: true,
                        iconName: true,
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
                    iconName: notebook.iconName,
                    noteCount: notebook._count.notes,
                    tags: notebook.tags,
                });
            }

            {
                const {status} = await request(app).delete(`/notebook/${notebookId}/tag/${tagId}`).set("Cookie", cookie).send({});

                expect(status).toBe(200);
            }

            {
                const {status} = await request(app).delete(`/notebook/${notebookId}`).set("Cookie", cookie).send({});

                expect(status).toBe(200);
                const notebook = await prisma.notebook.findFirst({where: {id: notebookId}});
                expect(notebook).toBe(null);
            }

        });
    });
});