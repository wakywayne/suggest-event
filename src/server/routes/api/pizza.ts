import * as express from "express";
import * as jwt from 'jsonwebtoken';
import config from '../../config';

const rout = express.Router();

rout.get('/', (req, res, next) => {
    // No token no go
    // If you run split with an undefined value of the token app will crash
    // That's why we need the question mark
    const bearerToken = req.headers.authorization?.split(' ');

    const token = bearerToken && bearerToken[0] === 'Bearer' ? 
    bearerToken[1]: null;

    if(!bearerToken || !token){
        res.status(401).json({message: 'Unauthorized'});
        return;
    }

    // Validate dat token
    const payload = jwt.verify(token, config.jwt.secret);

     console.log(payload);

    res.json({message: "Success"})
}
)

export default rout;