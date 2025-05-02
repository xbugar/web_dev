import {describe, expect, it} from 'vitest'
import request from 'supertest'
import app from '../test.index'
import {prisma} from "./utils/prisma";
import {defaultIcon} from "../apis/utils";

describe('/auth', async () => {
    describe('all auth operations happy path', async () => {
        let cookie: string;
        it('registers a user and logs him in. sends it back with 200', async () => {
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

            console.log(res)

            // expect(res.status).toBe(201);
            // expect(body).toStrictEqual({});
            expect(newUser).not.toBeNull();

            expect(res.status).toBe(201);
            expect(res.body).toStrictEqual({})
            cookie = res.headers['set-cookie'][0];

            const auto = await prisma.session.findMany()
            console.log(cookie)
            console.log(auto)
        });

        it('creates a users notebook', async () => {
            const icon = await defaultIcon();
            const url = "/user/notebook";
            const {status, body} = await request(app).post(url).set('Cookie', cookie).send(
                {
                    title: "notebucik",
                    description: "neeimeme",
                    color: "green",
                    iconName: icon.name
                }
            );
            expect(status).toBe(200);
        });
    });
});