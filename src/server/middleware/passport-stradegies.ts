import * as passport from 'passport';
import * as PassportLocal from 'passport-local';
import blogs from "../db/blogs";
import { compareHash } from "../utils";

passport.serializeUser((user, done)=> done(null, user));
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
// ooof