import { Strategy as LocalStrategy } from "passport-local";
import argon2 from "argon2";
import {userRepository} from "../user/repository";
import passport from "passport";
import {User} from "../user/types";

export const passportStrategy = () =>
    new LocalStrategy(
        {
            usernameField:  "email",
            passwordField: "password"
        },
        async (email, password, done) => {
            const res = await userRepository.findByEmail(email)

            if (res.isErr) {
                return done(null, false, { message: "Incorrect email or password" });
            }

            const user = res.unwrap()

            if (!await argon2.verify(user.password, password)) {
                return done(null, false, { message: "Incorrect email or password" });
            }

            return done(null, user);
        }
    );


passport.serializeUser((_user, cb) => {
    process.nextTick(() => {
        const user = _user as User;
        return cb(null, {
            id: user.id,
            email: user.email,
        });
    });
});

passport.deserializeUser((user, cb) => {
    process.nextTick(() => {
        return cb(null, user!);
    });
});

