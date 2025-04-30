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
    _res: Response,
    next: NextFunction
) => {
    console.log(req.session);

    if (req.session.passport?.user) next();
    else next("route");
};
