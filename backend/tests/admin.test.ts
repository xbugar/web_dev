import {describe, expect, it} from 'vitest'
import request from 'supertest'
import app from '../test.index'
import {prisma} from "./utils/prisma";
import argon2 from "argon2";

describe('/user', async () => {
    describe('all user operations happy path', async () => {
        let cookie: string;

        it('logs admin in. sends it back with 200', async () => {
            await prisma.user.create({
                data: {
                    firstName: "gyorgi",
                    lastName: "laszlo",
                    email: "gygylo@gmail.hu",
                    password: await argon2.hash("123456"),
                    isAdmin: true
                }
            })
            const res = await request(app).post('/auth/login').send({
                email: "gygylo@gmail.hu",
                password: '123456',
            });

            expect(res.status).toBe(200);
            cookie = res.headers['set-cookie'][0];
        });


        it('should retrieve all the admin data', async () => {
            const {status} = await request(app).get('/admin').set("Cookie", cookie).send();
            // console.log(body);
            expect(status).toBe(200);

        });

    });
});