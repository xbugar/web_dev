import {describe, expect, it} from 'vitest'
import request from 'supertest'
import app from '../test.index'
import {prisma} from "./utils/prisma";

describe("/deck", async () => {
    describe("happy path", async () => {
        it('just does the happy path', async () => {
            let deckId: string;
            let tagId: string;

            const res = await request(app).post('/auth/register').send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john_bazinga@doe.com',
                password: '123456',
                confirmPassword: '123456'
            });


            expect(res.status).toBe(200);
            expect(res.body).toStrictEqual({message: "success"});

            const cookie = res.headers['set-cookie'][0];
            {
                const url = "/user/deck";
                const {status, body} = await request(app).post(url).set("Cookie", cookie).send(
                    {
                        title: "deck",
                        description: "deck",
                        color: "green",
                    }
                );


                expect(status).toBe(200);
                const deck = await prisma.deck.findFirstOrThrow({
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        color: true,
                        createdAt: true,
                        updatedAt: true,
                        _count: {
                            select: {
                                cards: true,
                            }
                        }
                    },
                    where:
                        {
                            title: "deck",
                        }
                });
                expect(body).toMatchObject(
                    {
                        id: deck.id,
                        title: "deck",
                        description: "deck",
                        color: "green",
                        createdAt: deck.createdAt.toJSON(),
                        updatedAt: deck.updatedAt.toJSON(),
                        flashCardsCount: deck._count.cards,
                    }
                );
                deckId = body.id;
            }

            {
                const {status, body} = await request(app).get('/user/decks').set("Cookie", cookie).send({});
                expect(status).toBe(200);
                expect(body.length).toBe(1);
            }

            {
                const {status, body} = await request(app).put("/deck/" + deckId).set("Cookie", cookie).send({
                    title: "new deck",
                    color: "green",
                });

                expect(status).toBe(200);
                const deck = await prisma.deck.findFirstOrThrow({
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        color: true,
                        createdAt: true,
                        updatedAt: true,
                        _count: {
                            select: {
                                cards: true,
                            }
                        }
                    },
                    where:
                        {
                            title: "new deck",
                        }
                });
                expect(body).toMatchObject({
                    id: deck.id,
                    title: deck.title,
                    description: deck.description,
                    color: deck.color,
                    createdAt: deck.createdAt.toJSON(),
                    updatedAt: deck.updatedAt.toJSON(),
                    flashCardsCount: deck._count.cards,
                });


            }

            {
                const {status, body} = await request(app).get(`/user/decks`).set("Cookie", cookie).send({});

                expect(status).toBe(200);
                expect(body.length).toBe(1);
            }

            {
                const {
                    status,
                    body
                } = await request(app).post(`/deck/${deckId}/tag`).set("Cookie", cookie).send({
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
                const {status, body} = await request(app).get(`/deck/${deckId}`).set("Cookie", cookie).send({});

                expect(status).toBe(200);
                const deck = await prisma.deck.findFirstOrThrow({
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        color: true,
                        createdAt: true,
                        updatedAt: true,
                        tags: true,
                        _count: {
                            select: {
                                cards: true,
                            }
                        }
                    },
                    where:
                        {
                            id: deckId
                        }
                });

                expect(body).toMatchObject({
                    id: deck.id,
                    title: deck.title,
                    description: deck.description,
                    color: deck.color,
                    createdAt: deck.createdAt.toJSON(),
                    updatedAt: deck.updatedAt.toJSON(),
                    flashCardsCount: deck._count.cards,
                    tags: deck.tags,
                });
            }

            {
                const {status} = await request(app).delete(`/deck/${deckId}/tag/${tagId}`).set("Cookie", cookie).send({});

                expect(status).toBe(200);
            }

            {
                const {status, body} = await request(app).get(`/deck/${deckId}/cards`).set("Cookie", cookie).send({});

                expect(status).toBe(200);
                expect(body.length).toBe(0);
            }

            {
                const {status} = await request(app).delete(`/deck/${deckId}`).set("Cookie", cookie).send({});

                expect(status).toBe(200);
                const deck = await prisma.deck.findFirst({where: {id: deckId}});
                expect(deck).toBe(null);
            }

        });
    });
});