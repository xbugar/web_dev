import {describe, expect, it} from 'vitest'
import request from 'supertest'
import app from '../test.index'
import {prisma} from "./utils/prisma";

describe('/user', async () => {
    describe('all user operations happy path', async () => {
        let id: string;
        it('creates a user in database and sends it back with 200', async () => {
            const {status, body} = await request(app).post('/user').send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@doe.com',
                password: '123456',
            });
            const newUser = await prisma.user.findFirst({
                where: {
                    email: "john@doe.com",
                }
            });
            // 3
            expect(status).toBe(200);
            // 4
            expect(newUser).not.toBeNull();
            // 5
            expect(body).toStrictEqual({
                id: newUser?.id,
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@doe.com',
            });
            id = body.id;
        });
        it('should retrieve existing user based on the id in this case john doe', async () => {
            const {status, body} = await request(app).get('/user/' + id).send();
            expect(status).toBe(200);
            expect(body).toStrictEqual({
                id: id,
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@doe.com',
            });
        });

        it('should change the surname of user and return the changed object with 200', async () => {
            const {status, body} = await request(app).put('/user/' + id).send({
                lastName: 'Doedinger',
            })
            expect(status).toBe(200);
            expect(body).toStrictEqual({
                id: id,
                firstName: 'John',
                lastName: 'Doedinger',
                email: 'john@doe.com',
            });
        });

        it('should return 200 and empty array as no notebooks exist for this user for now', async () => {
            const {status, body} = await request(app).get('/user/' + id + '/notebooks').send({});
            expect(status).toBe(200);
            expect(body).toStrictEqual([]);
        });

        it('should delete the user and return 200', async () => {
            const {status} = await request(app).delete('/user/' + id).send();

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