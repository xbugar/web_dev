import {Request, Response} from "express";
import {handleRepositoryErrors, parseRequest} from "../utils";
import {userRepository} from "../user/repository";
import {authLoginSchema, authRegisterSchema} from "./validationSchemas";

const register = async (req: Request, res: Response) => {
    const request = await parseRequest(authRegisterSchema, req, res);
    if (!request) {
        return;
    }

    const email = await userRepository.findByEmail(req.body.email);

    if (email.isOk) {
        res.status(400).send({message: "User already exists"});
        return;
    }

    const user = await userRepository.create(request);

    if (user.isErr) {
        handleRepositoryErrors(user.error, res);
        return;
    }
    res.status(200);
/*
    req.login(user.value, (err) => {
        if (err) {
            console.log("login in register failed");
            throw err;
        }
        res.status(200).end();
    });*/
}

const login = async (req: Request, res: Response) => {
    const request = await parseRequest(authLoginSchema, req, res);
    if (!request) {
        return;
    }

    res.status(200).setHeader("Set-Cookie", "session_id=value; Secure; HttpOnly; SameSite=None").send({sessionId:req.session.id});
}

export const authController = {
    register,
    login,
}

