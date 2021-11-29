import config from '../config'
import blogs from "../db/blogs";
import * as passport from 'passport';
import * as PassportLocal from 'passport-local';
import * as PassportJWT from 'passport-jwt';
import { compareHash } from "../utils";
import {Application} from 'express';


export function configurePassport(app: Application){
        passport.serializeUser((user: any /*I suck*/, done)=> {
        if(user.password){
        delete user.password;
        }done(null, user);
    });
    
    passport.deserializeUser((user, done)=> done(null, user));

    passport.use(new PassportLocal.Strategy({
        usernameField: 'email'
    },async (email, password, done) =>{
        try {
            const [userFound] = await blogs.find("email", email);
            if (userFound && compareHash(password, userFound.userpassword)) {
                done(null, userFound);
        }else{
            done(null, false);
        }
        } catch (error) {
            done(error);
        }
    }))

    passport.use(new PassportJWT.Strategy({
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwt.secret,
    }, (payload: any, done) => {
        try {
            done(null, payload)
        } catch (error) {
             done(error);
        }
    }))
    app.use(passport.initialize());
}

