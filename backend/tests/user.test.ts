import {describe, expect, it} from 'vitest'
import request from 'supertest'
import app from '../test.index'
import {prisma} from "./utils/prisma";

describe('/user', async () => {
    describe('all user operations happy path', async () => {
        let id: string;
        let cookie: string;
        it('registers a user and automatically logs him in. sends it back with 200', async () => {
            let res = await request(app).post('/auth/register').send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'bruh@doe.com',
                password: '123456',
                confirmPassword: '123456'
            });
            const newUser = await prisma.user.findFirst({
                where: {
                    email: "bruh@doe.com",
                }
            });


            expect(newUser).not.toBeNull();

            expect(res.status).toBe(200);
            expect(res.body).toStrictEqual({})
            cookie = res.headers['set-cookie'][0];
        });


        it('should retrieve existing user based on the id in this case john doe', async () => {
            const {status, body} = await request(app).get('/user').set("Cookie", cookie).send();
            expect(status).toBe(200);

            console.log(body.id)
            id = body.id;

            expect(body).toEqual(expect.objectContaining({
                firstName: 'John',
                lastName: 'Doe',
                email: 'bruh@doe.com',
            }));
        });

        it('should change the surname of user and return the changed object with 200', async () => {
            const {status, body} = await request(app).put('/user').set("Cookie", cookie).send({
                lastName: 'Doedinger',
            })
            expect(status).toBe(200);
            expect(body).toEqual(expect.objectContaining({
                firstName: 'John',
                lastName: 'Doedinger',
                email: 'bruh@doe.com',
            }));
        });

        it('should return 200 and empty array as no notebooks exist for this user for now', async () => {
            const {status, body} = await request(app).get('/user/notebooks').set("Cookie", cookie).send({});
            expect(status).toBe(200);
            expect(body).toStrictEqual([]);
        });

        it('should delete the user and return 200', async () => {
            const {status} = await request(app).delete('/user').set("Cookie", cookie).send();

            expect(status).toBe(200);
            const newUser = await prisma.user.findFirst(
                {where: {id: id}}
            );
            expect(newUser).toBe(null);
        })


    });
    /*
        describe('[POST] /user invalid requests', async () => {

        })*/
});