import { describe, expect, it } from 'vitest'
import request from 'supertest'
import app from '../test.index'
import {prisma} from "./utils/prisma";

describe('/user', async () => {
    describe('[POST] /user', async () => {
        let id:string;
        it('creates a user in database and sends it back with 200', async () => {
            const {status,body} = await request(app).post('/user').send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@doe.com',
                password: '123456',
            });
            console.log(body);
            const newUser = await prisma.user.findFirst();
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
            id =body.id;
        });
        it('should retrieve existing user based on the id', async () => {
            const {status,body}  = await request(app).get('/user/'+id).send();
            expect(status).toBe(200);
            console.log(body);

        });
    });
});