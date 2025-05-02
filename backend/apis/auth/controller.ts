import {Request, Response} from "express";
import {handleRepositoryErrors, parseRequest} from "../utils";
import {userRepository} from "../user/repository";
import {authLoginSchema, authRegisterSchema} from "./validationSchemas";

const register = async (req: Request, res: Response) => {
    console.log("1");
    const request = await parseRequest(authRegisterSchema, req, res);
    if (!request) {
        return;
    }

    console.log("2");
    const email = await userRepository.findByEmail(req.body.email);

    console.log("3");
    if (email.isOk) {
        res.status(400).send({message: "User already exists"});
        return;
    }

    console.log("4");
    const user = await userRepository.create(request);

    if (user.isErr) {
        console.log("5");
        handleRepositoryErrors(user.error, res);
        return;
    }


    req.login(user.value, (err) => {
        if (err) {
            console.log("login in register failed");
            throw err;
        }
        res.status(201).end();
    });
}

const login = async (req: Request, res: Response) => {
    const request = await parseRequest(authLoginSchema, req, res);
    if (!request) {
        return;
    }

    res.status(200).end();
}

export const authController = {
    register,
    login,
}

