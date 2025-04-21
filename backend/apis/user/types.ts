import {z} from "zod";
import {userCreateRequestSchema,userUpdateRequestSchema,userCreateNotebookRequestSchema} from "./validationSchemas"

export type RequestUser = {
    id:string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export type UserResponse = {
    id:string,
    firstName: string,
    lastName: string,
    email: string,
}

export type UserUpdateRequest = z.infer<typeof userUpdateRequestSchema>;

export type UserCreateRequest = z.infer<typeof userCreateRequestSchema>;

export type UserCreateNotebookRequest = z.infer<typeof userCreateNotebookRequestSchema>;

