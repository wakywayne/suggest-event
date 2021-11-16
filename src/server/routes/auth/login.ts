import * as express from "express";
// import * as jwt from 'jsonwebtoken';
import passport from 'passport';
import config from '../../config';


const router = express.Router();

// router.post("/", passport.authenticate('local'), async (req, res, next) => {
//    try {
//   //     const token = jwt.sign({
//   //       userid: userFound.id, email: userFound.email, role: 1}, 
//   //       config.jwt.secret, {expiresIn: '15d'}
//   //       );
//   //     return res.json(token);
//     res.json('plz');
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "My code login broke oops" });
//   }
// });

export default router;
