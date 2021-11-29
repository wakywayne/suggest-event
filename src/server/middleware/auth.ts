import * as passport from 'passport';
import express from 'express';

export function tokenCheck(req: express.Request, res: express.Response, next: express.NextFunction){
    passport.authenticate('jwt', (err, user,info) => {

        if(err){
          return  next(err);
            // If next err get's called it get daisy chained to the call back and then does the try catch that's on pizza time for example  
        }


        if(info){
            console.log(info)
            return res.status(401).json({message: info.message});
        }
        
        if(!user){
            return res.status(401).json({message: 'Rederect to login something went wrong'});
            // res.redirect('/login);
        }
        req.user = user;
        next();
    })(req,res,next)
}

