import {Request, Response} from "express";
import {handleRepositoryErrors, parseRequest} from "../utils";
import {userRepository} from "../user/repository";
import {authRegisterSchema} from "./validationSchemas";

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

    res.status(200).end();
};

const login = async (req: Request, res: Response) => {
    res.status(200).end();
}

export const authControler = {
    register,
    login,
}

