import {describe, expect, it} from 'vitest'
import request from 'supertest'
import app from '../test.index'

describe("/deck", async () => {
    describe("happy path", async () => {
        let deckId: string, cookie: string, cardId: string;

        it('creates user', async () => {
            const res = await request(app).post('/auth/register').send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'jajajaja@doe.com',
                password: '123456',
                confirmPassword: '123456'
            });


            expect(res.status).toBe(200);
            expect(res.body).toStrictEqual({message: "success"});
            cookie = res.headers['set-cookie'][0];

        });

        it('creates deck', async () => {
            const url = "/user/deck";
            const {status, body} = await request(app).post(url).set("Cookie", cookie).send(
                {
                    title: "deck",
                    description: "deck",
                    color: "green",
                }
            );
            expect(status).toBe(200);
            deckId = body.id;
        });

        it('creates a card', async () => {
            const url = `/deck/${deckId}`;
            const {status, body} = await request(app).post(url).set("Cookie", cookie).send({
                question: "question",
                answer: "answer"
            });

            expect(status).toBe(200);
            cardId = body.id;
        });

        it('updates a card', async () => {
            const url = `/card/${cardId}`;
            const {status, body} = await request(app).put(url).set("Cookie", cookie).send({
                question: "will i pass",
                answer: "no"
            });

            expect(status).toBe(200);
            // console.log(body);
        });

        it('gets cards', async () => {
            const url = `/deck/${deckId}/cards`;
            const {status, body} = await request(app).get(url).set("Cookie", cookie).send({});

            expect(status).toBe(200);
            // console.log(body);
        });


    });
});