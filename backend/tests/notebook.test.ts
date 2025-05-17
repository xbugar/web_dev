import {describe, expect, it} from 'vitest'
import request from 'supertest'
import app from '../test.index'
import {prisma} from "./utils/prisma";
import {defaultIcon} from "../apis/utils";


describe("/notebook", async () => {

    describe("happy path", async () => {
        let notebookId: string;
        let tagId: string;
        let cookie: string;
        it('registers a user and logs him in. sends it back with 200', async () => {
            const res = await request(app).post('/auth/register').send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john_@doe.com',
                password: '123456',
                confirmPassword: '123456'
            });
            const newUser = await prisma.user.findFirst({
                where: {
                    email: "john_@doe.com",
                }
            });


            expect(res.status).toBe(200);
            expect(res.body).toStrictEqual({"message": "success",
            });
            expect(newUser).not.toBeNull();

            cookie = res.headers['set-cookie'][0];
        });
        it(`should return 200 and create a notebook`, async () => {

            const icon = await defaultIcon();
            const url = "/user/notebook";
            const {status, body} = await request(app).post(url).set("Cookie", cookie).send(
                {
                    title: "notebucik_book",
                    description: "neeimeme",
                    color: "green",
                    iconName: icon.name
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
                    iconName: icon.name,
                    createdAt: notebook.createdAt.toJSON(),
                    updatedAt: notebook.updatedAt.toJSON(),
                    noteCount: notebook._count.notes,
                }
            );
            notebookId = body.id;
        });

        it('should return 200 and creates a notebook in the new way', async () => {
            const {status, body} = await request(app).post('/notebook').set("Cookie", cookie).send({
                title: "notebucik 2_book",
                description: "neeimeme",
                color: "green",
                iconName: null,
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
                    iconName: null,
                    createdAt: notebook.createdAt.toJSON(),
                    updatedAt: notebook.updatedAt.toJSON(),
                    noteCount: notebook._count.notes,
                }
            );
        });

        it('should return 200 and two existing notebooks for this user', async () => {
            const {status, body} = await request(app).get('/user/notebooks').set("Cookie", cookie).send({});
            expect(status).toBe(200);
            expect(body.length).toBe(2);
            //const notebooks= await prisma.user.findUniqueOrThrow({where:{id:id},select:{notebooks:true}});
            //expect(body).toMatchObject(notebooks.notebooks);
        });

        it('should change the description of a notebook  and return 200 ', async () => {
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


        });

        it('should retrieve both newly created notebooks', async () => {
            const {status, body} = await request(app).get(`/user/notebooks`).set("Cookie", cookie).send({});

            expect(status).toBe(200);
            expect(body.length).toBe(2);
        });
        it("should add new tag to the notebook", async () => {

            const {status, body} = await request(app).post(`/notebook/${notebookId}/tag`).set("Cookie", cookie).send({
                name: "testovaci tag",
                color: "purple",
            });

            expect(status).toBe(200);
            expect(body).toMatchObject({
                name: "testovaci tag",
                color: "purple",
            });
            tagId = body.id;
        });

        it("should retrieve the notebook by id", async () => {
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
        });
        it("should remove one of the tags added before", async () => {
            const {status} = await request(app).delete(`/notebook/${notebookId}/tag/${tagId}`).set("Cookie", cookie).send({});

            expect(status).toBe(200);
        })

        it('should delete the notebook', async () => {
            const {status} = await request(app).delete(`/notebook/${notebookId}`).set("Cookie", cookie).send({});

            expect(status).toBe(200);
            const notebook = await prisma.notebook.findFirst({where: {id: notebookId}});
            expect(notebook).toBe(null);
        });

    });
});