import {describe, expect, it} from 'vitest'
import request from 'supertest'
import app from '../test.index'
import {prisma} from "./utils/prisma";
// import {defaultIcon} from "../apis/utils";


describe("/event", async () => {
    describe("happy path", async () => {
        let eventId: string;
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
            expect(res.body).toStrictEqual({message: "success"});
            expect(newUser).not.toBeNull();

            cookie = res.headers['set-cookie'][0];
        });
        it(`should return 200 and create an event`, async () => {
            const url = "/event";
            const {status, body} = await request(app).post(url).set("Cookie", cookie).send(
                {
                    title: "pleaseeee",
                    description: "pleaseeee description",
                    timeFrom: Date.now(),
                    timeTo: Date.now(),
                    repeat: "Never"
                }
            );
            expect(status).toBe(200);

            const event = await prisma.event.findFirstOrThrow({
                where: {
                    id: body.id
                }
            });
            expect(body).toMatchObject({
                id: event.id,
                title: event.title,
                description: event.description,
                timeFrom: event.timeFrom.toISOString(),
                timeTo: event.timeTo.toISOString(),
                repeat: "Never",
            });
            eventId = body.id;
        });

        it(`should return 200 and update an event`, async () => {
            const url = `/event/${eventId}`;
            const {status, body} = await request(app).put(url).set("Cookie", cookie).send(
                {
                    title: "opnaocn",
                    description: "pdvjpwqmnpcm",
                    timeFrom: Date.now(),
                    timeTo: Date.now(),
                    repeat: "Every Day"
                }
            );
            expect(status).toBe(200);

            const event = await prisma.event.findFirstOrThrow({
                where: {
                    id: body.id
                }
            });
            expect(body).toMatchObject({
                id: event.id,
                title: event.title,
                description: event.description,
                timeFrom: event.timeFrom.toISOString(),
                timeTo: event.timeTo.toISOString(),
                repeat: "Every Day",
            });
            eventId = body.id;
        });

        it(`should return 200 and get an event`, async () => {
            const url = `/event/${eventId}`;
            const {status, body} = await request(app).get(url).set("Cookie", cookie).send();
            expect(status).toBe(200);

            const event = await prisma.event.findFirstOrThrow({
                where: {
                    id: body.id
                }
            });
            expect(body).toMatchObject({
                id: event.id,
                title: event.title,
                description: event.description,
                timeFrom: event.timeFrom.toISOString(),
                timeTo: event.timeTo.toISOString(),
                repeat: "Every Day",
            });
            eventId = body.id;
        });

        it(`should return 200 and get user events`, async () => {
            const url = `/event`;
            const res = await request(app).get(url).set("Cookie", cookie).send({});
            expect(res.status).toBe(200);
            // console.log(res.body); //check the results
        });

        it(`should return 200 and add tag`, async () => {
            const url = `/event/${eventId}/tag`;
            const {status, body} = await request(app).post(url).set("Cookie", cookie).send({
                name: "this is a tag",
                color: "orange"
            });
            expect(status).toBe(200);
            expect(body).toMatchObject({
                name: "this is a tag",
                color: "orange",
            });
            tagId = body.id;
        });

        it(`should return 200 and remove tag`, async () => {
            const url = `/event/${eventId}/tag/${tagId}`;
            const {status} = await request(app).delete(url).set("Cookie", cookie).send();

            expect(status).toBe(200);
        });

        it("should return 200 and get events by date", async () => {
            const url = "/event/date";
            const {status} = await request(app).get(url).set("Cookie", cookie).send({
                date: Date.now()
            });

            expect(status).toBe(200);

            // console.log(resp.body); // check yourself
        });

        it("should return 200 and delete event", async () => {
            const url = `/event/${eventId}`;
            const resp = await request(app).delete(url).set("Cookie", cookie).send();

            expect(resp.status).toBe(200);

            // console.log(resp.body); // check yourself
        });
    });
});