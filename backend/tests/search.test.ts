import {describe, expect, it} from 'vitest'
import request from 'supertest'
import app from '../test.index'
import {prisma} from "./utils/prisma";

describe('/auth', async () => {
    describe('all auth operations happy path', async () => {
        let cookie: string;
        let notebookId: string;
        it('registers a user and automatically logs him in. sends it back with 200', async () => {
            const res = await request(app).post('/auth/register').send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'jonah@doe.com',
                password: '123456',
                confirmPassword: '123456'
            });

            expect(res.status).toBe(200);
            expect(res.body).toStrictEqual({message: "success"})

            cookie = res.headers['set-cookie'][0];
        });

        it('creates notebook, event and note without the substring auto', async () => {
            let url: string = "/user/notebook";
            const {status: notebookStatus, body: notebookBody} = await request(app).post(url)
                .set('Cookie', cookie)
                .send(
                    {
                        title: "PESBAZINGA",
                        description: "neeimeme",
                        color: "green",
                        iconName: "Default"
                    }
                );

            expect(notebookStatus).toBe(200);
            notebookId = notebookBody.id;

            url = "/event";
            const {status: eventStatus} = await request(app).post(url).set("Cookie", cookie).send(
                {
                    title: "MACKAYAAAAAAAAAAAAAAAAAAAAAAAAA",
                    description: "pleaseeee description",
                    timeFrom: Date.now(),
                    timeTo: Date.now(),
                    repeat: "Never"
                }
            );
            expect(eventStatus).toBe(200);

            const {status} = await request(app).post(`/notebook/${notebookId}/note`)
                .set("Cookie", cookie)
                .send({
                    title: "notikk",
                });
            expect(status).toBe(200);
        });

        it('creates notebook, event and note with the substring auto', async () => {
            let url = "/user/notebook";
            const {status: notebookStatus, body: notebookBody} = await request(app).post(url)
                .set('Cookie', cookie)
                .send(
                    {
                        title: "PEautoBAZINGA",
                        description: "neeimeme",
                        color: "green",
                        iconName: "Default"
                    }
                );
            expect(notebookStatus).toBe(200);
            notebookId = notebookBody.id;

            url = "/event";
            const {status: eventStatus} = await request(app).post(url).set("Cookie", cookie).send(
                {
                    title: "MACKAautoYAAAAAAAAAAAAAAAAAAAAAAAAA",
                    description: "pleaseeee description",
                    timeFrom: Date.now(),
                    timeTo: Date.now(),
                    repeat: "Never"
                }
            );
            expect(eventStatus).toBe(200);

            const {status} = await request(app).post(`/notebook/${notebookId}/note`)
                .set("Cookie", cookie)
                .send({
                    title: "notikkauto",
                });
            expect(status).toBe(200);
        });

        it('searches for notebooks, events and notes with the substring auto', async () => {
            const {status, body} = await request(app)
                .get('/search')
                .set('Cookie', cookie)
                .query({q: 'auto'});

            expect(status).toBe(200);
            expect(body.query).toBe('auto');

            // console.log(body) // check yourself
        });
    });
});