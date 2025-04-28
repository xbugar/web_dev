import {describe, expect, it} from "vitest";
import request from "supertest";
import app from "../test.index";
import {prisma} from "./utils/prisma";
import {defaultIcon} from "../apis/utils";

describe("/note", async () => {
    describe("happy path", async () => {
        let id: string;
        let notebookId: string;
        let tagId: string;
        let noteid: string;
        it('creates a user in database and sends it back with 200', async () => {
            const {status, body} = await request(app).post('/user').send({
                firstName: 'John',
                lastName: 'Doe',
                email: 'john_note@doe.com',
                password: '123456',
            });

            const newUser = await prisma.user.findFirst({where: {email: "john_note@doe.com"}});
            // 3
            expect(status).toBe(200);
            // 4
            expect(newUser).not.toBeNull();
            // 5
            expect(body).toStrictEqual({
                id: newUser?.id,
                firstName: 'John',
                lastName: 'Doe',
                email: 'john_note@doe.com',
            });
            id = body.id;
        });

        it(`should return 200 and create a notebook`, async () => {

            const icon = await defaultIcon();
            const url = "/user/" + id + "/notebook";
            const {status, body} = await request(app).post(url).send(
                {
                    title: "note-test-notebook",
                    description: "neeimeme",
                    color: "green",
                    iconName: "test"
                }
            );


            expect(status).toBe(200);
            const notebook = await prisma.notebook.findFirstOrThrow({
                select: {
                    id: true,
                    title: true,
                    description: true,
                    color: true,
                    createdAt: true,
                    updatedAt: true,
                    iconName: true,
                    _count: {
                        select: {
                            notes: true,
                        }
                    }
                },
                where:
                    {
                        userId: id,
                        title: "note-test-notebook",
                    }
            });
            expect(body).toMatchObject(
                {
                    id: notebook.id,
                    title: "note-test-notebook",
                    description: "neeimeme",
                    color: "green",
                    iconName: "test",
                    createdAt: notebook.createdAt.toJSON(),
                    updatedAt: notebook.updatedAt.toJSON(),
                    noteCount: notebook._count.notes,
                }
            );
            notebookId = body.id;
        });

        it('should create a note', async () => {
            const {status, body} = await request(app).post(`/notebook/${notebookId}/note`).send({
                title: "notikk",
            });

            expect(status).toBe(200);
            expect(body).toMatchObject({
                title: "notikk",
            });
            noteid = body.id;
        });

        it('should retrieve the created note', async () => {
            const {status, body} = await request(app).get(`/note/${noteid}`).send({});
            expect(status).toBe(200);
            expect(body).toMatchObject({
                title: "notikk",
            });
        });

        it('should add content to the note', async () => {
            const {
                status,
                body
            } = await request(app).put(`/note/${noteid}/content`).send({content:"this is a content of a note"});
            console.log(body);
            expect(status).toBe(200);
            const note = await prisma.note.findUniqueOrThrow({
                where: {
                    id: noteid
                }, select: {content: true}
            });
            expect(note.content).toStrictEqual("this is a content of a note");
        });

        it('should retrieve the content of a note',async ()=>{
            const{ status, body} = await request(app).get(`/note/${noteid}/content/`).send();
            console.log(body);
            expect(status).toBe(200);
            expect(body).toStrictEqual({content:"this is a content of a note"});
        })
    });
});