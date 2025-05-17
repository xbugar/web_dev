import {describe, expect, it} from 'vitest'
import request from 'supertest'
import app from '../test.index'
import {prisma} from "./utils/prisma";
import {defaultIcon} from "../apis/utils";


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

            const icon = await defaultIcon();
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
        });
    });
});