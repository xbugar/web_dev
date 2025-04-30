import {Router} from "express";
import {authControler} from "./controller";
import passport from "passport";
import {User} from "../user/types";

export const authRouter = Router();

authRouter.post("/login", authControler.register);
authRouter.post("/register", passport.authenticate("local"), authControler.login);
authRouter.post("/logout", passport.session(), (req, res, next) => {
    req.logout(
        {
            keepSessionInfo: false,
        },
        (err) => {
            if (err) {
                return next(err);
            }
            res.status(200).end();
        }
    );
});

