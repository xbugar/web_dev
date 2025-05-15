import {Router} from "express";
import {authController} from "./controller";
import passport from "passport";
import {User} from "../user/types";
import {isAuthenticated} from "./middleware";

export const authRouter = Router();

authRouter.post("/login", passport.authenticate("local"), authController.login);
authRouter.post("/register", authController.register);
authRouter.post("/status", passport.session(), authController.status)
authRouter.post("/logout", passport.session(), isAuthenticated, (req, res, next) => {
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


passport.serializeUser((_user, cb) => {
    process.nextTick(() => {
        const user = _user as User;
        return cb(null, {
            id: user.id,
            email: user.email
        });
    });
});

passport.deserializeUser((user, cb) => {
    process.nextTick(() => {
        return cb(null, user!);
    });
});

