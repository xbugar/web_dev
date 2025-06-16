import {Request, Response} from "express";
import {handleRepositoryErrors, parseRequest} from "../utils";
import {userRepository} from "../user/repository";
import {authLoginSchema, authRegisterSchema, authRemoveUserSchema} from "./validationSchemas";
import {sendEmail} from "../mailer";
import argon2 from "argon2";

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

    if (request.body.withEmail) {
        await sendEmail(request.body.email, "Gradia Successful Registration", "You did it brother.");
    }


    req.login(user.value, (err) => {
        if (err) {
            console.log("login in register failed");
            throw err;
        }
        res.status(200).send({message: "success"}).end();
    });
}

const login = async (req: Request, res: Response) => {
    const request = await parseRequest(authLoginSchema, req, res);
    if (!request) {
        return;
    }

    res.status(200).send({sessionId: req.session.id});
}

async function status(req: Request, res: Response) {
    if (req.user === undefined) {
        res.status(401).send({message: "session expired"});
        return;
    }
    res.status(200).send({message: "session still active"});
}

const remove = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const email = req.session.passport?.user.email;
    const request = await parseRequest(authRemoveUserSchema, req, res);
    if (!userId || !email || !request) {
        return;
    }

    const user = await userRepository.findByEmail(email);

    if (user.isErr) {
        handleRepositoryErrors(user.error, res);
        return;
    }

    const isPasswordCorrect = await argon2.verify(
        user.value.password,
        request.body.password,
    );

    if (!isPasswordCorrect) {
        return res.status(403).send({message: "wrong credentials"});
    }

    const user2 = await userRepository.delete(userId);

    if (user2.isErr) {
        return handleRepositoryErrors(user2.error, res);
    }

    return res.status(200).send({message: "account was successfully removed"});
}

export const authController = {
    register,
    login,
    status,
    remove
}

