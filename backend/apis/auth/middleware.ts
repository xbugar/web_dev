import { Request, Response, NextFunction } from "express";
declare module "express-session" {
    interface SessionData {
        passport: {
            user: { email: string; id: string };
        };
    }
}

export const isAuthenticated = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    if (req.session.passport?.user) next();
    else {
        res.status(404).send({message: "Unauthorized"});
        next("route")
    }
};
