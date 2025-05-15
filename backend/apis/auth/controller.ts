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
    res.status(200).send({message:"success"});
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

    res.status(200).send({sessionId:req.session.id});
}

async function status(req: Request, res: Response){
    if (req.user === undefined){
        res.status(401).send({message:"session expired"});
    }
    res.status(200).send({message:"session still active"});
}

export const authController = {
    register,
    login,
    status
}

