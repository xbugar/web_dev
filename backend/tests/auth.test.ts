import {beforeAll, describe, expect, it} from 'vitest'
import request from 'supertest'
import app from '../test.index'
import {prisma} from "./utils/prisma";
import {defaultIcon} from "../apis/utils";
import resetDb from "./utils/reset-db";

describe('/auth', async () => {
    beforeAll(async () => {
        await resetDb()

    })
    describe('all auth operations happy path', async () => {
        let cookie: string;
        it('registers a user and automatically logs him in. sends it back with 200', async () => {
            let res = await request(app).post('/auth/register').send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@doe.com',
                password: '123456',
                confirmPassword: '123456'
            });
            const newUser = await prisma.user.findFirst({
                where: {
                    email: "john@doe.com",
                }
            });


            expect(newUser).not.toBeNull();

            expect(res.status).toBe(200);
            expect(res.body).toStrictEqual({message: "success"})
            cookie = res.headers['set-cookie'][0];
        });


        it('creates a users notebook', async () => {
            const icon = await defaultIcon();
            const url = "/user/notebook";
            const {status} = await request(app).post(url)
                .set('Cookie', cookie)
                .send(
                    {
                        title: "notebucik",
                        description: "neeimeme",
                        color: "green",
                        iconName: icon.name
                    }
                );
            expect(status).toBe(200);
        });

        it('logs out a user and sends it back with 200', async () => {
            const {status} = await request(app).post('/auth/logout')
                .set("Cookie", cookie)
                .send({})
            expect(status).toBe(200);
        });

        it('should not create the notebook as the user has logged out and should send 404', async () => {
            const icon = await defaultIcon();
            const url = "/user/notebook";
            const {status} = await request(app).post(url)
                .set('Cookie', cookie)
                .send(
                    {
                        title: "notebucik",
                        description: "neeimeme",
                        color: "green",
                        iconName: icon.name
                    }
                );
            expect(status).toBe(404);
        });
    });
});
