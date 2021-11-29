import * as express from "express";
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import {Users} from '../../db/models';
import config from '../../config';


const router = express.Router();


router.post("/", passport.authenticate('local'), async (req: any, res, next) => {
   try {
      const token = jwt.sign(
        {userid: req.user.id, email: req.user.email, role: 1}, 
        config.jwt.secret, {expiresIn: '1d'}
        );
      return res.json(token);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "My code login broke oops... SORRY" });
  }
});


export default router;






