// import {describe, expect, it} from "vitest";
// import request from "supertest";
// import app from "../test.index";
// import {prisma} from "./utils/prisma";
//
// describe("/note", async () => {
//     describe("happy path", async () => {
//         let cookies: string;
//         let notebookId: string;
//         let noteId: string;
//         it('registers a user and logs him in. sends it back with 200', async () => {
//             let {status, body} = await request(app).post('/auth/register').send({
//                 firstName: 'Jane',
//                 lastName: 'Doe',
//                 email: 'jane@doe.com',
//                 password: '123456',
//                 confirmPassword: '123456'
//             });
//             const newUser = await prisma.user.findFirst({
//                 where: {
//                     email: "jane@doe.com",
//                 }
//             });
//
//             expect(status).toBe(201);
//             expect(body).toStrictEqual({});
//             expect(newUser).not.toBeNull();
//
//             const res = await request(app).post('/auth/login').send({
//                 email: 'johnn@doe.com',
//                 password: '123456',
//             });
//
//             expect(res.status).toBe(200);
//             cookies = res.headers['set-cookie'][0];
//         });
//
//         it(`should return 200 and create a notebook`, async () => {
//
//             const url = "/user/notebook";
//             const {status, body} = await request(app).post(url)
//                 .set("Cookie", cookies)
//                 .send(
//                     {
//                         title: "note-test-notebook",
//                         description: "neeimeme",
//                         color: "green",
//                         iconName: "test"
//                     }
//                 );
//
//
//             expect(status).toBe(200);
//             const notebook = await prisma.notebook.findFirstOrThrow({
//                 select: {
//                     id: true,
//                     title: true,
//                     description: true,
//                     color: true,
//                     createdAt: true,
//                     updatedAt: true,
//                     iconName: true,
//                     _count: {
//                         select: {
//                             notes: true,
//                         }
//                     }
//                 },
//                 where:
//                     {
//                         title: "note-test-notebook",
//                     }
//             });
//             expect(body).toMatchObject(
//                 {
//                     id: notebook.id,
//                     title: "note-test-notebook",
//                     description: "neeimeme",
//                     color: "green",
//                     iconName: "test",
//                     createdAt: notebook.createdAt.toJSON(),
//                     updatedAt: notebook.updatedAt.toJSON(),
//                     noteCount: notebook._count.notes,
//                 }
//             );
//             notebookId = body.id;
//         });
//
//         it('should create a note', async () => {
//             const {status, body} = await request(app).post(`/notebook/${notebookId}/note`)
//                 .set("Cookie", cookies)
//                 .send({
//                     title: "notikk",
//                 });
//
//             expect(status).toBe(200);
//             expect(body).toMatchObject({
//                 title: "notikk",
//             });
//             noteId = body.id;
//         });
//
//         it('should retrieve the created note', async () => {
//             const {status, body} = await request(app)
//                 .get(`/note/${noteId}`)
//                 .set("Cookie", cookies)
//                 .send({});
//             expect(status).toBe(200);
//             expect(body).toMatchObject({
//                 title: "notikk",
//             });
//         });
//
//         it('should add content to the note', async () => {
//             const {
//                 status,
//                 body
//             } = await request(app)
//                 .put(`/note/${noteId}/content`)
//                 .set("Cookie", cookies)
//                 .send({content: "this is a content of a note"});
//             console.log(body);
//             expect(status).toBe(200);
//             const note = await prisma.note.findUniqueOrThrow({
//                 where: {
//                     id: noteId
//                 }, select: {content: true}
//             });
//             expect(note.content).toStrictEqual("this is a content of a note");
//         });
//
//         it('should retrieve the content of a note', async () => {
//             const {status, body} = await request(app)
//                 .get(`/note/${noteId}/content/`)
//                 .set("Cookie", cookies)
//                 .send();
//
//             console.log(body);
//             expect(status).toBe(200);
//             expect(body).toStrictEqual({content: "this is a content of a note"});
//         })
//
//         it('should retrieve note and notebook update time and they match', async () => {
//             const {status: statusNote, body: note} = await request(app)
//                 .get(`/note/${noteId}`)
//                 .set("Cookie", cookies)
//                 .send({});
//
//             expect(statusNote).toBe(200);
//             expect(note).toMatchObject({
//                 title: "notikk",
//             });
//             const {status: statusNotebook, body: notebook} = await request(app)
//                 .get(`/notebook/${notebookId}`)
//                 .set("Cookie", cookies)
//                 .send({});
//
//             expect(statusNotebook).toBe(200);
//             expect(note.updatedAt).toStrictEqual(notebook.updatedAt);
//         })
//     });
// });